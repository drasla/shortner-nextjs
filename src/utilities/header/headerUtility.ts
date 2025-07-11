import { NextRequest } from "next/server";
import { headers } from "next/headers";

export class HeaderUtility {
    static getClientIPFromRequest(request: NextRequest) {
        const forwarded = request.headers.get("x-forwarded-for");
        const realIP = request.headers.get("x-real-ip");
        const cfConnectingIP = request.headers.get("cf-connecting-ip");
        const trueClientIP = request.headers.get("true-client-ip");

        if (forwarded) {
            return forwarded.split(",")[0].trim();
        }

        if (realIP) return realIP;
        if (cfConnectingIP) return cfConnectingIP;
        if (trueClientIP) return trueClientIP;

        return "unknown";
    }

    static getUserAgentFromRequest(request: NextRequest) {
        return request.headers.get("user-agent") || "unknown";
    }

    static async getClientIPFromHeaders() {
        const headerList = await headers(); // ✅ await 필요
        const forwarded = headerList.get("x-forwarded-for");
        const realIP = headerList.get("x-real-ip");
        const cfConnectingIP = headerList.get("cf-connecting-ip");
        const trueClientIP = headerList.get("true-client-ip");

        if (forwarded) return forwarded.split(",")[0].trim();
        if (realIP) return realIP;
        if (cfConnectingIP) return cfConnectingIP;
        if (trueClientIP) return trueClientIP;

        return "127.0.0.1";
    }

    static async getUserAgentFromHeaders() {
        const headerList = await headers(); // ✅ await 필요
        return headerList.get("user-agent") || "unknown";
    }
}
