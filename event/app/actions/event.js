"use server";

import { updateEventById, insertEvent } from "@/db/db";

export async function createEvent(_prevState, formData) {
    const event = {
        competition: formData.get("event"),
        start_date: formData.get("start_date"),
        url: formData.get("url") || "#",
        description: formData.get("description"),
        image: formData.get("image"),
        start_time: formData.get("start_time"),
        hide: formData.get("hide") || false,
        finished: formData.get("finished") || false,
        max_participants: formData.get("max_participants"),
        dev_mode: formData.get("dev_mode") || false,
    };

    // TODO: validate data

    const { error } = await insertEvent(event);
    if (error) {
        console.log(error);
        return { message: "Eventet kunde inte skapas.", success: false };
    } else {
        console.log("Created event " + JSON.stringify(event, null, 2));
        return { message: "Eventet skapades.", success: true };
    }
}

export async function updateEvent(id, _prevState, formData) {
    const event = {
        competition: formData.get("event"),
        start_date: formData.get("start_date"),
        url: formData.get("url") || "#",
        description: formData.get("description"),
        image: formData.get("image"),
        hide: formData.get("hide") || false,
        finished: formData.get("finished") || false,
        start_time: formData.get("start_time"),
        max_participants: formData.get("max_participants"),
        dev_mode: formData.get("dev_mode") || false,
    };

    // TODO: validate data

    const { error } = await updateEventById(event, id);
    if (error) {
        console.log(error);
        return { message: "Eventet kunde inte uppdateras.", success: false };
    } else {
        console.log("Updated event " + JSON.stringify(event, null, 2));
        return { message: "Eventet har uppdaterats.", success: true };
    }
}
