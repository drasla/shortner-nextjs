"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, Input } from "@drasla/nextjs-theme-kit";
import { useTranslations } from "next-intl";

function RootForm() {
    const [url, setUrl] = useState<string>("");
    const t = useTranslations();

    return (
        <form className={twMerge(["w-full"], ["flex", "justify-between", "items-center", "gap-3"])}>
            <Input
                className={twMerge(["bg-light-paper", "rounded-lg"])}
                name={"url"}
                value={url}
                label={"Shorten URL"}
                placeholder={t("page.home.placeholder")}
                onChange={e => setUrl(e.target.value)}
            />
            <Button className={twMerge(["w-1/5"])}>Shorten</Button>
        </form>
    );
}

export default RootForm;
