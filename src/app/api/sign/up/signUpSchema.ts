import { z } from "zod";
import { ZodMessageParser } from "../../../../utilities/zodMessageParser/zodMessageParser";
import { MESSAGE_KEYS } from "../../../../utilities/apiResponseHelper/_const";

const createSignUpSchema = (messageParser: ZodMessageParser) => {
    return z
        .object({
            email: z.string().email(messageParser.getMessage(MESSAGE_KEYS.API.VALIDATION.EMAIL)),
            password: z
                .string()
                .min(
                    8,
                    messageParser.getMessage(MESSAGE_KEYS.API.VALIDATION.PASSWORD_LENGTH, {
                        min: 8,
                    }),
                ),
            passwordConfirm: z.string(),
        })
        .refine(data => data.password === data.passwordConfirm, {
            message: messageParser.getMessage(MESSAGE_KEYS.API.VALIDATION.PASSWORD_CONFIRM),
            path: ["passwordConfirm"],
        });
};

export const createSignUpSchemaWithLocale = async (locale: string) => {
    const messageParser = await ZodMessageParser.create(locale);
    return createSignUpSchema(messageParser);
};