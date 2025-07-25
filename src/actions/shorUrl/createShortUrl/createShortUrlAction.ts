"use server";

import { CreateShortUrlInput, CreateShortUrlSchema } from "./createShortUrlSchema";
import { getLocale, getTranslations } from "next-intl/server";
import { createZodSchema } from "../../../utilities/zod/helper";
import GetUserAction from "../../user/get/getUserAction";
import { nanoid } from "nanoid";
import { prisma } from "src/libraries/prisma/prisma";
import { ActionResult } from "../../../utilities/zod/_types";
import { FieldErrors } from "react-hook-form";

async function CreateShortUrlAction(
    formData: CreateShortUrlInput,
): Promise<ActionResult<FieldErrors<CreateShortUrlInput>>> {
    const locale = await getLocale();
    const t = await getTranslations({ locale });

    const schema = createZodSchema(t, CreateShortUrlSchema);
    const parseSchema = schema.safeParse(formData);

    if (!parseSchema.success) {
        return {
            success: false,
            fieldErrors: parseSchema.error.flatten().fieldErrors,
            formError: t("action.invalidInput"),
        };
    }

    const user = await GetUserAction();

    if (!user) {
        return {
            success: false,
            formError: t("action.auth.unauthorized"),
        };
    }

    try {
        const shortCode = nanoid(8);

        await prisma.shortUrl.create({
            data: {
                originalUrl: formData.originalUrl,
                shortCode: shortCode,
                userId: user.id,
            },
        });

        return { success: true };
    } catch {
        return {
            success: false,
            formError: t("action.serverError"),
        };
    }
}

export default CreateShortUrlAction;
