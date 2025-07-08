import { NextRequest } from "next/server";

export class HeaderUtility {
    static getClientIP(request: NextRequest) {
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

    static getUserAgent(request: NextRequest) {
        return request.headers.get("user-agent") || "unknown";
    }
}