"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
    const router = useRouter();
    const currentLocale = useLocale();

    const changeLanguage = (lang: string) => {
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`; // 1년
        router.refresh();
    };

    return (
        <div style={{ marginTop: "2rem" }}>
            <button onClick={() => changeLanguage("ko")} disabled={currentLocale === "ko"}>
                한국어
            </button>
            <button
                onClick={() => changeLanguage("en")}
                disabled={currentLocale === "en"}
                style={{ marginLeft: "1rem" }}>
                English
            </button>
        </div>
    );
}
