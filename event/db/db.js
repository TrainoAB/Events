import { createClient } from '@supabase/supabase-js';

const databaseClient = createClient(databaseURL(), databaseKey());

function databaseURL() {
    return process.env?.DATABASE_URL;
}

function databaseKey() {
    return process.env?.DATABASE_KEY;
}

const EVENTS_TABLE = "events";
const DISCOUNTS_TABLE = "discounts";
const PARTICIPANTS_TABLE = "participants";
const SPONSORS_TABLE = "sponsors";
const RULES_TABLE = "rules";
const FAQ_TABLE = "faq";
const SPONSOR_APPLICATION_TABLE = 'sponsor_application';
const VOLUNTEER_APPLICATION_TABLE = 'volunteer_application';
const WINNERS_TABLE = "winners";





/**********
 * EVENTS *
 **********/

export async function getAllEvents() {
    return await databaseClient.from(EVENTS_TABLE).select().order("start_date");
}

export async function getEventById(id) {
    return await databaseClient.from(EVENTS_TABLE).select().eq('id', id).single();
}

export async function getEventByUrl(url) {
    return await databaseClient.from(EVENTS_TABLE).select().eq('url', url).single();
}

export async function deleteEvent(id) {
    return await databaseClient.from(EVENTS_TABLE).delete().eq('id', id);
}

export async function insertEvent(event) {
    return await databaseClient
        .from(EVENTS_TABLE)
        .insert({ competition: event.competition, url: event.url, image: event.image, description: event.description, 
            start_date: event.start_date, start_time: event.start_time, max: event.max, finished: event.finished });
}

export async function updateEventById(event, id) {
    return await databaseClient
        .from(EVENTS_TABLE)
        .update(event)
        .eq('id', id);
}



/*************
 * DISCOUNTS *
 *************/

export async function getAllDiscountsById(eventId) {
    return await databaseClient.from(DISCOUNTS_TABLE).select().eq('eventId', eventId).order("id");
}

export async function getAllDiscountsByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(DISCOUNTS_TABLE).select().eq('eventId', data.id);
}

export async function getDiscountById(id) {
    return await databaseClient.from(DISCOUNTS_TABLE).select().eq('id', id).single();
}

export async function deleteDiscount(id) {
    return await databaseClient.from(DISCOUNTS_TABLE).delete().eq('id', id);
}

export async function insertDiscount(discount) {
    return await databaseClient
        .from(DISCOUNTS_TABLE)
        .insert({ title: discount.title, url: discount.url, eventId: discount.eventId, description: discount.description, 
            from: discount.from, to: discount.to, discount: discount.discount });
}

export async function updateDiscountById(discount, id) {
    return await databaseClient
        .from(DISCOUNTS_TABLE)
        .update(discount)
        .eq('id', id);
}




/****************
 * PARTICIPANTS *
 ****************/

export async function getAllParticipants() {
    return await databaseClient.from(PARTICIPANTS_TABLE).select();
}

export async function insertParticipant(participant) {
    return await databaseClient
        .from(PARTICIPANTS_TABLE)
        .insert({ forename: participant.forename, surname: participant.surname, email: participant.email, gender: participant.gender, 
            phone: participant.phone, city: participant.city, age: participant.age, competition: participant.competition });
}




/************
 * SPONSORS *
 ************/

// Get all sponsors for an event
export async function getAllSponsorsByEventId(eventId) {
    return await databaseClient.from(SPONSORS_TABLE).select().eq("eventId", eventId).order("id");
}

// Add a sponsor to a specific event
export async function addSponsor(sponsor) {
    return await databaseClient.from(SPONSORS_TABLE).insert({
        name: sponsor.name,
        image: sponsor.image,
        url: sponsor.url,
        description: sponsor.description,
        eventId: sponsor.eventId,
    });
}

// Delete a sponsor
export async function deleteSponsor(id) {
    return await databaseClient.from(SPONSORS_TABLE).delete().eq("id", id);
}

// Get a sponsor by id
export async function getSponsorById(id) {
    return await databaseClient.from(SPONSORS_TABLE).select().eq("id", id).single();
}

// Update a sponsor
export async function updateSponsorById(updatedSponsor, id) {
    return await databaseClient.from(SPONSORS_TABLE).update(updatedSponsor).eq("id", id);
}




/**********
 * RULES *
 **********/

export async function getAllRules() {
    return await databaseClient.from(RULES_TABLE).select().order("id");
}

export async function getRuleById(id) {
    return await databaseClient.from(RULES_TABLE).select().eq('id', id).single();
}

export async function deleteRule(id) {
    return await databaseClient.from(RULES_TABLE).delete().eq('id', id);
}

export async function getAllRulesById(eventId) {
    return await databaseClient.from(RULES_TABLE).select().eq('eventId', eventId).order("id");
}

export async function getAllRulesByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(RULES_TABLE).select().eq('eventId', data.id);
}

export async function insertRule(rule) {
    return await databaseClient
        .from(RULES_TABLE)
        .insert({ rule: rule.rule, eventId: rule.eventId });
}

export async function updateRuleById(rule, id) {
    return await databaseClient
        .from(RULES_TABLE)
        .update(rule)
        .eq('id', id);
}




/*******
 * FAQ *
 *******/

export async function getAllFaqs() {
    return await databaseClient.from(FAQ_TABLE).select().order("id");
}

export async function getFaqById(id) {
    return await databaseClient.from(FAQ_TABLE).select().eq('id', id).single();
}

export async function deleteFaq(id) {
    return await databaseClient.from(FAQ_TABLE).delete().eq('id', id);
}

export async function getAllFaqsById(eventId) {
    return await databaseClient.from(FAQ_TABLE).select().eq('eventId', eventId).order("id");
}

export async function getAllFaqsByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(FAQ_TABLE).select().eq('eventId', data.id);
}

export async function insertFaq(faq) {
    return await databaseClient
        .from(FAQ_TABLE)
        .insert({ question: faq.question, answer: faq.answer, eventId: faq.eventId });
}

export async function updateFaqById(faq, id) {
    return await databaseClient
        .from(FAQ_TABLE)
        .update(faq)
        .eq('id', id);
}





/****************
 * APPLICATIONS *
 ****************/

export async function insertSponsorApplication(application) {
    return await databaseClient
        .from(SPONSOR_APPLICATION_TABLE)
        .insert({ email: application.email, phone: application.phone, eventId: application.eventId });
}

export async function insertVolunteerApplication(application) {
    return await databaseClient
        .from(VOLUNTEER_APPLICATION_TABLE)
        .insert({ email: application.email, phone: application.phone, eventId: application.eventId });
}






/***********
 * WINNERS *
 ***********/

export async function getAllWinnersById(eventId) {
    return await databaseClient.from(WINNERS_TABLE).select().eq('event_id', eventId).order('result');
}

export async function getWinnerById(id) {
    return await databaseClient.from(WINNERS_TABLE).select().eq('id', id).single();
}

export async function deleteWinner(id) {
    return await databaseClient.from(WINNERS_TABLE).delete().eq('id', id);
}

export async function insertWinner(winner) {
    return await databaseClient
        .from(WINNERS_TABLE)
        .insert({ result: winner.result, surname: winner.surname, forename: winner.forename, 
            competition: winner.competition, city: winner.city, event_id: winner.event_id });
}

export async function updateWinnerById(winner, id) {
    return await databaseClient
        .from(WINNERS_TABLE)
        .update(winner)
        .eq('id', id);
}

export async function getAllWinnersByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(WINNERS_TABLE).select().eq('event_id', data.id);
}