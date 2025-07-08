import { MessageKey } from "./_types";
import { MESSAGE_KEYS } from "./_const";

export class ValidationHelper {
    // 검증 메시지 키 변환
    static getValidationMessageKey(
        type: "email" | "password" | "passwordLength" | "passwordConfirm",
    ): MessageKey {
        switch (type) {
            case "email":
                return MESSAGE_KEYS.API.VALIDATION.EMAIL;
            case "password":
                return MESSAGE_KEYS.API.VALIDATION.PASSWORD;
            case "passwordConfirm":
                return MESSAGE_KEYS.API.VALIDATION.PASSWORD_CONFIRM;
            case "passwordLength":
                return MESSAGE_KEYS.API.VALIDATION.PASSWORD_LENGTH;
            default:
                return MESSAGE_KEYS.API.VALIDATION.EMAIL;
        }
    }
}
