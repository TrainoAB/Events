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
            date: event.date, time: event.time, max: event.max, finished: event.finished });
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

export async function getAllRules() {
    return await databaseClient.from('rules').select();
}

export async function getRuleById(id) {
    return await databaseClient.from('rules').select().eq('id', id).single();
}

export async function deleteRule(id) {
    return await databaseClient.from('rules').delete().eq('id', id);
}

export async function getAllRulesById(eventId) {
    return await databaseClient.from('rules').select().eq('eventId', eventId);
}

export async function getAllRulesByUrl(eventUrl) {
    const { data } = await databaseClient.from('events').select().eq('url', eventUrl).single();
    return await databaseClient.from('rules').select().eq('eventId', data.id);
}

export async function insertRule(rule) {
    return await databaseClient
        .from('rules')
        .insert({ rule: rule.rule, eventId: rule.eventId });
}

export async function updateRuleById(rule, id) {
    return await databaseClient
        .from('rules')
        .update(rule)
        .eq('id', id);
}

export async function getAllFaqs() {
    return await databaseClient.from('faq').select();
}

export async function getFaqById(id) {
    return await databaseClient.from('faq').select().eq('id', id).single();
}

export async function deleteFaq(id) {
    return await databaseClient.from('faq').delete().eq('id', id);
}

export async function getAllFaqsById(eventId) {
    return await databaseClient.from('faq').select().eq('eventId', eventId);
}

export async function getAllFaqsByUrl(eventUrl) {
    const { data } = await databaseClient.from('events').select().eq('url', eventUrl).single();
    return await databaseClient.from('faq').select().eq('eventId', data.id);
}

export async function insertFaq(faq) {
    return await databaseClient
        .from('faq')
        .insert({ question: faq.question, answer: faq.answer, eventId: faq.eventId });
}

export async function updateFaqById(faq, id) {
    return await databaseClient
        .from('faq')
        .update(faq)
        .eq('id', id);
}

export async function insertSponsorApplication(application) {
    return await databaseClient
        .from('sponsor_application')
        .insert({ email: application.email, phone: application.phone, eventId: application.eventId });
}

export async function insertVolunteerApplication(application) {
    return await databaseClient
    .from('volunteer_application')
    .insert({ email: application.email, eventId: application.eventId });
}