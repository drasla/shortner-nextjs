import { v4 as uuidV4 } from "uuid";
import { pbkdf2Sync } from "pbkdf2";

class PasswordHashUtility {
    static createSalt(): string {
        return uuidV4();
    }

    static hashPassword(password: string, salt: string): string {
        return pbkdf2Sync(password, salt, 100000, 64, "sha512").toString();
    }

    static verifyPassword(password: string, salt: string, hashedPassword: string) {
        const hash = this.hashPassword(password, salt);
        return hash === hashedPassword;
    }
}

export default PasswordHashUtility;
