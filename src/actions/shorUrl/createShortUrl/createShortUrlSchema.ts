import { z } from "zod";
import { MessageKey, MessageValues } from "../../../utilities/zod/_types";

export const CreateShortUrlSchema = (t: (key: MessageKey, values?: MessageValues) => string) => {
    return z.object({
        originalUrl: z.string().min(1, t("validation.required")).url(t("validation.url")),
    });
};

export type CreateShortUrlInput = z.infer<ReturnType<typeof CreateShortUrlSchema>>;
