import { getDatabaseClient } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.has('all')) {
        const { data } = await getDatabaseClient().from('events').select();
        return NextResponse.json(data);
    }

    const eventId = searchParams.get("id");
    if (!eventId) {
        return NextResponse.json({ success: false, message: "Must supply an event ID" }, { status: 400 });
    }

    const { error, data } = await getDatabaseClient().from('events').select().eq('id', eventId).single();
        
    if (error) {
        return NextResponse.json({ success: false, message: `No event found for id ${eventId}` }, { status: 404 });
    }

    return NextResponse.json(data);
}

export async function DELETE(request) {
    const event = await request.json();
    const { error } = await getDatabaseClient().from('events').delete().eq('id', event.id);
    if (error) {
        console.log(error);
    }
    return NextResponse.json({ success: true, message: "Event was deleted successfully." });
}
