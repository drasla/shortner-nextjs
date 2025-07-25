import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Button } from "@drasla/nextjs-theme-kit";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { getLocale, getTranslations } from "next-intl/server";
import FindManyShortUrlAction from "../../../actions/shorUrl/findMany/findManyShortUrlAction";

async function LinksPage() {
    const locale = await getLocale();
    const t = await getTranslations({ locale });

    const result = await FindManyShortUrlAction({ page: 0, size: 10 });

    return (
        <>
            <div className={twMerge(["w-full", "my-10"], ["flex", "justify-center"])}>
                <Link href={"/public"}>
                    <Button size={"small"} className={twMerge(["flex", "gap-2"])}>
                        <TbArrowBigUpLineFilled />
                        {t("page.linkList.buttonCreateLink")}
                    </Button>
                </Link>
            </div>
            <div className={twMerge(["w-full", "py-10"], ["theme-paper", "rounded-lg"])}>
                <div className={twMerge(["mb-10"])}>{result.data?.total || 0} Links</div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Original Link</th>
                            <th>Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default LinksPage;
