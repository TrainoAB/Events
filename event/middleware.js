import { NextResponse } from "next/server";

export function middleware(req) {
    // Check if the password cookie is set (client-side logic will handle localStorage)

    // TODO: Move all this password logic into a separate component and wrap it around the entire app instead
    const passwordCookie = req.cookies.get("password");

    console.log("Passwords", passwordCookie, process.env.PASSWORD);
    if (!passwordCookie || passwordCookie.value !== process.env.PASSWORD) {
        const loginUrl = new URL("/developmentlogin", req.url);
        return NextResponse.redirect(loginUrl); // Redirect to login page
    }

    return NextResponse.next(); // Continue to the requested page
}

export const config = {
    matcher: ["/"], // Adjust paths as needed
};
