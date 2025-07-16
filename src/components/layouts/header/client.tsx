"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "@drasla/nextjs-theme-kit";
import { useRouter } from "next/navigation";
import { UserData } from "../../../types/userData";

type Props = {
    user: UserData | null;
}

function HeaderClient({ user }: Props) {
    const router = useRouter();
    const t = useTranslations();

    const handleLogout = async () => {
        try {
            await fetch("/api/user/out", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            router.push("/");
            window.location.reload();
        } catch {
            console.log("!");
        }
    };

    return (
        <>
            {user?.isAnonymous === false ? (
                <>
                    <Button type={"button"} onClick={handleLogout}>
                        {t("layout.header.signOutButtonText")}
                    </Button>
                </>
            ) : (
                <>
                    <Link href={"/sign/up"}>
                        <Button
                            className={twMerge(
                                ["bg-white", "text-black"],
                                ["rounded-full", "cursor-pointer"],
                            )}>
                            {t("layout.header.signUpButtonText")}
                        </Button>
                    </Link>
                    <Link href={"/sign/in"}>
                        <Button className={twMerge(["rounded-full", "cursor-pointer"])}>
                            {t("layout.header.signInButtonText")}
                        </Button>
                    </Link>
                </>
            )}
        </>
    );
}

export default HeaderClient;
