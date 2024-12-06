'use server';

import { updateEventById, insertEvent } from "@/db/db";

export async function createEvent(formData) {
    const event = {
        competition: formData.get('event'),
        date: formData.get('date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image'),
        time: formData.get('time'),
        finished: formData.get('finished') || false,
        max: formData.get('max-participants')
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
        date: formData.get('date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image'),
        finished: formData.get('finished') || false,
        time: formData.get('time'),
        max: formData.get('max-participants')
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