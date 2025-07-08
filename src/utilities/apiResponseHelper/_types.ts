export type MessageKey =
    // 인증 관련 메시지
    | "api.auth.signIn.success"
    | "api.auth.signIn.invalidCredentials"
    | "api.auth.signUp.success"
    | "api.auth.signUp.emailExists"
    | "api.auth.signOut.success"
    | "api.auth.unauthorized"
    | "api.auth.invalidSession"
    | "api.auth.forbidden"
    // 사용자 관련 메시지
    | "api.user.getUser.success"
    // 검증 관련 메시지
    | "api.validation.email"
    | "api.validation.password"
    | "api.validation.passwordLength"
    | "api.validation.passwordConfirm"
    // 에러 메세지
    | "api.invalidInput"
    | "api.serverError"
    // 일반 메시지
    | "title"
    | "description";

export type MessageParams = Record<string, string | number>;
