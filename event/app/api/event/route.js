import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.has('all')) {
        return NextResponse.json(EVENTS);
    }

    const eventId = searchParams.get("id");
    if (!eventId) {
        return NextResponse.json({ success: false, message: "Must supply an event ID" }, { status: 400 });
    }

    const event = EVENTS.filter(event => event.id === parseInt(eventId));
    if (event.length === 0) {
        return NextResponse.json({ success: false, message: `No event found for id ${eventId}` }, { status: 404 });
    }

    return NextResponse.json(event[0]);
}

export async function POST(request) {
    const event = await request.json();
    EVENTS.push(event);
    return NextResponse.json({ success: true, message: "Event was created successfully." });
}

export async function DELETE(request) {
    const req = await request.json();
    const eventId = req.id;
    EVENTS = EVENTS.filter(event => event.id !== eventId);

    return NextResponse.json({ success: true, message: "Event was deleted successfully." });
}

let EVENTS = [
    {
        id: 1,
        url: "/triathlon",
        image: "https://picsum.photos/484/272",
        date: "16 Aug. 2024",
        competition: "Triathlon",
        description: "Stockholm. Även ett mini olympiskt triathlon."
    },
    {
        id: 2,
        url: "#",
        image: "https://picsum.photos/484/272",
        date: "N/A",
        competition: "E-Sport Challenge",
        description: "Detta event planeras fortfarande."
    }
];
