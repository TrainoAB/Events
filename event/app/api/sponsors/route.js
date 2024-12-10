import { NextResponse } from "next/server";
import { getAllSponsorsByEventId, getAllSponsorsByUrl } from "@/db/db";

export async function GET(request) {
    // Extract the eventId from search params
    const params = request.nextUrl.searchParams;

    if (params.has('url')) {
        const url = params.get('url');
        const { error, data } = await getAllSponsorsByUrl('/' + url);
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: "An error occurred while retrieving sponsors by url" }, { status: 500 });
        }
        return NextResponse.json(data);
    }

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
