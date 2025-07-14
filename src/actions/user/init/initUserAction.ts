"use server";

import { cookies } from "next/headers";
import { prisma } from "src/libraries/prisma/prisma";
import { UserData } from "../../../types/userData";
import HashUtility from "../../../utilities/hash/hashUtility";
import { v4 as uuidV4 } from "uuid";
import { HeaderUtility } from "../../../utilities/header/headerUtility";

async function InitUserAction(): Promise<{
    user: UserData | null;
    token: string | null;
    expiresAt?: Date;
}> {
    try {
        const cookieStore = await cookies();
        const sessionToken = cookieStore.get("session_token")?.value;

        if (sessionToken) {
            const session = await prisma.session.findUnique({
                where: { token: sessionToken },
                include: { user: true },
            });

            if (session && session.user.isActive && session.expiresAt > new Date()) {
                const { id, email, isAnonymous, isAdmin, hashedId }: UserData = session.user;
                return { user: { id, email, isAnonymous, isAdmin, hashedId }, token: null };
            }
        }

        const salt = HashUtility.createSalt();
        const tempHashedId = HashUtility.hashValue("temp", salt);

        const newUser = await prisma.user.create({
            data: {
                salt,
                hashedId: tempHashedId,
                isAnonymous: true,
                isActive: true,
            },
        });

        const hashedId = HashUtility.hashValue(newUser.id, salt);
        await prisma.user.update({
            where: { id: newUser.id },
            data: { hashedId },
        });

        const token = uuidV4();
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 30);

        await prisma.session.create({
            data: {
                token,
                userId: newUser.id,
                expiresAt,
                userAgent: await HeaderUtility.getUserAgentFromHeaders(),
                ipAddress: await HeaderUtility.getClientIPFromHeaders(),
            },
        });

        return {
            user: {
                id: newUser.id,
                email: null,
                isAnonymous: true,
                isAdmin: false,
                hashedId,
            },
            token,
            expiresAt,
        };
    } catch {
        return { user: null, token: null };
    }
}

export default InitUserAction;
