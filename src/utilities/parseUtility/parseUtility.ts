import { UAParser } from "ua-parser-js";

export function parseUserAgent(userAgentString: string) {
    const parser = new UAParser(userAgentString);
    const result = parser.getResult();

    const browser = result.browser.name || "Unknown";
    const device = result.device.model || "Unknown";
    const os = result.os.name || "Unknown";

    return { browser, device, os };
}
