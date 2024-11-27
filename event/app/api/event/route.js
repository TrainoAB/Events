import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get("id");

    if (!eventId) {
        return NextResponse.json(EVENTS);       // Return all events if no id was supplied.
    }

    return NextResponse.json({ success: false, message: "Retrieving single events based on ID not implemented yet" });
}

export async function DELETE(request) {
    const req = await request.json();
    const competition = req.competition;
    EVENTS = EVENTS.filter(event => event.competition !== competition);

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