import { deleteSponsor, getSponsorById } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
    const { id: sponsorId } = params;

    // Get a sponsor based on route id
    try {
        const { data, error } = await getSponsorById(sponsorId);
        if (error) {
            throw error;
        }
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 500 });
    }
}

export async function DELETE(_request, { params }) {
    const { id: sponsorId } = params;

    // Delete sponsor with specified id from database
    try {
        const { error } = await deleteSponsor(sponsorId);
        if (error) {
            throw error;
        }
        return NextResponse.json({ message: "Sponsor was deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 500 });
    }
}
