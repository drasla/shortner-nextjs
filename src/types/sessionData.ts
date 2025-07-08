import { UserData } from "./userData";

export type SessionData = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    token: string;
    userId: string;
    expiresAt: Date;
    ipAddress: string | null;
    userAgent: string | null;
    user: UserData;
};
