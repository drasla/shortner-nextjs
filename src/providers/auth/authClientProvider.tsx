"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Props = {
    initializedUser: boolean;
};

type AuthContextType = {
    isInitialized: boolean;
    isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
    isInitialized: false,
    isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

function AuthClientProvider({ initializedUser }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(!initializedUser);
    const [isInitialized, setIsInitialized] = useState<boolean>(initializedUser);

    useEffect(() => {
        if (initializedUser) {
            setIsLoading(false);
            setIsInitialized(true);
            return;
        }

        setIsLoading(true);
        fetch("/api/user/init", {
            method: "GET",
            credentials: "include",
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to initialize user");
                }
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setIsInitialized(data.success);
            })
            .catch(_ => {
                setIsLoading(false);
                setIsInitialized(false);
            });
    }, [initializedUser]);

    return <AuthContext.Provider value={{ isInitialized, isLoading }}></AuthContext.Provider>;
}

export default AuthClientProvider;
