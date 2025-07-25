import { z } from "zod";
import { MessageKey, MessageValues } from "../../../utilities/zod/_types";
import { ShortUrl } from "src/libraries/prisma";

export const FindManyShortUrlSchema = (t: (key: MessageKey, values?: MessageValues) => string) => {
    return z.object({
        page: z.number(),
        size: z.number(),
    });
};

export type FindManyShortUrlInput = z.infer<ReturnType<typeof FindManyShortUrlSchema>>;

export type FindManyShortUrlOutput = {
    page: number;
    size: number;
    total: number;
    list: ShortUrl[];
}