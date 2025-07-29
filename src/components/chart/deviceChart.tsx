"use client";

import { SelectedPanelType } from "../../app/link/list/clientContainer";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ChartUtility } from "../../utilities/chart/chartUtility";
import { twMerge } from "tailwind-merge";
import { TbDevices } from "react-icons/tb";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartTooltip from "./chartTooltip";
import { Spinner } from "@drasla/nextjs-theme-kit";
import { DeviceOsStat } from "src/libraries/prisma";

type Props = {
    selectedPanel: SelectedPanelType | undefined;
};

function DeviceChart({ selectedPanel }: Props) {
    const t = useTranslations();
    const [data, setData] = useState<(DeviceOsStat & { fill: string })[]>([]);
    const [loading, setLoading] = useState(true);

    const chartContainerHeight = data.length * 80;

    useEffect(() => {
        if (!selectedPanel?.shortUrlId) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/stats/device", {
                    body: JSON.stringify({
                        shortUrlId: selectedPanel.shortUrlId,
                    }),
                    method: "POST",
                });
                const json = await res.json();

                setData(ChartUtility.applyGradientColors(json.osStats));
            } catch {
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedPanel?.shortUrlId]);

    return (
        <section
            className={twMerge(["w-full", "box-border", "my-5"], ["border-b-2", "theme-border"])}>
            <h2 className={twMerge(["flex", "items-center", "gap-2"], ["mb-3", "font-medium"])}>
                <TbDevices />
                {t("page.stats.deviceOrOs")}
            </h2>
            {loading ? (
                <div
                    className={twMerge(
                        ["w-full", "h-[250px]"],
                        ["flex", "flex-col", "justify-center", "items-center"],
                    )}>
                    <Spinner size={"large"} />
                    <span className={twMerge("text-sm", "font-bold")}>Loading</span>
                </div>
            ) : (
                <ResponsiveContainer width={"100%"} height={chartContainerHeight}>
                    <BarChart data={data} layout={"vertical"}>
                        <XAxis
                            tick={{ fontSize: 12, fill: "#ccc", fontWeight: 500 }}
                            type={"number"}
                        />
                        <YAxis
                            tick={{ fontSize: 12, fill: "#ccc", fontWeight: 500 }}
                            dataKey={"os"}
                            type={"category"}
                        />
                        <Tooltip content={props => <ChartTooltip {...props} />} />
                        <Bar dataKey={"count"}>
                            {data.map((entry, index) => (
                                <Cell key={index} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            )}
        </section>
    );
}

export default DeviceChart;
