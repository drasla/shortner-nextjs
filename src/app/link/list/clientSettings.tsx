"use client";

import { twMerge } from "tailwind-merge";

function LinkClientSettings() {
    return <div className={twMerge(["w-1/2"], ["theme-paper", "rounded-lg"])}></div>;
}

export default LinkClientSettings;
