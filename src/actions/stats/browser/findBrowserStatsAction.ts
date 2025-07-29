"use server";

import { getLocale, getTranslations } from "next-intl/server";
import { prisma } from "src/libraries/prisma/prisma";
import { FieldErrors } from "react-hook-form";
import {
    FindBrowserStatsSchema,
    FindBrowserStatsInput,
    FindBrowserStatsOutput,
} from "./findBrowserStatsSchema";
import { ActionResult } from "src/utilities/zod/_types";
import { createZodSchema } from "../../../utilities/zod/helper";

async function FindBrowserStatsAction(
    input: FindBrowserStatsInput,
): Promise<ActionResult<FieldErrors<FindBrowserStatsInput>, FindBrowserStatsOutput>> {
    const locale = await getLocale();
    const t = await getTranslations({ locale });
    const schema = createZodSchema(t, FindBrowserStatsSchema);
    const parseSchema = schema.safeParse(input);

    if (!parseSchema.success) {
        return {
            success: false,
            fieldErrors: parseSchema.error.flatten().fieldErrors,
            formError: t("action.invalidInput"),
        };
    }

    const { shortUrlId } = parseSchema.data;

    const browserStats = await prisma.browserStat.findMany({
        where: {
            shortUrlId,
        },
        orderBy: { count: "desc" },
    });

    return {
        success: true,
        data: {
            browserStats,
        },
    };
}

export default FindBrowserStatsAction;
