"use client";

import { twMerge } from "tailwind-merge";
import { Button, Input } from "@drasla/nextjs-theme-kit";
import { useTranslations } from "next-intl";
import { createZodSchema } from "../utilities/zod/helper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    CreateShortUrlInput,
    CreateShortUrlSchema,
} from "../actions/shorUrl/createShortUrl/createShortUrlSchema";
import CreateShortUrlAction from "../actions/shorUrl/createShortUrl/createShortUrlAction";
import { useRouter } from "next/navigation";
import { applyActionErrors } from "../utilities/form/helper";

function RootForm() {
    const router = useRouter();
    const t = useTranslations();
    const createShortUrlSchema = createZodSchema(t, CreateShortUrlSchema);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm<CreateShortUrlInput>({
        resolver: zodResolver(createShortUrlSchema),
        defaultValues: {
            originalUrl: "",
        },
        mode: "onSubmit",
        reValidateMode: "onChange",
    });

    const onSubmit = async (data: CreateShortUrlInput) => {
        try {
            const response = await CreateShortUrlAction(data);

            if (!response.success) {
                applyActionErrors<CreateShortUrlInput>(response, setError);
                return;
            }
            router.refresh();
        } catch {
            setError("root", { message: t("action.serverError") });
            return;
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={twMerge(["w-full"], ["flex", "justify-between", "items-center", "gap-3"])}>
            <Input
                {...register("originalUrl")}
                className={twMerge(["bg-light-paper", "rounded-lg"])}
                label={"Shorten URL"}
                value={watch("originalUrl")}
                placeholder={t("page.home.placeholder")}
                error={errors.originalUrl?.message}
                onChange={e => {
                    clearErrors("root");
                    clearErrors("originalUrl");
                    setValue("originalUrl", e.target.value);
                }}
            />
            <Button type={"submit"} className={twMerge(["w-1/5"])} loading={isSubmitting}>
                Shorten
            </Button>
        </form>
    );
}

export default RootForm;
