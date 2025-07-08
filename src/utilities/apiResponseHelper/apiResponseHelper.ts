import { NextRequest, NextResponse } from "next/server";
import { MessageParser } from "./messageParser";
import { MessageKey } from "./_types";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export class ApiResponseHelper {
    static async getLocaleFromRequest(request: NextRequest): Promise<string> {
        try {
            const acceptLanguage = request.headers.get("accept-language");
            const supportedLocales = ["ko", "en"];
            const defaultLocale = "ko";

            if (acceptLanguage) {
                const preferredLocale = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

                if (supportedLocales.includes(preferredLocale)) {
                    return preferredLocale;
                }
            }

            const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;
            if (localeCookie && supportedLocales.includes(localeCookie)) {
                return localeCookie;
            }

            return defaultLocale;
        } catch (error) {
            return "ko";
        }
    }

    static async success(
        request: NextRequest,
        messageKey: MessageKey,
        data?: any,
        status: number = 200,
        params?: Record<string, any>,
    ): Promise<NextResponse> {
        const locale = await this.getLocaleFromRequest(request);
        const messages = await MessageParser.loadMessages(locale);
        const message = MessageParser.parseMessage(messages, messageKey, params);

        return NextResponse.json({ message, ...data }, { status });
    }

    static async successWithCookie(
        request: NextRequest,
        messageKey: MessageKey,
        cookieOptions: {
            name: string;
            action: "delete" | "set";
            value?: string;
            options?: Partial<ResponseCookie>;
        },
        data?: any,
        status: number = 200,
        params?: Record<string, any>,
    ): Promise<NextResponse> {
        const locale = await this.getLocaleFromRequest(request);
        const messages = await MessageParser.loadMessages(locale);
        const message = MessageParser.parseMessage(messages, messageKey, params);

        const response = NextResponse.json({ message, ...data }, { status });

        if (cookieOptions.action === "delete") {
            response.cookies.delete(cookieOptions.name);
        } else if (cookieOptions.action === "set" && cookieOptions.value) {
            response.cookies.set(cookieOptions.name, cookieOptions.value, cookieOptions.options);
        }

        return response;
    }

    static async error(
        request: NextRequest,
        messageKey: MessageKey,
        status: number = 400,
        details?: any,
        params?: Record<string, any>,
    ): Promise<NextResponse> {
        const locale = await this.getLocaleFromRequest(request);
        const messages = await MessageParser.loadMessages(locale);
        const error = MessageParser.parseMessage(messages, messageKey, params);

        const response: any = { error };
        if (details) {
            response.details = details;
        }

        return NextResponse.json(response, { status });
    }
}
