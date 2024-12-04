import { NextResponse } from "next/server";
import { deleteRule, getRuleById } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json({ success: false, message: "Must supply a rule ID" }, { status: 400 });
    }

    const { error, data } = await getRuleById(id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: `No rule found for id ${id}` }, { status: 404 });
    }

    return NextResponse.json(data);
}

export async function DELETE(request) {
    const rule = await request.json();
    const { error } = await deleteRule(rule.id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Rule could not be deleted." });
    }

    return NextResponse.json({ success: true, message: "Rule was deleted successfully." });
}
