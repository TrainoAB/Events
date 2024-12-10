import { getInterestedSponsorsByEventId } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const params = request.nextUrl.searchParams;
    const eventId = parseInt(params.get("event-id"));

    try {
        const { data, error } = await getInterestedSponsorsByEventId(eventId);
        if (error) {
            throw error;
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 500 });
    }
}
