import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/intl/request.ts");

const nextConfig: NextConfig = {
    /* config options here */
    output: "standalone",
    reactStrictMode: true,
};

export default withNextIntl(nextConfig);
