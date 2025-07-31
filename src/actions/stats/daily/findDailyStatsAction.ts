"use server";

import { getLocale, getTranslations } from "next-intl/server";
import { prisma } from "src/libraries/prisma/prisma";
import { FieldErrors } from "react-hook-form";
import {
    FindDailyStatsInput,
    FindDailyStatsOutput,
    FindDailyStatsInputSchema,
} from "./findDailyStatsSchema";
import { ActionResult } from "src/utilities/zod/_types";
import { createZodSchema } from "../../../utilities/zod/helper";

async function FindDailyStatsAction(
    input: FindDailyStatsInput,
): Promise<ActionResult<FieldErrors<FindDailyStatsInput>, FindDailyStatsOutput>> {
    const locale = await getLocale();
    const t = await getTranslations({ locale });
    const schema = createZodSchema(t, FindDailyStatsInputSchema);
    const parseSchema = schema.safeParse(input);

    if (!parseSchema.success) {
        return {
            success: false,
            fieldErrors: parseSchema.error.flatten().fieldErrors,
            formError: t("action.invalidInput"),
        };
    }

    const { shortUrlId, startDate, endDate } = parseSchema.data;

    const dailyStats = await prisma.dailyStat.findMany({
        where: {
            shortUrlId,
            ...(startDate &&
                endDate && {
                    date: {
                        gte: new Date(startDate),
                        lte: new Date(endDate),
                    },
                }),
        },
        orderBy: { date: "asc" },
    });

    return {
        success: true,
        data: {
            dailyStats,
        },
    };
}

export default FindDailyStatsAction;
