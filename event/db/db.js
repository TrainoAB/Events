import { createClient } from '@supabase/supabase-js';

const databaseClient = createClient(databaseURL(), databaseKey());

function databaseURL() {
    return process.env?.DATABASE_URL;
}

function databaseKey() {
    return process.env?.DATABASE_KEY;
}

export function getDatabaseClient() {
    return databaseClient;
}