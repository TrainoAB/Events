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

export async function getEventByUrl(url) {
    return await databaseClient.from('events').select().eq('url', url).single();
}

export async function deleteEvent(id) {
    return await databaseClient.from('events').delete().eq('id', id);
}

export async function insertEvent(event) {
    return await databaseClient
        .from('events')
        .insert({ competition: event.competition, url: event.url, image: event.image, description: event.description, 
            date: event.date, time: event.time, max: event.max });
}

export async function updateEventById(event, id) {
    return await databaseClient
        .from('events')
        .update(event)
        .eq('id', id);
}

export async function getAllDiscountsById(eventId) {
    return await databaseClient.from('discounts').select().eq('eventId', eventId);
}

export async function getAllDiscountsByUrl(eventUrl) {
    const { data } = await databaseClient.from('events').select().eq('url', eventUrl).single();
    return await databaseClient.from('discounts').select().eq('eventId', data.id);
}

export async function getDiscountById(id) {
    return await databaseClient.from('discounts').select().eq('id', id).single();
}

export async function deleteDiscount(id) {
    return await databaseClient.from('discounts').delete().eq('id', id);
}

export async function insertDiscount(discount) {
    return await databaseClient
        .from('discounts')
        .insert({ title: discount.title, url: discount.url, eventId: discount.eventId, description: discount.description, 
            from: discount.from, to: discount.to, discount: discount.discount });
}

export async function updateDiscountById(discount, id) {
    return await databaseClient
        .from('discounts')
        .update(discount)
        .eq('id', id);
}

export async function getAllParticipants() {
    return await databaseClient.from('participants').select();
}

export async function insertParticipant(participant) {
    return await databaseClient
        .from('participants')
        .insert({ forename: participant.forename, surname: participant.surname, email: participant.email, gender: participant.gender, 
            phone: participant.phone, city: participant.city, age: participant.age, competition: participant.competition });
}