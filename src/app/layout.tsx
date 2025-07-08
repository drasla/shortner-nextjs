import { Viewport } from "next";
import { PropsWithChildren } from "react";
import "../styles/index.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import HeaderComponent from "../components/layouts/header/header";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

async function RootLayout({ children }: PropsWithChildren) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <HeaderComponent />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;
