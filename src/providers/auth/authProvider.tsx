import AuthClientProvider from "./authClientProvider";
import { PropsWithChildren } from "react";

function AuthProvider({ children }: PropsWithChildren) {
    return (
        <>
            {children}
            <AuthClientProvider />
        </>
    );
}

export default AuthProvider;
