import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function LinkLayout({ children }: PropsWithChildren) {
    return <div className={twMerge(["w-full", "max-w-7xl", "mx-auto", "my-10"])}>{children}</div>;
}

export default LinkLayout;
