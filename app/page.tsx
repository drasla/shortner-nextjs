import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./swith-language";

type Props = {
    params: { locale: string };
};

async function RootPage({ params }: Props) {
    const { locale } = params;
    const t = await getTranslations(locale);

    return (
        <main>
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
            <LanguageSwitcher />
        </main>
    );
}

export default RootPage;
