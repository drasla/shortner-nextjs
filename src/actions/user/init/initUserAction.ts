"use server";

import { cookies } from "next/headers";
import { prisma } from "src/libraries/prisma/prisma";

async function InitUserAction() {
    try {
        const cookieStore = await cookies();
        const sessionToken = cookieStore.get("session_token")?.value;

        if (!sessionToken) {
            return false;
        }

        const session = await prisma.session.findUnique({
            where: { token: sessionToken },
            include: { user: true }
        });

        return !!(session && session.user.isActive && session.expiresAt > new Date());
    } catch {
        return false;
    }
}

export default InitUserAction;
