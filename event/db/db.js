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

const EVENT_COLUMNS = 'id, competition, url, image, description, start_date, start_time, max_participants, finished, hide';

export async function getAllEvents() {
    return await databaseClient.from(EVENTS_TABLE).select(EVENT_COLUMNS).order("start_date");
}

export async function getAllUnhiddenEvents() {
    return await databaseClient.from(EVENTS_TABLE).select(EVENT_COLUMNS).eq('hide', false).order("start_date");
}

export async function getEventById(id) {
    return await databaseClient.from(EVENTS_TABLE).select(EVENT_COLUMNS).eq('id', id).single();
}

export async function getEventByUrl(url) {
    return await databaseClient.from(EVENTS_TABLE).select(EVENT_COLUMNS).eq('url', url).single();
}

export async function deleteEvent(id) {
    return await databaseClient.from(EVENTS_TABLE).delete().eq('id', id);
}

export async function insertEvent(event) {
    return await databaseClient
        .from(EVENTS_TABLE)
        .insert({ competition: event.competition, url: event.url, image: event.image, description: event.description, 
            start_date: event.start_date, start_time: event.start_time, max_participants: event.max_participants, finished: event.finished });
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

const DISCOUNT_COLUMNS = 'id, title, url, event_id, description, valid_from, valid_to, discount, sponsor_id';

export async function getAllDiscountsById(eventId) {
    return await databaseClient.from(DISCOUNTS_TABLE).select(DISCOUNT_COLUMNS).eq('event_id', eventId).order("valid_from");
}

export async function getAllDiscountsByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(DISCOUNTS_TABLE).select(DISCOUNT_COLUMNS).eq('event_id', data.id);
}

export async function getAllDiscountsBySponsorId(sponsorId) {
    return await databaseClient.from(DISCOUNTS_TABLE).select(DISCOUNT_COLUMNS).eq('sponsor_id', sponsorId);
}

export async function getDiscountById(id) {
    return await databaseClient.from(DISCOUNTS_TABLE).select(DISCOUNT_COLUMNS).eq('id', id).single();
}

export async function deleteDiscount(id) {
    return await databaseClient.from(DISCOUNTS_TABLE).delete().eq('id', id);
}

export async function insertDiscount(discount) {
    return await databaseClient
        .from(DISCOUNTS_TABLE)
        .insert({ title: discount.title, url: discount.url, event_id: discount.event_id, description: discount.description, 
            valid_from: discount.valid_from, valid_to: discount.valid_to, discount: discount.discount, sponsor_id: discount.sponsor_id });
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

const PARTICIPANT_COLUMNS = 'id, forename, surname, email, gender, phone, age, city, competition';

export async function getAllParticipants() {
    return await databaseClient.from(PARTICIPANTS_TABLE).select();
}

export async function insertParticipant(participant) {
    return await databaseClient
        .from(PARTICIPANTS_TABLE)
        .insert({ forename: participant.forename, surname: participant.surname, email: participant.email, gender: participant.gender, 
            phone: participant.phone, city: participant.city, age: participant.age, competition: participant.competition });
}

export async function getAllParticipantsById(eventId) {
    return await databaseClient.from(PARTICIPANTS_TABLE).select(PARTICIPANT_COLUMNS).eq("event_id", eventId);
}

export async function getAllParticipantsByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(PARTICIPANTS_TABLE).select(PARTICIPANT_COLUMNS).eq('event_id', data.id);
}






/************
 * SPONSORS *
 ************/

const SPONSOR_COLUMNS = 'id, name, image, url, description, event_id, prioritized';

// Get all sponsors for an event
export async function getAllSponsorsByEventId(eventId) {
    return await databaseClient.from(SPONSORS_TABLE).select(SPONSOR_COLUMNS + `, discounts(${DISCOUNT_COLUMNS})`).eq("event_id", eventId).order("id");
}

export async function getAllPrioritizedSponsorsByEventId(eventId) {
    return await databaseClient.from(SPONSORS_TABLE).select(SPONSOR_COLUMNS).eq("event_id", eventId).eq('prioritized', true).order("id");
}

// Add a sponsor to a specific event
export async function addSponsor(sponsor) {
    return await databaseClient.from(SPONSORS_TABLE).insert({
        name: sponsor.name,
        image: sponsor.image,
        url: sponsor.url,
        description: sponsor.description,
        prioritized: sponsor.prioritized,
        event_id: sponsor.event_id,
    });
}

