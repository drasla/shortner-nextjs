import { twMerge } from "tailwind-merge";
import Link from "next/link";
import LanguageSelect from "./languageSelect";
import HeaderClient from "./client";

async function HeaderComponent() {

    return (
        <header
            className={twMerge([
                "sticky",
                "top-0",
                "w-full",
                "h-header",
                "px-4",
                "bg-light-paper",
            ])}>
            <div
                className={twMerge(
                    ["w-full", "max-w-7xl", "mx-auto", "h-header"],
                    ["flex", "items-center"],
                )}>
                <div className={twMerge(["w-full"], ["flex", "justify-between", "items-center"])}>
                    <Link
                        href={"/"}
                        className={twMerge([
                            "[font-family:var(--font-logo)]",
                            "font-bold",
                            "text-2xl",
                        ])}>
                        {process.env.SITE_NAME}
                    </Link>
                    <div className={twMerge(["flex", "justify-end", "items-center", "gap-3"])}>
                        <LanguageSelect />
                        <HeaderClient />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
