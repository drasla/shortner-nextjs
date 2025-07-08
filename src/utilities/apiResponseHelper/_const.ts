import { MessageKey } from "./_types";

export const MESSAGE_KEYS = {
    API: {
        // 인증 관련
        AUTH: {
            SIGN_IN: {
                SUCCESS: "api.auth.signIn.success",
                INVALID_CREDENTIALS: "api.auth.signIn.invalidCredentials",
            },
            SIGN_UP: {
                SUCCESS: "api.auth.signUp.success",
                EMAIL_EXISTS: "api.auth.signUp.emailExists",
            },
            SIGN_OUT: {
                SUCCESS: "api.auth.signOut.success",
            },
            UNAUTHORIZED: "api.auth.unauthorized",
            INVALID_SESSION: "api.auth.invalidSession",
            FORBIDDEN: "api.auth.forbidden",
        },
        USER: {
            GET_USER: {
                SUCCESS: "api.user.getUser.success",
            },
        },
        // 검증 관련
        VALIDATION: {
            EMAIL: "api.validation.email",
            PASSWORD: "api.validation.password",
            PASSWORD_LENGTH: "api.validation.passwordLength",
            PASSWORD_CONFIRM: "api.validation.passwordConfirm",
        },
        INVALID_INPUT: "api.invalidInput",
        SERVER_ERROR: "api.serverError",
    },
    // 일반
    TITLE: "title",
    DESCRIPTION: "description",
} as const satisfies Record<string, any>;

export function assertMessageKey(key: string): asserts key is MessageKey {
    if (process.env.NODE_ENV === "development") {
    }
}
