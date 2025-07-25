"use server";

import {
    FindManyShortUrlInput,
    FindManyShortUrlOutput,
    FindManyShortUrlSchema,
} from "./findManyShortUrlSchema";
import { ActionResult } from "../../../utilities/zod/_types";
import { FieldErrors } from "react-hook-form";
import { getLocale, getTranslations } from "next-intl/server";
import { createZodSchema } from "../../../utilities/zod/helper";
import GetUserAction from "../../user/get/getUserAction";
import { prisma } from "src/libraries/prisma/prisma";

async function FindManyShortUrlAction(
    formData: FindManyShortUrlInput,
): Promise<ActionResult<FieldErrors<FindManyShortUrlInput>, FindManyShortUrlOutput>> {
    const locale = await getLocale();
    const t = await getTranslations({ locale });

    const schema = createZodSchema(t, FindManyShortUrlSchema);
    const parseSchema = schema.safeParse(formData);

    if (!parseSchema.success) {
        return {
            success: false,
            fieldErrors: parseSchema.error.flatten().fieldErrors,
            formError: t("action.invalidInput"),
        };
    }

    const { page, size } = parseSchema.data;

    const user = await GetUserAction();
    if (!user) {
        return {
            success: false,
            formError: t("action.auth.unauthorized"),
        };
    }

    try {
        const [list, total] = await Promise.all([
            prisma.shortUrl.findMany({
                where: { userId: user.id.toString() },
                orderBy: { createdAt: "desc" },
                skip: page * size,
                take: size,
            }),
            prisma.shortUrl.count({
                where: { userId: user.id.toString() },
            }),
        ]);

        return {
            success: true,
            data: {
                page: page,
                size: size,
                total: total,
                list: list,
            },
        };
    } catch {
        return {
            success: false,
            formError: t("action.serverError"),
        };
    }
}

export default FindManyShortUrlAction;
