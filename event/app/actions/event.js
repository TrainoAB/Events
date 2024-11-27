'use server';

/**
 * This function should validate the form data before creating the event object that is stored in the test data.
 * This function is not used at the moment due to using event Route Handler instead 
 * lets test data changes live while navigating the application. 
 */
export async function createEvent(formData) {
    const event = {
        id: Math.floor(Math.random() * 100) + 3,                  // Generate ID in some other way
        competition: formData.get('event'),
        date: formData.get('date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image')
    };

    // update test data
}