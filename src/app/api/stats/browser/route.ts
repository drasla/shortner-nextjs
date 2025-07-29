import { NextRequest, NextResponse } from "next/server";
import FindBrowserStatsAction from "../../../../actions/stats/browser/findBrowserStatsAction";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const result = await FindBrowserStatsAction(body);

    if (!result.success) {
        return NextResponse.json(
            { error: result.formError, fieldErrors: result.fieldErrors },
            { status: 400 },
        );
    }

    return NextResponse.json(result.data);
}
