import { NextResponse } from "next/server";
import { getAllEvents } from "@/db/db";

export async function GET(request) {
    const { error, data } = await getAllEvents();
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "An error occurred while retrieving events" }, { status: 500 });

    }
    return NextResponse.json(data);
}