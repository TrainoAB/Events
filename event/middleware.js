import { NextResponse } from "next/server";
import { getEventByUrl } from "./db/db";

export async function middleware(request) {
    const { error, data } = await getEventByUrl("/triathlon");

    const eventFinished = data.finished;
    if (eventFinished && request.url.endsWith("/triathlon")) {
        return NextResponse.redirect(new URL("/triathlon/event-finished", request.url));
    }

    if (!eventFinished && (request.url.includes("winners") || request.url.includes("event-finished"))) {
        return NextResponse.redirect(new URL("/triathlon", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/triathlon", "/triathlon/winners", "/triathlon/event-finished"]
};