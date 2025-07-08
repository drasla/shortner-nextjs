import { MessageKey, MessageParams } from "../apiResponseHelper/_types";
import { MessageParser } from "../apiResponseHelper/messageParser";

export class ZodMessageParser {
    private readonly messages: any;

    constructor(messages: any) {
        this.messages = messages;
    }

    getMessage(key: MessageKey, params?: MessageParams): string {
        return MessageParser.parseMessage(this.messages, key, params);
    }

    static async create(locale: string): Promise<ZodMessageParser> {
        const messages = await MessageParser.loadMessages(locale);
        return new ZodMessageParser(messages);
    }
}