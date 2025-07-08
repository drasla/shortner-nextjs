import { NextRequest } from "next/server";
import { createSignInSchemaWithLocale } from "./signInSchema";
import { HeaderUtility } from "../../../../utilities/header/headerUtility";
import PasswordHashUtility from "../../../../utilities/hash/hashUtility";
import { SessionUtility } from "../../../../utilities/session/sessionUtility";
import { UserData } from "../../../../types/userData";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { prisma } from "../../../../libraries/prisma/prisma";
import { ApiResponseHelper } from "../../../../utilities/apiResponseHelper/apiResponseHelper";
import { MESSAGE_KEYS } from "../../../../utilities/apiResponseHelper/_const";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const locale = await ApiResponseHelper.getLocaleFromRequest(request);
        const signInSchema = await createSignInSchemaWithLocale(locale);

        const validation = signInSchema.safeParse(body);
        if (!validation.success) {
            return await ApiResponseHelper.error(
                request,
                MESSAGE_KEYS.API.INVALID_INPUT,
                400,
                validation.error.flatten().fieldErrors,
            );
        }

        const { email, password, rememberMe } = validation.data;
        const clientIP = HeaderUtility.getClientIP(request);
        const userAgent = HeaderUtility.getUserAgent(request);

        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                salt: true,
                saltedPassword: true,
                isAdmin: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user || !user.isActive) {
            await prisma.loginAttempt.create({
                data: {
                    email,
                    ipAddress: clientIP,
                    userAgent,
                    success: false,
                },
            });

            return ApiResponseHelper.error(
                request,
                MESSAGE_KEYS.API.AUTH.SIGN_IN.INVALID_CREDENTIALS,
                401,
            );
        }

        const isPasswordValid = PasswordHashUtility.verifyPassword(
            password,
            user.salt,
            user.saltedPassword,
        );

        if (!isPasswordValid) {
            await prisma.loginAttempt.create({
                data: {
                    email,
                    ipAddress: clientIP,
                    userAgent,
                    success: false,
                },
            });

            return ApiResponseHelper.error(
                request,
                MESSAGE_KEYS.API.AUTH.SIGN_IN.INVALID_CREDENTIALS,
                401,
            );
        }

        const session = await SessionUtility.createSession(user.id, request, rememberMe);

        await prisma.loginAttempt.create({
            data: {
                email,
                ipAddress: clientIP,
                userAgent,
                success: true,
            },
        });

        const userData: UserData = {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
            isActive: user.isActive,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };

        const cookieOptions: Partial<ResponseCookie> = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict" as const,
            maxAge: rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60, // 30일 또는 24시간
            path: "/",
        };

        return await ApiResponseHelper.successWithCookie(
            request,
            MESSAGE_KEYS.API.AUTH.SIGN_IN.SUCCESS,
            {
                name: "session_token",
                action: "set",
                value: session.token,
                options: cookieOptions,
            },
            {
                user: userData,
                session: {
                    token: session.token,
                    expiresAt: session.expiresAt,
                },
            },
        );
    } catch (error) {
        return ApiResponseHelper.error(request, MESSAGE_KEYS.API.SERVER_ERROR, 500);
    } finally {
        await prisma.$disconnect();
    }
}
