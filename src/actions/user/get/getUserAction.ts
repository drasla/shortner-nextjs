"use server";

import { prisma } from "src/libraries/prisma/prisma";
import { UserData } from "../../../types/userData";
import { cookies } from "next/headers";

async function GetUserAction(): Promise<UserData | null> {
    try {
        const cookieStore = await cookies();
        const sessionToken = cookieStore.get("session_token")?.value;

        if (!sessionToken) {
            return null;
        }

        const session = await prisma.session.findUnique({
            where: { token: sessionToken },
            include: { user: true },
        });

        if (!session || !session.user.isActive || session.expiresAt > new Date()) {
            return null;
        }

        const { id, email, isAnonymous, isAdmin, hashedId }: UserData = session.user;

        return {
            id,
            email,
            isAnonymous,
            isAdmin,
            hashedId,
        };
    } catch {
        return null;
    }
}

export default GetUserAction;
