import { NextResponse } from "next/server";
import { deleteDiscount, getAllDiscountsById, getAllDiscountsByUrl, getDiscountById } from "@/db/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json({ success: false, message: "Must supply a discount ID" }, { status: 400 });
    }

    const { error, data } = await getDiscountById(id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: `No discount found for id ${id}` }, { status: 404 });
    }

    return NextResponse.json(data);
}

export async function DELETE(request) {
    const discount = await request.json();
    const { error } = await deleteDiscount(discount.id);
    if (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Discount could not be deleted." });
    }

    return NextResponse.json({ success: true, message: "Discount was deleted successfully." });
}
