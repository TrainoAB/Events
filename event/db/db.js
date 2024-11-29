import { createClient } from '@supabase/supabase-js';

const databaseClient = createClient(databaseURL(), databaseKey());

function databaseURL() {
    return process.env?.DATABASE_URL;
}

function databaseKey() {
    return process.env?.DATABASE_KEY;
}

export async function getAllEvents() {
    return await databaseClient.from('events').select();
}

export async function getEventById(id) {
    return await databaseClient.from('events').select().eq('id', id).single();
}

export async function deleteEvent(id) {
    return await databaseClient.from('events').delete().eq('id', id);
}

export async function insertEvent(event) {
    return await databaseClient
        .from('events')
        .insert({ competition: event.competition, url: event.url, image: event.image, description: event.description, date: event.date });
}

export async function updateEventById(event, id) {
    return await databaseClient
        .from('events')
        .update(event)
        .eq('id', id);
}