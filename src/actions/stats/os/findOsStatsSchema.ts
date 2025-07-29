import { DeviceOsStat } from "src/libraries/prisma";
import { z } from "zod";
import { MessageKey, MessageValues } from "../../../utilities/zod/_types";

export const FindOsStatsSchema = (t: (key: MessageKey, values?: MessageValues) => string) => {
    return z.object({
        shortUrlId: z.string(),
    });
};

export type FindOsStatsInput = z.infer<ReturnType<typeof FindOsStatsSchema>>;

export type FindOsStatsOutput = {
    osStats: DeviceOsStat[];
};
