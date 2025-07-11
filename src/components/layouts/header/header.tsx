import { twMerge } from "tailwind-merge";
import { Button } from "@drasla/nextjs-theme-kit";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

async function HeaderComponent() {
    const locale = await getLocale();
    const t = await getTranslations({ locale });

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
                        <Link href={"/sign/up"}>
                            <Button
                                className={twMerge(
                                    ["bg-white", "text-black"],
                                    ["rounded-full", "cursor-pointer"],
                                )}>
                                {t("layout.header.signUpButtonText")}
                            </Button>
                        </Link>
                        <Link href={"/sign/in"}>
                            <Button className={twMerge(["rounded-full", "cursor-pointer"])}>
                                {t("layout.header.signInButtonText")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
