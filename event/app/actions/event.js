'use server';

export async function createEvent(formData) {
    const event = {
        id: Math.floor(Math.random() * 100) + 3,                  // Generate ID in some other way
        competition: formData.get('event'),
        date: formData.get('date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image')
    };

    // validate data

    // add event to test data
    console.log('Created event ' + JSON.stringify(event));
}

export async function updateEvent(id, formData) {
    const event = {
        id: id,
        competition: formData.get('event'),
        date: formData.get('date'),
        url: formData.get('url') || "#",
        description: formData.get('description'),
        image: formData.get('image')
    };

    // validate data
    
    // update existing event in test data
    console.log('Updated event ' + JSON.stringify(event));
}