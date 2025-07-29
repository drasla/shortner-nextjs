"use client";

import dayjs from "dayjs";
import { SelectedPanelType } from "../../app/link/list/clientContainer";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { ChartUtility } from "../../utilities/chart/chartUtility";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { twMerge } from "tailwind-merge";
import { TbClick } from "react-icons/tb";
import { Option, Select, Spinner } from "@drasla/nextjs-theme-kit";
import { useTranslations } from "next-intl";
import ChartTooltip from "./chartTooltip";

type Props = {
    selectedPanel: SelectedPanelType | undefined;
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
};

function DailyChart({ selectedPanel, selectedDate, setSelectedDate }: Props) {
    const t = useTranslations();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const filledDailyStats = useMemo(() => {
        if (!data) return [];
        return ChartUtility.fillMissingDates(data, Number(selectedDate));
    }, [data]);
    const coloredDailyStats = useMemo(() => {
        return ChartUtility.applyGradientColors(filledDailyStats);
    }, [data]);

    useEffect(() => {
        if (!selectedPanel?.shortUrlId) return;

        const startDate = dayjs().subtract(Number(selectedDate), "days").format("YYYY-MM-DD");
        const endDate = dayjs().format("YYYY-MM-DD");

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/stats/daily", {
                    body: JSON.stringify({
                        shortUrlId: selectedPanel.shortUrlId,
                        startDate,
                        endDate,
                    }),
                    method: "POST",
                });
                const json = await res.json();

                setData(ChartUtility.applyGradientColors(json.dailyStats));
            } catch {
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedPanel?.shortUrlId, selectedDate]);

    return (
        <section
            className={twMerge(["w-full", "box-border", "my-5"], ["border-b-2", "theme-border"])}>
            <div className={twMerge("flex", "justify-between", "items-center", "mb-3")}>
                <h2 className={twMerge(["flex", "items-center", "gap-2"], ["font-medium"])}>
                    <TbClick />
                    {t("page.stats.dailyClick")}
                </h2>
                <Select
                    size={"small"}
                    menuClassName={twMerge(["text-xs"])}
                    displayValue={t("page.stats.rangeDate", { days: selectedDate })}
                    onChange={value => setSelectedDate(value)}>
                    <Option value={"7"} className={"text-xs"}>
                        {t("page.stats.rangeDate", { days: 7 })}
                    </Option>
                    <Option value={"30"} className={"text-xs"}>
                        {t("page.stats.rangeDate", { days: 30 })}
                    </Option>
                    <Option value={"60"} className={"text-xs"}>
                        {t("page.stats.rangeDate", { days: 60 })}
                    </Option>
                </Select>
            </div>
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
                <ResponsiveContainer height={250} width="100%">
                    <BarChart data={filledDailyStats}>
                        <CartesianGrid vertical={false} stroke={"#ccc"} />
                        <XAxis
                            dataKey={"date"}
                            tick={{ fontSize: 12, fill: "#ccc", fontWeight: 500 }}
                            tickFormatter={d => dayjs(d).format("MM.DD")}
                        />
                        <YAxis tick={{ fontSize: 12, fill: "#ccc", fontWeight: 500 }} />
                        <Tooltip content={props => <ChartTooltip {...props} />} />
                        <Bar dataKey={"count"}>
                            {coloredDailyStats.map((entry, index) => (
                                <Cell key={index} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            )}
        </section>
    );
}

export default DailyChart;
