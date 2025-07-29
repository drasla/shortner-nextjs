"use server";

import { getLocale, getTranslations } from "next-intl/server";
import { prisma } from "src/libraries/prisma/prisma";
import { FieldErrors } from "react-hook-form";
import { ActionResult } from "src/utilities/zod/_types";
import { createZodSchema } from "../../../utilities/zod/helper";
import { FindOsStatsInput, FindOsStatsOutput, FindOsStatsSchema } from "./findOsStatsSchema";

async function FindOsStatsAction(
    input: FindOsStatsInput,
): Promise<ActionResult<FieldErrors<FindOsStatsInput>, FindOsStatsOutput>> {
    const locale = await getLocale();
    const t = await getTranslations({ locale });
    const schema = createZodSchema(t, FindOsStatsSchema);
    const parseSchema = schema.safeParse(input);

    if (!parseSchema.success) {
        return {
            success: false,
            fieldErrors: parseSchema.error.flatten().fieldErrors,
            formError: t("action.invalidInput"),
        };
    }

    const { shortUrlId } = parseSchema.data;

    const osStats = await prisma.deviceOsStat.findMany({
        where: {
            shortUrlId,
        },
        orderBy: { count: "desc" },
    });

    return {
        success: true,
        data: {
            osStats,
        },
    };
}

export default FindOsStatsAction;
