import { twMerge } from "tailwind-merge";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

async function Footer() {
    const locale = await getLocale();
    const t = await getTranslations({ locale });

    return (
        <footer
            className={twMerge(
                ["w-full", "max-w-7xl", "h-10", "mx-auto", "px-5"],
                ["flex", "justify-between", "items-center"],
            )}>
            <div className={twMerge([])}>{process.env.SITE_NAME}</div>
            <div className={twMerge(["flex", "gap-3"], ["text-sm"])}>
                <Link href={"/policy/pp"}>{t("layout.footer.privacyPolicy")}</Link>
                <Link href={"/policy/tos"}>{t("layout.footer.TermsOfService")}</Link>
            </div>
        </footer>
    );
}

export default Footer;
