import { NextResponse } from "next/server";
import { getAllSponsorsByEventId } from "@/db/db";

export async function GET(request) {
    // Extract the eventId from search params
    const params = request.nextUrl.searchParams;
    const eventId = parseInt(params.get("id"));

    try {
        const { data, error } = await getAllSponsorsByEventId(eventId);
        if (error) {
            throw error;
        }
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 500 });
    }
}
