import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";
import "../../styles/sign.css";

function SignLayout({ children }: PropsWithChildren) {
    return (
        <div
            className={twMerge(
                ["sign-background", "w-full", "min-h-[calc(100dvh-var(--height-header))]", "p-5"],
                ["flex", "justify-center", "items-center"],
            )}>
            {children}
        </div>
    );
}

export default SignLayout;
