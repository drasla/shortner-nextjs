import { z } from "zod";
import { ZodSchemaCreator } from "./_types";

export function createZodSchema<T extends z.ZodType>(
    t: any,
    schemaCreator: ZodSchemaCreator<T>,
): T {
    return schemaCreator(t);
}