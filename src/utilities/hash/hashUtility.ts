import { v4 as uuidV4 } from "uuid";
import { pbkdf2Sync } from "pbkdf2";

class HashUtility {
    static createSalt(): string {
        return uuidV4();
    }

    static hashValue(value: string, salt: string): string {
        return pbkdf2Sync(value, salt, 100000, 64, "sha512").toString("hex");
    }

    static verifyValue(value: string, salt: string, hashedPassword: string) {
        const hash = this.hashValue(value, salt);
        return hash === hashedPassword;
    }
}

export default HashUtility;
