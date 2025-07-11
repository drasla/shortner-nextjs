import { PropsWithChildren } from "react";
import AuthClientProvider from "./authClientProvider";

type Props = {
    initializedUser: boolean;
} & PropsWithChildren;

function AuthProvider({ initializedUser, children }: Props) {
    return (
        <>
            {children}
            <AuthClientProvider initializedUser={initializedUser}/>
        </>
    );
}

export default AuthProvider;