// Delete a sponsor
export async function deleteSponsor(id) {
    return await databaseClient.from(SPONSORS_TABLE).delete().eq("id", id);
}

// Get a sponsor by id
export async function getSponsorById(id) {
    return await databaseClient.from(SPONSORS_TABLE).select(SPONSOR_COLUMNS).eq("id", id).single();
}

// Update a sponsor
export async function updateSponsorById(updatedSponsor, id) {
    return await databaseClient.from(SPONSORS_TABLE).update(updatedSponsor).eq("id", id);
}

export async function getAllSponsorsByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(SPONSORS_TABLE).select(SPONSOR_COLUMNS + `, discounts(${DISCOUNT_COLUMNS})`).eq('event_id', data.id);
}





/**********
 * RULES *
 **********/

const RULE_COLUMNS = 'id, rule, event_id, topic, type';

export async function getAllRules() {
    return await databaseClient.from(RULES_TABLE).select(RULE_COLUMNS).order("id").order('topic');
}

export async function getRuleById(id) {
    return await databaseClient.from(RULES_TABLE).select(RULE_COLUMNS).eq('id', id).single();
}

export async function deleteRule(id) {
    return await databaseClient.from(RULES_TABLE).delete().eq('id', id);
}

export async function getAllRulesById(eventId) {
    return await databaseClient.from(RULES_TABLE).select(RULE_COLUMNS).eq('event_id', eventId).order("topic");
}

export async function getAllRulesByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(RULES_TABLE).select(RULE_COLUMNS).eq('event_id', data.id).order('topic');
}

export async function insertRule(rule) {
    return await databaseClient
        .from(RULES_TABLE)
        .insert({ rule: rule.rule, event_id: rule.event_id, topic: rule.topic, type: rule.type });
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

const FAQ_COLUMNS = 'id, question, answer, event_id';

export async function getAllFaqs() {
    return await databaseClient.from(FAQ_TABLE).select(FAQ_COLUMNS).order("id");
}

export async function getFaqById(id) {
    return await databaseClient.from(FAQ_TABLE).select(FAQ_COLUMNS).eq('id', id).single();
}

export async function deleteFaq(id) {
    return await databaseClient.from(FAQ_TABLE).delete().eq('id', id);
}

export async function getAllFaqsById(eventId) {
    return await databaseClient.from(FAQ_TABLE).select(FAQ_COLUMNS).eq('event_id', eventId).order("id");
}

export async function getAllFaqsByUrl(eventUrl) {
    const { data } = await databaseClient.from(EVENTS_TABLE).select().eq('url', eventUrl).single();
    return await databaseClient.from(FAQ_TABLE).select(FAQ_COLUMNS).eq('event_id', data.id);
}

export async function insertFaq(faq) {
    return await databaseClient
        .from(FAQ_TABLE)
        .insert({ question: faq.question, answer: faq.answer, event_id: faq.event_id });
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

const APPLICATION_COLUMNS = 'id, email, phone, event_id';

export async function insertSponsorApplication(application) {
    return await databaseClient
        .from(SPONSOR_APPLICATION_TABLE)
        .insert({ email: application.email, phone: application.phone, event_id: application.event_id });
}

export async function insertVolunteerApplication(application) {
    return await databaseClient
        .from(VOLUNTEER_APPLICATION_TABLE)
        .insert({ email: application.email, phone: application.phone, event_id: application.event_id });
}

// Get all interested sponsors for an event
export async function getInterestedSponsorsByEventId(eventId) {
    return await databaseClient.from(SPONSOR_APPLICATION_TABLE).select(APPLICATION_COLUMNS).eq("event_id", eventId);
}

// Get all interested volunteers for an event
export async function getInterestedVolunteersByEventId(eventId) {
    return await databaseClient.from(VOLUNTEER_APPLICATION_TABLE).select(APPLICATION_COLUMNS).eq("event_id", eventId);
}






/***********
 * WINNERS *
 ***********/

const WINNER_COLUMNS = 'id, result, surname, forename, city, competition, event_id';

export async function getAllWinnersById(eventId) {
    return await databaseClient.from(WINNERS_TABLE).select(WINNER_COLUMNS).eq('event_id', eventId).order('result');
}

export async function getWinnerById(id) {
    return await databaseClient.from(WINNERS_TABLE).select(WINNER_COLUMNS).eq('id', id).single();
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
    return await databaseClient.from(WINNERS_TABLE).select(WINNER_COLUMNS).eq('event_id', data.id);
}