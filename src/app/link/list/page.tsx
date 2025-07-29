import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Button } from "@drasla/nextjs-theme-kit";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { getLocale, getTranslations } from "next-intl/server";
import FindManyShortUrlAction from "../../../actions/shorUrl/findMany/findManyShortUrlAction";
import LinkListClientContainer from "./clientContainer";

async function LinksPage() {
    const locale = await getLocale();
    const t = await getTranslations({ locale });

    const result = await FindManyShortUrlAction({ page: 0, size: 10 });

    return (
        <>
            <div className={twMerge(["w-full", "my-10"], ["flex", "justify-center"])}>
                <Link href={"/"}>
                    <Button size={"small"} className={twMerge(["flex", "gap-2"])}>
                        <TbArrowBigUpLineFilled />
                        {t("page.linkList.buttonCreateLink")}
                    </Button>
                </Link>
            </div>
            <LinkListClientContainer data={result.data} />
        </>
    );
}

export default LinksPage;
