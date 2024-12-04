"use server";

import { insertSponsorApplication, insertVolunteerApplication } from "@/db/db";

export async function createSponsorApplication(id, formData) {
    const application = {
        email: formData.get('email'),
        phone: formData.get('phonenumber'),
        eventId: id
    };

    // TODO: validate data

    const { error } = await insertSponsorApplication(application);
    if (error) {
        console.log(error);
    } else {
        console.log('Created sponsor application ' + JSON.stringify(application));
    }
}

export async function createVolunteerApplication(id, formData) {
    const application = {
        email: formData.get('volunteer-email'),
        eventId: id
    };

    // TODO: validate data
    
    const { error } = await insertVolunteerApplication(application);
    if (error) {
        console.log(error);
    } else {
        console.log('Created volunteer application ' + JSON.stringify(application));
    }
}