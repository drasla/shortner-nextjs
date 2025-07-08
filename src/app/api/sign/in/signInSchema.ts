import { z } from "zod";
import { MESSAGE_KEYS } from "../../../../utilities/apiResponseHelper/_const";
import { ZodMessageParser } from "../../../../utilities/zodMessageParser/zodMessageParser";

const createSignInSchema = (messageParser: ZodMessageParser) => {
    return z.object({
        email: z.string().email(messageParser.getMessage(MESSAGE_KEYS.API.VALIDATION.EMAIL)),
        password: z
            .string()
            .min(
                1,
                messageParser.getMessage(MESSAGE_KEYS.API.VALIDATION.PASSWORD_LENGTH, { min: 1 }),
            ),
        rememberMe: z.boolean().optional().default(false),
    });
};

export const createSignInSchemaWithLocale = async (locale: string) => {
    const messageParser = await ZodMessageParser.create(locale);
    return createSignInSchema(messageParser);
}