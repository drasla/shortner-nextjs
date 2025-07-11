"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { Button, Input } from "@drasla/nextjs-theme-kit";
import { useForm } from "react-hook-form";
import { SignInInput, SignInSchema } from "../../../actions/sign/in/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createZodSchema } from "../../../utilities/zod/helper";

function SignInForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formError, setFormError] = useState<string | null>(null);

    const t = useTranslations();
    const signInSchema = createZodSchema(t, SignInSchema);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm<SignInInput>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onSubmit",
        reValidateMode: "onChange",
    });

    const onSubmit = async (data: SignInInput) => {
        setIsLoading(true);
        setFormError(null);

        try {
            const response = await fetch("/api/user/in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                credentials: "include",
            });

            const responseData = await response.json();

            if (!response.ok) {
                setFormError(responseData.error || t("action.serverError"));
                return;
            }

            if (responseData.success) {
                router.push("/");
                router.refresh();
            } else {
                setFormError(responseData.error || t("action.serverError"));
            }
        } catch {
            setFormError(t("action.serverError"));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            className={twMerge(
                ["w-full", "max-w-lg", "p-10"],
                ["flex", "flex-col", "items-center", "gap-5"],
                ["rounded-2xl", "backdrop-blur-lg", "backdrop-brightness-125"],
            )}
            onSubmit={handleSubmit(onSubmit)}>
            <div className={twMerge("text-2xl", "font-bold", "mb-10")}>
                {t("page.sign.in.title")}
            </div>
            <Input
                {...register("email")}
                fullWidth={true}
                label={t("page.sign.in.labelEmail")}
                size={"large"}
                error={errors.email?.message}
                value={watch("email")}
                onChange={e => {
                    clearErrors("email");
                    setValue("email", e.target.value);
                }}
            />
            <Input
                {...register("password")}
                fullWidth={true}
                label={t("page.sign.in.labelPassword")}
                type={"password"}
                size={"large"}
                error={errors.password?.message}
                value={watch("password")}
                onChange={e => {
                    clearErrors("password");
                    setValue("password", e.target.value);
                }}
            />
            {formError && (
                <div className={twMerge(["mt-10"], ["text-error-main", "text-sm", "text-center"])}>
                    {formError}
                </div>
            )}
            <Button
                type={"submit"}
                size={"large"}
                className={twMerge("w-full", "mt-10")}
                loading={isLoading || isSubmitting}
                disabled={isLoading || isSubmitting}>
                {t("page.sign.in.buttonText")}
            </Button>
        </form>
    );
}

export default SignInForm;
