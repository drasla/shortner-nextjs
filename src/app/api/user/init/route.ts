import { cookies } from "next/headers";
import PasswordHashUtility from "../../../../utilities/hash/hashUtility";
import HashUtility from "../../../../utilities/hash/hashUtility";
import { prisma } from "../../../../libraries/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const cookieValue = request.cookies.get("hashed-id")?.value;

        if (cookieValue) {
            try {
                const user = await prisma.user.findUnique({
                    where: { hashedId: cookieValue },
                });

                if (user) {
                    return new NextResponse(null, { status: 204 });
                }
            } catch (findError) {
                console.error("Error finding user:", findError);
            }
        }

        const salt = PasswordHashUtility.createSalt();
        const tempHashedId = HashUtility.hashValue("temp", salt);

        const user = await prisma.user.create({
            data: {
                salt,
                hashedId: tempHashedId, // 임시 값 사용
                isAnonymous: true,
            },
        });

        const mongoId = user.id;
        const hashedId = HashUtility.hashValue(mongoId, salt);

        await prisma.user.update({
            where: { id: mongoId },
            data: {
                hashedId,
            },
        });

        (await cookies()).set({
            name: "hashed-id",
            value: hashedId,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        });

        return NextResponse.json(null, { status: 201 });
    } catch (e) {
        console.error("User initialization error:", e);
        console.error("Error stack:", e instanceof Error ? e.stack : "No stack trace");

        return NextResponse.json(
            {
                error: "Failed to initialize user.",
                details:
                    process.env.NODE_ENV === "development"
                        ? e instanceof Error
                            ? e.message
                            : String(e)
                        : undefined,
            },
            { status: 500 },
        );
    }
}
