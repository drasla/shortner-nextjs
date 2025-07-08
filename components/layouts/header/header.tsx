import { twMerge } from "tailwind-merge";
import { TbMenu2 } from "react-icons/tb";

function HeaderComponent() {
    return (
        <header
            className={twMerge(
                ["sticky", "top-0", "w-full", "h-header", "px-4"],
                ["flex", "justify-between", "items-center"],
                ["bg-primary-main", "text-theme-text"],
            )}>
            <div className={twMerge(["flex", "items-center"])}>
                <div
                    className={twMerge(
                        ["p-4"],
                        ["flex", "justify-center", "items-center"],
                        ["cursor-pointer"],
                    )}>
                    <TbMenu2 size={20} />
                </div>
                <div className={twMerge(["w-40"])}>Getflix</div>
            </div>
            <div className={twMerge(["flex", "justify-end", "items-center", "gap-3"])}>
                <button
                    className={twMerge(
                        ["px-5", "py-1.5", "rounded-full"],
                        ["bg-white", "text-black"],
                        ["cursor-pointer"],
                    )}>
                    무료 계정 만들기
                </button>
                <button
                    className={twMerge(
                        ["px-5", "py-1.5"],
                        ["rounded-full", "border", "border-theme-text"],
                        ["cursor-pointer"],
                    )}>
                    로그인
                </button>
            </div>
        </header>
    );
}

export default HeaderComponent;
