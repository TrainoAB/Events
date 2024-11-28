'use server';

import { getDatabaseClient } from "@/db/db";

export async function createEvent(formData) {
    const event = {
        competition: formData.get('event'),
        date: formData.get('date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image')
    };

    // validate data

    const { error } = await getDatabaseClient()
        .from('events')
        .insert({ competition: event.competition, url: event.url, image: event.image, description: event.description, date: event.date });
    if (error) {
        console.log(error);
    } else {
        console.log('Created event ' + JSON.stringify(event));
    }
}

export async function updateEvent(id, formData) {
    const event = {
        competition: formData.get('event'),
        date: formData.get('date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image')
    };

    // validate data
    
    const { error } = await getDatabaseClient()
        .from('events')
        .update(event)
        .eq('id', id);
    if (error) {
        console.log(error);
    } else {
        console.log('Updated event ' + JSON.stringify(event));
    }
}