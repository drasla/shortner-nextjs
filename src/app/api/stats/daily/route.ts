import { NextRequest, NextResponse } from "next/server";
import FindDailyStatsAction from "../../../../actions/stats/daily/findDailyStatsAction";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const result = await FindDailyStatsAction(body);
    return NextResponse.json(result);
}
