import messages from "../../i18n/messages/en.json";

export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];

declare module "next-intl" {
    interface AppConfig {
        Locale: Locale;
        Messages: typeof messages;
    }
}
