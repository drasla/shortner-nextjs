"use client";

import { twMerge } from "tailwind-merge";
import { FindManyShortUrlOutput } from "../../../actions/shorUrl/findMany/findManyShortUrlSchema";
import LinkListClientList from "./clientList";
import { useState } from "react";
import LinkClientStats from "./clientStats";
import LinkClientSettings from "./clientSettings";

type Props = {
    data: FindManyShortUrlOutput | undefined;
};

export type SelectedPanelType = {
    type: "stats" | "settings";
    shortUrlId: string;
    shortUrl: string;
} | null;

function LinkListClientContainer({ data }: Props) {
    const [selectedPanel, setSelectedPanel] = useState<SelectedPanelType>(null);

    return (
        <div className={twMerge(["flex", "gap-5", "px-5", "box-border"])}>
            <LinkListClientList
                data={data}
                selectedPanel={selectedPanel}
                setSelectedPanel={setSelectedPanel}
            />
            {selectedPanel && selectedPanel.type === "stats" && (
                <LinkClientStats
                    selectedPanel={selectedPanel}
                    setSelectedPanel={setSelectedPanel}
                />
            )}
            {selectedPanel && selectedPanel.type === "settings" && <LinkClientSettings />}
        </div>
    );
}

export default LinkListClientContainer;
