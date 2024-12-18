"use server";

import { addSponsor, updateSponsorById } from "@/db/db";

export async function createSponsor(event_id, _prevState, formData) {
    // Create a sponsor object, with collected data
    const sponsor = {
        name: formData.get("sponsor"),
        image: formData.get("image"),
        url: formData.get("link"),
        description: formData.get("description"),
        prioritized: formData.get("prioritized") || false,
        event_id,
    };

    // Try to add the sponsor to the db
    try {
        const { error } = await addSponsor(sponsor);
        if (error) {
            throw error;
        }
        console.log(`Added sponsor: ${JSON.stringify(sponsor)}`);
        return { message: `${sponsor.name} har lagts till`, success: true };
    } catch (error) {
        console.error(error);
        return { message: "Sponsoren kunde inte läggas till", success: false };
    }
}

export async function updateSponsor(sponsorId, _prevState, formData) {
    // Create a sponsor object, with collected data
    const sponsor = {
        name: formData.get("sponsor"),
        image: formData.get("image"),
        url: formData.get("link"),
        description: formData.get("description"),
        prioritized: formData.get("prioritized") || false
    };

    // Try to update the sponsor in the db
    try {
        const { error } = await updateSponsorById(sponsor, sponsorId);
        if (error) {
            throw error;
        }
        console.log(`Updated sponsor: ${JSON.stringify(sponsor)}`);
        return { message: `${sponsor.name} har uppdaterats`, success: true };
    } catch (error) {
        console.error(error);
        return { message: `Misslyckades uppdatera sponsor`, success: false };
    }
}
