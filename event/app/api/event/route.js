import { NextResponse } from "next/server";
import { deleteEvent, getEventByUrl, getEventById } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const eventUrl = searchParams.get("url");
    if (eventUrl) {
        const { error, data } = await getEventByUrl("/" + eventUrl);
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: `No event found for url ${eventUrl}` }, { status: 404 });
        }
        return NextResponse.json(data);
    }

    const eventId = searchParams.get("id");
    if (!eventId) {
        return NextResponse.json({ success: false, message: "Must supply an event ID" }, { status: 400 });
    }

    const { error, data } = await getEventById(eventId);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: `No event found for id ${eventId}` }, { status: 404 });
    }

    return NextResponse.json(data);
}

export async function DELETE(request) {
    const event = await request.json();
    const { error } = await deleteEvent(event.id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Event could not be deleted." });
    }

    return NextResponse.json({ success: true, message: "Event was deleted successfully." });
}
