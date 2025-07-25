import { NextRequest, NextResponse } from "next/server";
import { prisma } from "src/libraries/prisma/prisma";
import { HeaderUtility } from "../../utilities/header/headerUtility";
import { parseUserAgent } from "../../utilities/parseUtility/parseUtility";
import dayjs from "dayjs";
import ogs from "open-graph-scraper";
import { SuccessResult } from "open-graph-scraper/types";

function escapeHtml(text: string) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function GET(request: NextRequest, { params }: { params: { shortCode: string } }) {
    const shortCode = params.shortCode;

    const shortUrl = await prisma.shortUrl.findUnique({
        where: { shortCode },
    });

    if (!shortUrl) {
        return new Response("Not Found", { status: 404 });
    }

    const ogResult = await ogs({ url: shortUrl.originalUrl });
    let meta = null;
    if (!ogResult.error) {
        meta = (ogResult as SuccessResult).result;
    }
    const ogImageUrl = meta
        ? Array.isArray(meta.ogImage)
            ? meta.ogImage[0]?.url || ""
            : meta.ogImage || ""
        : "";

    const shortUrlId = shortUrl.id;
    const ip = HeaderUtility.getClientIPFromRequest(request);
    const userAgentString = HeaderUtility.getUserAgentFromRequest(request);
    const { browser, device, os } = parseUserAgent(userAgentString);

    const now = dayjs();
    const hour = now.hour();
    const date = now.startOf("day").toDate();

    const visitCountToday = await prisma.visitLog.count({
        where: {
            shortUrlId,
            ipAddress: ip,
            createdAt: {
                gte: now.startOf("day").toDate(),
                lt: now.endOf("day").toDate(),
            },
        },
    });

    if (visitCountToday < 3) {
        await prisma.$transaction([
            prisma.visitLog.create({
                data: {
                    shortUrlId,
                    ipAddress: ip,
                    userAgent: userAgentString,
                    referrer: request.headers.get("referer") || null,
                },
            }),
            prisma.shortUrl.update({
                where: { id: shortUrlId },
                data: { clicks: { increment: 1 } },
            }),
            prisma.browserStat.upsert({
                where: { shortUrlId_browser: { shortUrlId, browser } },
                update: { count: { increment: 1 } },
                create: { shortUrlId, browser, count: 1 },
            }),
            prisma.deviceOsStat.upsert({
                where: { shortUrlId_device_os: { shortUrlId, device, os } },
                update: { count: { increment: 1 } },
                create: { shortUrlId, device, os, count: 1 },
            }),
            prisma.dailyStat.upsert({
                where: { shortUrlId_date: { shortUrlId, date } },
                update: { count: { increment: 1 } },
                create: { shortUrlId, date, count: 1 },
            }),
            prisma.hourlyStat.upsert({
                where: { shortUrlId_hour: { shortUrlId, hour } },
                update: { count: { increment: 1 } },
                create: { shortUrlId, hour, count: 1 },
            }),
        ]);
    }

    if (meta) {
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(meta.ogTitle || "Redirecting...")}</title>
    <meta property="og:title" content="${escapeHtml(meta.ogTitle || "")}" />
    <meta property="og:description" content="${escapeHtml(meta.ogDescription || "")}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:url" content="${shortUrl.originalUrl}" />
    <noscript>
        <meta http-equiv="refresh" content="3;url=${shortUrl.originalUrl}" />
    </noscript>
</head>
<body>
<script>
  window.location.href = "${shortUrl.originalUrl}";
</script>
</body>
</html>
        `;
        return new Response(html, {
            headers: { "Content-Type": "text/html" },
        });
    }

    return NextResponse.redirect(shortUrl.originalUrl);
}
