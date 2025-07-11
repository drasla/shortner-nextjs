import { NextRequest, NextResponse } from "next/server";
import { prisma } from "src/libraries/prisma/prisma";
import { getLocale, getTranslations } from "next-intl/server";
import HashUtility from "../../../../utilities/hash/hashUtility";
import { v4 as uuidV4 } from "uuid";
import { HeaderUtility } from "../../../../utilities/header/headerUtility";

export async function POST(request: NextRequest) {
    const locale = await getLocale();
    const t = await getTranslations({ locale });
    try {
        const data = await request.json();
        const { email, password } = data;

        if (!email || !password) {
            return NextResponse.json(
                { success: false, error: t("action.invalidInput")},
                { status: 400 },
            );
        }

        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                salt: true,
                hashedPassword: true,
                isAdmin: true,
                isActive: true,
            },
        });

        if (!user || !user.isActive || !user.hashedPassword) {
            return NextResponse.json(
                { success: false, error: t("action.auth.signIn.invalidCredentials") },
                { status: 401 },
            );
        }

        const hashedPassword = HashUtility.hashValue(password, user.salt);
        if (hashedPassword !== user.hashedPassword) {
            return NextResponse.json(
                { success: false, error: t("action.auth.signIn.invalidCredentials") },
                { status: 401 },
            );
        }

        const oldSessionToken = request.cookies.get("session_token")?.value;
        if (oldSessionToken) {
            try {
                const oldSession = await prisma.session.findUnique({
                    where: { token: oldSessionToken },
                    include: { user: true },
                });

                if (oldSession && oldSession.user.isAnonymous) {
                    await prisma.user.delete({
                        where: { id: oldSession.user.id },
                    });
                } else if (oldSession) {
                    await prisma.session.delete({
                        where: { token: oldSessionToken },
                    });
                }
            } catch (error) {
                console.log("error: ", error);
            }
        }

        const token = uuidV4();
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 30);

        const userAgent = HeaderUtility.getUserAgentFromRequest(request);
        const ipAddress = HeaderUtility.getClientIPFromRequest(request);

        await prisma.session.create({
            data: {
                token,
                userId: user.id,
                expiresAt,
                userAgent,
                ipAddress,
            },
        });

        const response = NextResponse.json({ success: true }, { status: 200 });

        response.cookies.set({
            name: "session_token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: expiresAt,
            path: "/",
        });

        return response;
    } catch {
        return NextResponse.json({ success: false, error: t("action.serverError") });
    }
}
