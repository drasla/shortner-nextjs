import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "src/libraries/prisma/prisma";

export async function POST() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session_token")?.value;

    if (!sessionToken) {
        return NextResponse.json({ success: true }, { status: 200 });
    }

    try {
        await prisma.session.deleteMany({
            where: {
                token: sessionToken,
            },
        });

        const response = NextResponse.json({ sucscess: true }, { status: 200 });
        response.cookies.set({
            name: "session_token",
            value: "",
            expires: new Date(0),
            path: "/",
        });

        return response;
    } catch {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}
