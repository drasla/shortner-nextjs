import { BrowserStat } from "src/libraries/prisma";
import { z } from "zod";
import { MessageKey, MessageValues } from "../../../utilities/zod/_types";

export const FindBrowserStatsSchema = (t: (key: MessageKey, values?: MessageValues) => string) => {
    return z.object({
        shortUrlId: z.string(),
    });
};

export type FindBrowserStatsInput = z.infer<ReturnType<typeof FindBrowserStatsSchema>>;

export type FindBrowserStatsOutput = {
    browserStats: BrowserStat[];
};
