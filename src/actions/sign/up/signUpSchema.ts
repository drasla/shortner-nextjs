import { z } from "zod";
import { MessageKey, MessageValues } from "../../../utilities/zod/_types";

export const SignUpSchema = (t: (key: MessageKey, values?: MessageValues) => string) => {
    return z
        .object({
            email: z.string().min(1, t("validation.required")).email(t("validation.email")),
            password: z
                .string()
                .min(1, t("validation.required"))
                .min(6, t("validation.passwordLength", { min: 6 })),
            confirm: z
                .string()
                .min(1, t("validation.required"))
                .min(6, t("validation.passwordLength", { min: 6 })),
        })
        .refine(data => data.password === data.confirm, {
            path: ["confirm"],
            message: t("validation.passwordMatch"),
        });
};

export type SignUpInput = z.infer<ReturnType<typeof SignUpSchema>>;
