import { DailyStat } from "src/libraries/prisma";
import { z } from "zod";
import { defineSchema } from "../../../utilities/zod/helper";

export const FindDailyStatsInputSchema = defineSchema(t =>
    z.object({
        shortUrlId: z.string({ message: t("validation.required") }),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
    }),
);

export type FindDailyStatsInput = z.infer<ReturnType<typeof FindDailyStatsInputSchema>>;

export const FindDailyStatsOutputSchema = defineSchema(_ =>
    z.object({ dailyStats: z.array(z.custom<DailyStat>()) }),
);

export type FindDailyStatsOutput = z.infer<ReturnType<typeof FindDailyStatsOutputSchema>>;
