import { NextRequest, NextResponse } from "next/server";
import FindOsStatsAction from "../../../../actions/stats/os/findOsStatsAction";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const result = await FindOsStatsAction(body);

    if (!result.success) {
        return NextResponse.json(
            { error: result.formError, fieldErrors: result.fieldErrors },
            { status: 400 },
        );
    }

    return NextResponse.json(result.data);
}
