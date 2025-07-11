"use server";

import { cookies } from "next/headers";
import { prisma } from "src/libraries/prisma/prisma";

async function InitUserAction() {
    const cookieId = (await cookies()).get("cookieId")?.value;
    if (!cookieId) {
        return false;
    }

    try {
        const user = await prisma.user.findUnique({
            where: { hashedId: cookieId}
        });
        return !!user;
    } catch {
        return false;
    }
}

export default InitUserAction;