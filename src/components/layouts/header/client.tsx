"use client";

import { useTranslations } from "next-intl";
import { useAuth } from "../../../providers/auth/authClientProvider";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "@drasla/nextjs-theme-kit";
import { useRouter } from "next/navigation";

function HeaderClient() {
    const router = useRouter();
    const t = useTranslations();
    const { user, isLoading } = useAuth();

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

    if (isLoading) return <></>;

    return (
        <>
            {!isLoading && user?.isAnonymous === false ? (
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
