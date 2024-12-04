import { NextResponse } from "next/server";
import { getAllRulesById, getAllRulesByUrl} from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.has('url')) {
        const url = searchParams.get('url');
        const { error, data } = await getAllRulesByUrl('/' + url);
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: "An error occurred while retrieving rules by url" }, { status: 500 });
        }
        return NextResponse.json(data);
    }

    const eventId = searchParams.get("id");
    if (!eventId) {
        return NextResponse.json({ success: false, message: "Must supply an event ID" }, { status: 400 });
    }

    const { error, data } = await getAllRulesById(eventId);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "An error occurred while retrieving rules by id" }, { status: 500 });

    }
    return NextResponse.json(data);
}
