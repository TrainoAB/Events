import { NextResponse } from "next/server";
import { getAllEvents, getAllEventsByUrl } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.has('url')) {
        const url = searchParams.get('url');
        const { error, data } = await getAllEventsByUrl('/' + url);
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: "An error occurred while retrieving events by url" }, { status: 500 });
        }
        return NextResponse.json(data);
    }

    const { error, data } = await getAllEvents();
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "An error occurred while retrieving events" }, { status: 500 });

    }
    return NextResponse.json(data);
}