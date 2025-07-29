"use client";

import { twMerge } from "tailwind-merge";
import { SelectedPanelType } from "./clientContainer";
import { Dispatch, SetStateAction, useState } from "react";
import ShortUrlLink from "./shortUrlLink";
import { TbX } from "react-icons/tb";
import DailyChart from "../../../components/chart/dailyChart";
import BrowserChart from "../../../components/chart/browserChart";
import DeviceChart from "../../../components/chart/deviceChart";

type Props = {
    selectedPanel: SelectedPanelType | undefined;
    setSelectedPanel: Dispatch<SetStateAction<SelectedPanelType>>;
};

function LinkClientStats({ selectedPanel, setSelectedPanel }: Props) {
    const [selectedDate, setSelectedDate] = useState("7");

    return (
        <div className={twMerge(["lg:w-1/2", "w-full", "p-5"], ["theme-paper", "rounded-lg"])}>
            <div
                className={twMerge(
                    ["relative", "pb-5"],
                    ["flex", "justify-between", "items-center"],
                    ["border-b-2", "theme-border"],
                )}>
                <h1 className={twMerge(["font-bold"])}>
                    {selectedPanel && <ShortUrlLink shortCode={selectedPanel?.shortUrl} />}
                </h1>
                <div
                    className={twMerge(
                        ["p-1"],
                        ["hover:bg-gray-600", "hover:rounded-full"],
                        ["cursor-pointer"],
                    )}
                    onClick={() => {
                        setSelectedPanel(null);
                    }}>
                    <TbX className={twMerge()} size={18} />
                </div>
            </div>

            <DailyChart
                selectedDate={selectedDate}
                selectedPanel={selectedPanel}
                setSelectedDate={setSelectedDate}
            />

            <BrowserChart selectedPanel={selectedPanel} />

            <DeviceChart selectedPanel={selectedPanel} />
        </div>
    );
}

export default LinkClientStats;
