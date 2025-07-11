import { z } from "zod";
import { MessageValues } from "./_types";

export class ZodMessageParser {
    private t: any;

    constructor(t: any) {
        this.t = t;
    }

    getMessage(key: string, params?: MessageValues): string {
        return this.t(key, params);
    }

    getErrorMessage(key: string, params?: MessageValues): z.ZodErrorMap {
        return () => ({ message: this.getMessage(key, params) });
    }
}
