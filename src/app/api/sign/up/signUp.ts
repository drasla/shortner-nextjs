import { NextRequest } from "next/server";
import PasswordHashUtility from "../../../../utilities/hash/hashUtility";
import { HeaderUtility } from "../../../../utilities/header/headerUtility";
import { prisma } from "../../../../libraries/prisma/prisma";
import { ApiResponseHelper } from "../../../../utilities/apiResponseHelper/apiResponseHelper";
import { MESSAGE_KEYS } from "../../../../utilities/apiResponseHelper/_const";
import { createSignUpSchemaWithLocale } from "./signUpSchema";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const locale = await ApiResponseHelper.getLocaleFromRequest(request);
        const signUpSchema = await createSignUpSchemaWithLocale(locale);

        const validation = signUpSchema.safeParse(body);
        if (!validation.success) {
            return ApiResponseHelper.error(
                request,
                MESSAGE_KEYS.API.INVALID_INPUT,
                400,
                validation.error.flatten().fieldErrors,
            );
        }

        const { email, password } = validation.data;

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return ApiResponseHelper.error(
                request,
                MESSAGE_KEYS.API.AUTH.SIGN_UP.EMAIL_EXISTS,
                409,
            );
        }

        const salt = PasswordHashUtility.createSalt();
        const saltedPassword = PasswordHashUtility.hashPassword(password, salt);

        const user = await prisma.user.create({
            data: {
                email,
                salt,
                saltedPassword,
            },
            select: {
                id: true,
                email: true,
                isAdmin: true,
                isActive: true,
                createdAt: true,
            },
        });

        const clientIP = HeaderUtility.getClientIP(request);
        const userAgent = HeaderUtility.getUserAgent(request);

        await prisma.loginAttempt.create({
            data: {
                email,
                ipAddress: clientIP,
                userAgent,
                success: true,
            },
        });

        return ApiResponseHelper.success(
            request,
            MESSAGE_KEYS.API.AUTH.SIGN_UP.SUCCESS,
            { user },
            201,
        );
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes("Unique constraint")) {
                return ApiResponseHelper.error(
                    request,
                    MESSAGE_KEYS.API.AUTH.SIGN_UP.EMAIL_EXISTS,
                    409,
                );
            }
        }

        return ApiResponseHelper.error(request, MESSAGE_KEYS.API.SERVER_ERROR, 500);
    } finally {
        await prisma.$disconnect();
    }
}
