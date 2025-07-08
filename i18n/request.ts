import { cookies } from "next/headers"; // 경로 맞게 조정하세요

async function getRequestConfig() {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;

    const locales = ["en", "ko"];
    const defaultLocale = "ko";
    // locale 지정
    let locale = localeCookie && locales.includes(localeCookie) ? localeCookie : defaultLocale;

    let messages;
    try {
        messages = (await import("./messages/" + locale + ".json")).default;
    } catch (error) {
        messages = (await import("./messages/" + defaultLocale + ".json")).default;
        locale = defaultLocale;
    }

    return {
        locale,
        messages,
    };
}

export default getRequestConfig;
