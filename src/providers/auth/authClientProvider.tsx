"use client";

import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { UserData } from "../../types/userData";

type AuthContextType = {
    user: UserData | null;
    isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

function AuthClientProvider({ children }: PropsWithChildren) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/user/init", {
                    method: "GET",
                    credentials: "include",
                });

                const data = await res.json();

                if (data.success && data.user) {
                    setUser(data.user);
                } else {
                    setUser(null);
                }
            } catch {
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>;
}

export default AuthClientProvider;
