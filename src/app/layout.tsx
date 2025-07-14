import { Viewport } from "next";
import { PropsWithChildren } from "react";
import "../styles/index.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import HeaderComponent from "../components/layouts/header/header";
import { HTML, Layout } from "@drasla/nextjs-theme-kit";
import AuthClientProvider from "../providers/auth/authClientProvider";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

async function RootLayout({ children }: PropsWithChildren) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <HTML lang={locale}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <AuthClientProvider>
                    <Layout header={<HeaderComponent />}>{children}</Layout>
                </AuthClientProvider>
            </NextIntlClientProvider>
        </HTML>
    );
}

export default RootLayout;
