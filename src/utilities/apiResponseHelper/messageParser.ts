import { MessageKey, MessageParams } from "./_types";

export class MessageParser {
    // 중첩된 객체에서 키로 값을 가져오는 함수
    static getNestedValue(obj: any, path: MessageKey): string {
        const keys = path.split(".");
        let current = obj;

        for (const key of keys) {
            if (current && typeof current === "object" && key in current) {
                current = current[key];
            } else {
                return path;
            }
        }

        return typeof current === "string" ? current : path;
    }

    // 메세지에서 파라미터를 치환하는 함수
    static interpolateMessage(message: string, params?: MessageParams): string {
        if (!params) return message;

        return message.replace(/\{(\w+)}/g, (match, key) => {
            const value = params[key];
            return value !== undefined ? String(value) : match;
        });
    }

    // 메시지를 파싱하는 함수
    static parseMessage(messages: any, key: MessageKey, params?: MessageParams): string {
        const message = this.getNestedValue(messages, key);
        return this.interpolateMessage(message, params);
    }

    // 다국어 메시지 로더
    static async loadMessages(locale: string): Promise<any> {
        try {
            return (await import(`../../i18n/messages/${locale}.json`)).default;
        } catch (error) {
            return (await import(`../../i18n/messages/ko.json`)).default;
        }
    }
}
