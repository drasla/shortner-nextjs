import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "../../../../libraries/auth/middleware";
import { ApiResponseHelper } from "../../../../utilities/apiResponseHelper/apiResponseHelper";
import { MESSAGE_KEYS } from "../../../../utilities/apiResponseHelper/_const";

export async function GET(request: NextRequest) {
    try {
        const session = await requireAuth(request);

        if (session instanceof NextResponse) {
            return session;
        }

        return await ApiResponseHelper.success(request, MESSAGE_KEYS.API.USER.GET_USER.SUCCESS, {
            user: {
                id: session.user.id,
                email: session.user.email,
                isAdmin: session.user.isAdmin,
                isActive: session.user.isActive,
                createdAt: session.user.createdAt,
                updatedAt: session.user.updatedAt,
            },
            session: {
                expiresAt: session.expiresAt,
            },
        });
    } catch (error) {
        return await ApiResponseHelper.error(request, MESSAGE_KEYS.API.SERVER_ERROR, 500);
    }
}
