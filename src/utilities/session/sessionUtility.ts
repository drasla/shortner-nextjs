import { NextRequest } from "next/server";
import { v4 as uuidV4 } from "uuid";
import { HeaderUtility } from "../header/headerUtility";
import { SessionData } from "../../types/sessionData";
import { prisma } from "../../libraries/prisma/prisma";

export class SessionUtility {
    static async createSession(userId: string, request: NextRequest, rememberMe: boolean = false) {
        const token = uuidV4();
        const clientIP = HeaderUtility.getClientIP(request);
        const userAgent = HeaderUtility.getUserAgent(request);

        const expiresAt = new Date();
        if (rememberMe) {
            expiresAt.setDate(expiresAt.getDate() + 30);
        } else {
            expiresAt.setHours(expiresAt.getHours() + 24);
        }

        return prisma.session.create({
            data: {
                token,
                userId,
                expiresAt,
                ipAddress: clientIP,
                userAgent,
            },
        });
    }

    static async validateSession(token: string): Promise<SessionData | null> {
        const session = await prisma.session.findUnique({
            where: { token },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        isAdmin: true,
                        isActive: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                },
            },
        });

        if (!session) {
            return null;
        }

        if (session.expiresAt < new Date()) {
            await this.deleteSession(token);
            return null;
        }

        if (!session.user.isActive) {
            await this.deleteSession(token);
            return null;
        }

        return session;
    }

    static async deleteSession(token: string) {
        await prisma.session.delete({
            where: { token },
        });
    }

    static async deleteAllUserSession(userId: string) {
        await prisma.session.deleteMany({
            where: { userId },
        });
    }

    static async cleanUpExpiredSession(): Promise<void> {
        await prisma.session.deleteMany({
            where: { expiresAt: { lt: new Date() } },
        });
    }
}
