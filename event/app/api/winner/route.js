import { NextResponse } from "next/server";
import { deleteWinner, getWinnerById } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json({ success: false, message: "Must supply a winner ID" }, { status: 400 });
    }

    const { error, data } = await getWinnerById(id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: `No winner found for id ${id}` }, { status: 404 });
    }

    data.participants.finish_time = data.finish_time;

    return NextResponse.json(data.participants);
}

export async function DELETE(request) {
    const winner = await request.json();
    const { error } = await deleteWinner(winner.id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Winner could not be deleted." });
    }

    return NextResponse.json({ success: true, message: "Winner was deleted successfully." });
}
