"use server";

import { insertSponsorApplication, insertVolunteerApplication } from "@/db/db";

export async function createSponsorApplication(id, prevState, formData) {
    if (formData.get('webpage')) {
        return { message: `En icke giltig ansökan ${formData.get('webpage')}`, success: false };
    }
    
    const application = {
        email: formData.get('email'),
        phone: formData.get('phonenumber'),
        eventId: id
    };

    // TODO: validate data

    const { error } = await insertSponsorApplication(application);
    if (error) {
        console.log(error);
        if (error.code == '23505') {
            return { message: `Ansökan för ${application.email} är redan registrerad`, success: false };
        }
        return { message: "Du ansökan kunde inte registreras", success: false };
    } else {
        console.log('Created sponsor application ' + JSON.stringify(application));
        return { message: "Du ansökan om att få bli sponsor har blivit registrerad", success: true };
    }
}

export async function createVolunteerApplication(id, prevState, formData) {
    if (formData.get('webpage')) {
        return { message: `En icke giltig ansökan ${formData.get('webpage')}`, success: false };
    }

    const application = {
        email: formData.get('email'),
        phone: formData.get('phonenumber'),
        eventId: id
    };

    // TODO: validate data
    
    const { error } = await insertVolunteerApplication(application);
    if (error) {
        console.log(error);
        if (error.code == '23505') {
            return { message: `Ansökan för ${application.email} är redan registrerad`, success: false };
        }
        return { message: "Din ansökan kunde inte registreras", success: false };
    } else {
        console.log('Created volunteer application ' + JSON.stringify(application));
        return { message: "Du ansökan om att få bli volontär har blivit registrerad", success: true };
    }
}