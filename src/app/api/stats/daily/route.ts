import { NextRequest, NextResponse } from "next/server";
import FindDailyStatsAction from "../../../../actions/stats/daily/findDailyStatsAction";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const result = await FindDailyStatsAction(body);

    if (!result.success) {
        return NextResponse.json(
            { error: result.formError, fieldErrors: result.fieldErrors },
            { status: 400 },
        );
    }

    return NextResponse.json(result.data);
}
