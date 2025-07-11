import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function PolicyLayout({ children }: PropsWithChildren) {
    return <div className={twMerge(["w-full", "max-w-7xl", "mx-auto", "pt-5"])}>{children}</div>;
}

export default PolicyLayout;
