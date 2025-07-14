"use server";

import { prisma } from "src/libraries/prisma/prisma";
import { SignInInput } from "../in/signInSchema";
import { getLocale, getTranslations } from "next-intl/server";
import HashUtility from "../../../utilities/hash/hashUtility";
import { cookies } from "next/headers";

async function SignUpAction(formData: SignInInput) {
    const locale = await getLocale();
    const t = await getTranslations({ locale });

    const { email, password } = formData;
    const sessionToken = (await cookies()).get("session_token")?.value;
    if (!sessionToken) {
        return { error: t("action.serverError") };
    }

    const session = await prisma.session.findUnique({
        where: { token: sessionToken },
        include: { user: true },
    });

    if (!session || !session.user || !session.user.isActive || session.expiresAt < new Date()) {
        return { error: t("action.auth.invalidSession") };
    }

    const currentUser = session.user;

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        return { error: t("action.auth.signUp.emailExists") };
    }

    const salt = HashUtility.createSalt();
    const hashedPassword = HashUtility.hashValue(password, salt);
    const hashedId = HashUtility.hashValue(currentUser.id, salt);

    await prisma.user.update({
        where: { id: currentUser.id },
        data: {
            email,
            salt,
            hashedPassword,
            hashedId,
            isAnonymous: false,
        },
    });

    return { success: true };
}

export default SignUpAction;