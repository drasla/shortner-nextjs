"use client";

import { twMerge } from "tailwind-merge";
import ShortUrlLink from "./shortUrlLink";
import { TbChartHistogram, TbSettings } from "react-icons/tb";
import { FindManyShortUrlOutput } from "../../../actions/shorUrl/findMany/findManyShortUrlSchema";
import { Dispatch, SetStateAction } from "react";
import { SelectedPanelType } from "./clientContainer";
import dayjs from "dayjs";

type Props = {
    data: FindManyShortUrlOutput | undefined;
    selectedPanel: SelectedPanelType | undefined;
    setSelectedPanel: Dispatch<SetStateAction<SelectedPanelType>>;
};

function LinkListClientList({ data, selectedPanel, setSelectedPanel }: Props) {
    return (
        <div
            className={twMerge(
                selectedPanel ? ["hidden", "lg:block", "w-1/2"] : ["w-full"],
                ["p-5"],
                ["theme-paper", "rounded-lg"],
            )}>
            <div className={twMerge(["mb-5"], ["font-bold"])}>Total {data?.total || 0} Links</div>
            <table className={twMerge(["w-full"])}>
                <thead>
                    <tr className={twMerge(["text-sm"])}>
                        <th className={twMerge(["w-1/6", "py-2"])}>Date</th>
                        <th className={twMerge(["w-1/2", "py-2"])}>
                            <div className={twMerge(["w-full"], ["flex", "flex-col"])}>
                                <div>Short Link</div>
                                <div className={twMerge(["text-xs"])}>Original Link</div>
                            </div>
                        </th>
                        <th className={twMerge(["w-1/6", "py-2"])}>
                            Total
                            <br />
                            Counts
                        </th>
                        <th className={twMerge(["w-1/6", "py-2"])}>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.list &&
                        data.list.map((link, index) => (
                            <tr key={index} className={twMerge(["border-t", "theme-border"])}>
                                <td className={twMerge(["px-1", "py-3"])}>
                                    <div
                                        className={twMerge(["w-full"], ["flex", "justify-center"])}>
                                        {dayjs(link.createdAt).format("MM.DD")}
                                    </div>
                                </td>
                                <td className={twMerge(["px-1", "py-3"])}>
                                    <div
                                        className={twMerge(
                                            ["w-full"],
                                            ["flex", "flex-col"],
                                            ["text-sm"],
                                        )}>
                                        <ShortUrlLink shortCode={link.shortCode} />
                                        <div className={twMerge(["text-xs"])}>
                                            {link.originalUrl}
                                        </div>
                                    </div>
                                </td>
                                <td className={twMerge(["px-1", "py-3"])}>
                                    <div
                                        className={twMerge(["w-full"], ["flex", "justify-center"])}>
                                        {link.clicks.toLocaleString()}
                                    </div>
                                </td>
                                <td className={twMerge(["px-1", "py-1"])}>
                                    <div
                                        className={twMerge(
                                            ["w-full"],
                                            ["flex", "justify-center", "gap-1"],
                                        )}>
                                        <div
                                            className={twMerge(
                                                ["p-2"],
                                                ["hover:bg-gray-600", "hover:rounded-full"],
                                                ["cursor-pointer"],
                                            )}
                                            onClick={() => {
                                                setSelectedPanel({
                                                    type: "stats",
                                                    shortUrlId: link.id,
                                                    shortUrl: link.shortCode,
                                                });
                                            }}>
                                            <TbChartHistogram size={18} />
                                        </div>
                                        <div
                                            className={twMerge(
                                                ["p-2"],
                                                ["hover:bg-gray-600", "hover:rounded-full"],
                                                ["cursor-pointer"],
                                            )}
                                            onClick={() => {
                                                setSelectedPanel({
                                                    type: "settings",
                                                    shortUrlId: link.id,
                                                    shortUrl: link.shortCode,
                                                });
                                            }}>
                                            <TbSettings size={18} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default LinkListClientList;
