import { createClient } from '@supabase/supabase-js';

const databaseClient = createClient(databaseURL(), databaseKey());

function databaseURL() {
    return process.env.NEXT_PUBLIC_DATABASE_URL ? process.env.NEXT_PUBLIC_DATABASE_URL : "";
}

function databaseKey() {
    return process.env.NEXT_PUBLIC_DATABASE_KEY ? process.env.NEXT_PUBLIC_DATABASE_KEY : "";
}

export function getDatabaseClient() {
    return databaseClient;
}