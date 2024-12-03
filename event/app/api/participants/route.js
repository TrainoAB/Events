import { NextResponse } from "next/server";
import { getAllParticipants } from "@/db/db";

export async function GET(request) {
    const { error, data } = await getAllParticipants();
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "An error occurred while retrieving participants" }, { status: 500 });

    }
    return NextResponse.json(data);
}