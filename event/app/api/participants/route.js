import { NextResponse } from "next/server";
import { getAllParticipants, getAllParticipantsById, getAllParticipantsByUrl } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.has('url')) {
        const url = searchParams.get('url');
        const { error, data } = await getAllParticipantsByUrl('/' + url);
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: "An error occurred while retrieving participants by url" }, { status: 500 });
        }
        return NextResponse.json(data);
    }

    if (searchParams.has('id')) {
        const eventId = searchParams.get('id');
        const { error, data } = await getAllParticipantsById(eventId);
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: "An error occurred while retrieving participants by id" }, { status: 500 });
        }
        return NextResponse.json(data);
    }

    const { error, data } = await getAllParticipants();
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "An error occurred while retrieving participants" }, { status: 500 });

    }
    return NextResponse.json(data);
}