import { getLocale, getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";
import "../styles/rootPage.css";
import Image from "next/image";
import RootForm from "./form";
import { Button } from "@drasla/nextjs-theme-kit";
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import Link from "next/link";

async function RootPage() {
    const locale = await getLocale();
    const t = await getTranslations({ locale });

    return (
        <>
            <div className={twMerge(["section-one"], ["w-full"])}>
                <div className={twMerge(["w-full", "max-w-7xl", "mx-auto"], ["flex"])}>
                    <div
                        className={twMerge(
                            ["w-4/7", "pl-20", "pr-10"],
                            ["flex", "flex-col", "justify-center"],
                        )}>
                        <div className={twMerge(["mb-5"], ["text-5xl", "leading-14", "font-bold"])}>
                            {process.env.SITE_NAME},<br />
                            {t("page.home.title")}
                        </div>
                        <div className={twMerge(["mb-20"], ["text-primary-main", "font-bold"])}>
                            {t("page.home.description", { siteName: process.env.SITE_NAME || "" })}
                        </div>
                        <RootForm />
                    </div>
                    <div className={twMerge(["w-3/7"], ["flex", "justify-center"])}>
                        <Image
                            src={"/assets/images/home-container-rocket.svg"}
                            alt={"Rocket"}
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            <div className={twMerge(["w-full"], ["flex", "justify-center"])}>
                <Link href={"/link/list"}>
                    <Button size={"small"} className={twMerge(["flex", "gap-2"])}>
                        <TbArrowBigDownLineFilled />
                        {t("page.home.buttonAllLinks")}
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default RootPage;
