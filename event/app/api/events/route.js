import { NextResponse } from "next/server";
import { getAllEvents, getAllUnhiddenEvents } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.has('unhidden')) {
        const { error, data } = await getAllUnhiddenEvents();
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: "An error occurred while retrieving unhidden events" }, { status: 500 });
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