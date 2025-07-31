import { z } from "zod";
import { MessageKey, MessageValues, ZodSchemaCreator } from "./_types";

export function createZodSchema<T extends z.ZodType>(
    t: any,
    schemaCreator: ZodSchemaCreator<T>,
): T {
    return schemaCreator(t);
}

export const defineSchema = <T extends z.ZodTypeAny>(
    schemaBuilder: (t: (key: MessageKey, values?: MessageValues) => string) => T,
): ((t: (key: MessageKey, values?: MessageValues) => string) => T) => schemaBuilder;
