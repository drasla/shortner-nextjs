import { NextRequest, NextResponse } from "next/server";
import { prisma } from "src/libraries/prisma/prisma";
import HashUtility from "../../../../utilities/hash/hashUtility";
import { v4 as uuidV4 } from "uuid";
import { HeaderUtility } from "../../../../utilities/header/headerUtility";
import { getLocale, getTranslations } from "next-intl/server";

export async function GET(request: NextRequest) {
    try {
        const sessionToken = request.cookies.get("session_token")?.value;

        if (sessionToken) {
            const session = await prisma.session.findUnique({
                where: { token: sessionToken },
                include: { user: true },
            });

            if (session && session.user.isActive && session.expiresAt > new Date()) {
                return NextResponse.json({ success: true, isNewUser: false }, { status: 200 });
            }
        }

        const salt = HashUtility.createSalt();
        const tempHashedId = HashUtility.hashValue("temp", salt);

        const user = await prisma.user.create({
            data: {
                salt,
                hashedId: tempHashedId,
                isAnonymous: true,
                isActive: true,
            },
        });

        const userId = user.id;
        const hashedId = HashUtility.hashValue(userId, salt);

        await prisma.user.update({
            where: { id: userId },
            data: { hashedId },
        });

        const token = uuidV4();
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 30);

        const userAgent = HeaderUtility.getUserAgentFromRequest(request);
        const ipAddress = HeaderUtility.getClientIPFromRequest(request);

        await prisma.session.create({
            data: {
                token,
                userId,
                expiresAt,
                userAgent,
                ipAddress,
            },
        });

        const response = NextResponse.json({ success: true, isNewUser: true }, { status: 201 });

        response.cookies.set({
            name: "session_token",
            value: token,
            httpOnly: process.env.NODE_ENV === "production",
            sameSite: "lax",
            expires: expiresAt,
        });

        return response;
    } catch {
        const locale = await getLocale();
        const t = await getTranslations({ locale });
        return NextResponse.json({ success: false, error: t("action.serverError") });
    }
}
