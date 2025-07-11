import { z } from "zod";
import { ZodSchemaCreator } from "./_types";
import { Locale } from "../../types/next-intl";
import { getTranslations } from "next-intl/server";
import { ZodMessageParser } from "./zodMessageParser";

export function createZodSchema<T extends z.ZodType>(
    t: any,
    schemaCreator: ZodSchemaCreator<T>,
): T {
    return schemaCreator(t);
}

export async function getServerTranslations(locale: Locale) {
    return await getTranslations({ locale });
}

export async function getServerZodMessageParser(locale: Locale) {
    const t = await getServerTranslations(locale);
    return new ZodMessageParser(t);
}
