import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
    // Await the request to access body content
    const res = await request.json();
    const password = res.password;

    // Check the password is correct
    const isCorrectPassword = password === process.env.ADMIN_PASSWORD;
    console.log("Password correct?:", isCorrectPassword);
    if (isCorrectPassword) {
        // Set a cookie for the admin password
        const cookieStore = await cookies();
        cookieStore.set({
            name: "admin-password",
            value: password,
            path: "/admin",
            maxAge: 60 * 60 * 4, // lasts for 4 hrs
            domain: process.env.NODE_ENV === "prod" ? process.env.NEXT_PUBLIC_BASE_URL : undefined,
        });

        return NextResponse.json({ success: true, message: "Password correct" });
    } else {
        return NextResponse.json({ success: false, message: "Password incorrect" });
    }
}
