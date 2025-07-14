import { NextResponse } from "next/server";
import InitUserAction from "../../../../actions/user/init/initUserAction";

export async function GET() {
    const { user, token, expiresAt } = await InitUserAction();

    if (!user) {
        return NextResponse.json({ success: false });
    }

    const response = NextResponse.json({ success: true, user });

    if (token && expiresAt) {
        response.cookies.set({
            name: "session_token",
            value: token,
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            expires: expiresAt,
        });
    }

    return response;
}
