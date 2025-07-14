"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { createZodSchema } from "../../../utilities/zod/helper";
import { useForm } from "react-hook-form";
import { SignUpInput, SignUpSchema } from "../../../actions/sign/up/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { Button, Input } from "@drasla/nextjs-theme-kit";
import SignUpAction from "../../../actions/sign/up/signUpAction";

function SignUpForm() {
    const router = useRouter();

    const t = useTranslations();
    const signUpSchema = createZodSchema(t, SignUpSchema);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm<SignUpInput>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            confirm: "",
        },
        mode: "onSubmit",
        reValidateMode: "onChange",
    });

    const onSubmit = async (data: SignUpInput) => {
        try {
            const result = await SignUpAction(data);

            if ("error" in result) {
                setError("root", { message: result.error });
                return;
            }

            router.push("/sign/in");
        } catch {
            setError("root", { message: t("action.serverError") });
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
                {t("page.sign.up.title")}
            </div>
            <Input
                {...register("email")}
                fullWidth={true}
                label={t("page.sign.up.labelEmail")}
                size={"large"}
                error={errors.email?.message}
                value={watch("email")}
                onChange={e => {
                    clearErrors("root");
                    clearErrors("email");
                    setValue("email", e.target.value);
                }}
            />
            <Input
                {...register("password")}
                fullWidth={true}
                label={t("page.sign.up.labelPassword")}
                type={"password"}
                size={"large"}
                error={errors.password?.message}
                value={watch("password")}
                onChange={e => {
                    clearErrors("root");
                    clearErrors("password");
                    setValue("password", e.target.value);
                }}
            />
            <Input
                className={twMerge(["mb-10"])}
                {...register("confirm")}
                fullWidth={true}
                label={t("page.sign.up.labelConfirmPassword")}
                type={"password"}
                size={"large"}
                error={errors.confirm?.message}
                value={watch("confirm")}
                onChange={e => {
                    clearErrors("root");
                    clearErrors("confirm");
                    setValue("confirm", e.target.value);
                }}
            />
            {errors.root && (
                <div className={twMerge(["mt-10"], ["text-error-main", "text-sm", "text-center"])}>
                    {errors.root.message}
                </div>
            )}
            <Button
                type={"submit"}
                size={"large"}
                className={twMerge("w-full")}
                loading={isSubmitting}
                disabled={isSubmitting}>
                {t("page.sign.up.buttonText")}
            </Button>
        </form>
    );
}

export default SignUpForm;
