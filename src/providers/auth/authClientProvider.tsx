"use client";

import { useEffect, useState } from "react";

type Props = {
    initializedUser: boolean;
};

function AuthClientProvider({ initializedUser }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(!initializedUser);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (initializedUser) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        fetch("/api/user/init", {
            method: "GET",
            credentials: "include",
        })
            .then(response => {
                if (!response.ok && response.status !== 204) {
                    throw new Error("Failed to initialize user");
                }
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [initializedUser]);

    return null;
}

export default AuthClientProvider;
