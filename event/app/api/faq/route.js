import { NextResponse } from "next/server";
import { deleteFaq, getFaqById } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json({ success: false, message: "Must supply an faq ID" }, { status: 400 });
    }

    const { error, data } = await getFaqById(id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: `No faq found for id ${id}` }, { status: 404 });
    }

    return NextResponse.json(data);
}

export async function DELETE(request) {
    const faq = await request.json();
    const { error } = await deleteFaq(faq.id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Faq could not be deleted." });
    }

    return NextResponse.json({ success: true, message: "Faq was deleted successfully." });
}
