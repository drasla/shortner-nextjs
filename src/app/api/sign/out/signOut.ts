import { NextRequest, NextResponse } from "next/server";
import { SessionUtility } from "../../../../utilities/session/sessionUtility";
import { ApiResponseHelper } from "../../../../utilities/apiResponseHelper/apiResponseHelper";
import { MESSAGE_KEYS } from "../../../../utilities/apiResponseHelper/_const";

export async function POST(request: NextRequest) {
    try {
        const sessionToken = request.cookies.get("session_token")?.value;

        if (sessionToken) {
            await SessionUtility.deleteSession(sessionToken);
        }

        const locale = await ApiResponseHelper.getLocaleFromRequest(request);

        return await ApiResponseHelper.successWithCookie(
            request,
            MESSAGE_KEYS.API.AUTH.SIGN_OUT.SUCCESS,
            { name: "session_token", action: "delete" },
        );
    } catch (error) {
        return ApiResponseHelper.error(request, MESSAGE_KEYS.API.SERVER_ERROR, 500);
    }
}
