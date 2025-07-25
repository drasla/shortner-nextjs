import { z } from "zod";
import { MessageKey, MessageValues } from "../../../utilities/zod/_types";

export const SignInSchema = (t: (key: MessageKey, values?: MessageValues) => string) => {
    return z.object({
        email: z.string().min(1, t("validation.required")).email(t("validation.email")),
        password: z
            .string()
            .min(1, t("validation.required"))
            .min(6, t("validation.passwordLength", { min: 6 })),
    });
};

export type SignInInput = z.infer<ReturnType<typeof SignInSchema>>;

