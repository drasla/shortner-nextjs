import { NextRequest, NextResponse } from "next/server";
import { SessionUtility } from "../../utilities/session/sessionUtility";
import { ApiResponseHelper } from "../../utilities/apiResponseHelper/apiResponseHelper";

export async function requireAuth(request: NextRequest) {
    const sessionToken = request.cookies.get("session_token")?.value;

    if (!sessionToken) {
        return ApiResponseHelper.error(
            request,
            "api.auth.unauthorized",
            401
        )
    }

    const session = await SessionUtility.validateSession(sessionToken);

    if (!session) {
        return ApiResponseHelper.error(
            request,
            "api.auth.unauthorized",
            401
        )
    }

    return session;
}

export async function requireAdmin(request: NextRequest) {
    const sessionResult = await requireAuth(request);

    if (sessionResult instanceof NextResponse) {
        return sessionResult;
    }

    if (!sessionResult.user.isAdmin) {
        return ApiResponseHelper.error(
            request,
            "api.auth.forbidden",
            403
        )
    }

    return sessionResult;
}



