import { NextRequest, NextResponse } from "next/server";

export async function middleware(_: NextRequest) {
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api/user/init|favicon.ico).*)"],
};
