import { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { ActionResult } from "../zod/_types";

export function applyActionErrors<T extends FieldValues>(
    result: ActionResult<T>,
    setError: UseFormSetError<T>,
) {
    const { fieldErrors, formError } = result;

    if (formError) {
        setError("root", { message: formError });
    }

    if (fieldErrors) {
        (Object.keys(fieldErrors) as (keyof T)[]).forEach(key => {
            const messages = fieldErrors[key];
            if (messages && messages.length > 0) {
                setError(key as Path<T>, { message: messages[0] });
            }
        });
    }
}