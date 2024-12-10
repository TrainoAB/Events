'use server';

import { updateEventById, insertEvent } from "@/db/db";

export async function createEvent(formData) {
    const event = {
        competition: formData.get('event'),
        start_date: formData.get('start_date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image'),
        start_time: formData.get('start_time'),
        finished: formData.get('finished') || false,
        max_participants: formData.get('max_participants')
    };

    // TODO: validate data

    const { error } = await insertEvent(event);
    if (error) {
        console.log(error);
    } else {
        console.log('Created event ' + JSON.stringify(event));
    }
}

export async function updateEvent(id, prevState, formData) {
    const event = {
        competition: formData.get('event'),
        start_date: formData.get('start_date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image'),
        finished: formData.get('finished') || false,
        start_time: formData.get('start_time'),
        max_participants: formData.get('max_participants')
    };

    // TODO: validate data
    
    const { error } = await updateEventById(event, id);
    if (error) {
        console.log(error);
        return { message: "Eventet kunde inte uppdateras.", success: false };
    } else {
        console.log('Updated event ' + JSON.stringify(event));
        return { message: "Eventet har uppdaterats.", success: true };
    }
}