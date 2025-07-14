"use client";

import { Option, Select } from "@drasla/nextjs-theme-kit";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function LanguageSelect() {
    const router = useRouter();
    const currentLocale = useLocale();
    const t = useTranslations();
    const [locale, setLocale] = useState<string>(
        currentLocale === "ko" ? t("layout.language.ko") : t("layout.language.en"),
    );

    const changeLanguage = (lang: string) => {
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`; // 1년
        router.refresh();
    };

    useEffect(() => {
        setLocale(currentLocale === "ko" ? t("layout.language.ko") : t("layout.language.en"));
    }, [currentLocale]);

    return (
        <Select displayValue={locale} onChange={changeLanguage}>
            <Option value={"en"}>{nationList.en}</Option>
            <Option value={"ko"}>{nationList.ko}</Option>
        </Select>
    );
}

export default LanguageSelect;

const nationList = {
    en: (
        <div className={twMerge(["w-full", "flex", "gap-3"])}>
            <Image src={"/assets/images/flags/us.svg"} width={28} height={21} alt={"US Flags"} />
            English
        </div>
    ),
    ko: (
        <div className={twMerge(["w-full", "flex", "gap-3"])}>
            <Image src={"/assets/images/flags/ko.svg"} width={28} height={21} alt={"US Flags"} />
            Korean
        </div>
    ),
};
