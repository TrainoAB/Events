import { NextResponse } from "next/server";
import { getAllDiscountsById, getAllDiscountsByUrl, getAllDiscountsBySponsorId } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.has('url')) {
        const url = searchParams.get('url');
        const { error, data } = await getAllDiscountsByUrl('/' + url);
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: "An error occurred while retrieving discounts by url" }, { status: 500 });
        }
        return NextResponse.json(data);
    }

    if (searchParams.has('sponsorid')) {
        const sponsorId = searchParams.get('sponsorid');
        const { error, data } = await getAllDiscountsBySponsorId(sponsorId);
        if (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: "An error occurred while retrieving discounts by sponsor id" }, { status: 500 });
        }
        return NextResponse.json(data);
    }

    const eventId = searchParams.get("id");
    if (!eventId) {
        return NextResponse.json({ success: false, message: "Must supply an event ID" }, { status: 400 });
    }

    const { error, data } = await getAllDiscountsById(eventId);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "An error occurred while retrieving discounts by id" }, { status: 500 });

    }
    return NextResponse.json(data);
}
