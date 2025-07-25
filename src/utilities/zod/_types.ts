import { z } from "zod";
import messages from "../../../i18n/intl/messages/en.json";

// next-intl 타입 정의 활용하기
type MessagesType = typeof messages;
type NestedKeyOf<ObjectType> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`;
}[keyof ObjectType & (string | number)];

export type MessageKey = NestedKeyOf<MessagesType>;
export type MessageValues = Record<string, string | number> | undefined;

export type ZodSchemaCreator<T extends z.ZodType> = (
    t: (key: MessageKey, values?: MessageValues) => string,
) => T;

export type ActionResult<T, R = undefined> = {
    fieldErrors?: Partial<Record<keyof T, string[]>>;
    formError?: string;
    success?: boolean;
    data?: R;
};
