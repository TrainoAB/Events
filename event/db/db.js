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
            expiration: discount.expiration, discount: discount.discount });
}

export async function updateDiscountById(discount, id) {
    return await databaseClient
        .from('discounts')
        .update(discount)
        .eq('id', id);
}

// Get all sponsors for an event
export async function getAllSponsorsByEventId(eventId) {
    return await databaseClient.from("sponsors").select().eq("eventId", eventId).order("id");
}

// Add a sponsor to a specific event
export async function addSponsor(sponsor) {
    return await databaseClient.from("sponsors").insert({
        name: sponsor.name,
        image: sponsor.image,
        url: sponsor.url,
        description: sponsor.description,
        eventId: sponsor.eventId,
    });
}

// Delete a sponsor
export async function deleteSponsor(id) {
    return await databaseClient.from("sponsors").delete().eq("id", id);
}

// Get a sponsor by id
export async function getSponsorById(id) {
    return await databaseClient.from("sponsors").select().eq("id", id).single();
}

// Update a sponsor
export async function updateSponsorById(updatedSponsor, id) {
    return await databaseClient.from("sponsors").update(updatedSponsor).eq("id", id);
}