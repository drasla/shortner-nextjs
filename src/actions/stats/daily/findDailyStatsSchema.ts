import { DailyStat } from "src/libraries/prisma";
import { z } from "zod";
import { MessageKey, MessageValues } from "../../../utilities/zod/_types";

export const FindDailyStatsSchema = (t: (key: MessageKey, values?: MessageValues) => string) => {
    return z.object({
        shortUrlId: z.string(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
    });
};

export type FindDailyStatsInput = z.infer<ReturnType<typeof FindDailyStatsSchema>>;

export type FindDailyStatsOutput = {
    dailyStats: DailyStat[];
};
