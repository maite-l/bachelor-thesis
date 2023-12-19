import fs from 'fs';
import path from 'path';

export function getAllLocationSlugs() {
    const dataDirectory = path.join(process.cwd(), 'data/chatbots');
    const filenames = fs.readdirSync(dataDirectory);

    // filter out navigation.json
    const filteredFilenames = filenames.filter((filename) => filename !== 'navigation.json');
    const slugs = filteredFilenames.map((filename) => {
        const slug = filename.replace(/\.json$/, '');
        return { slug };
    });
    return slugs;
}

export function getLocationData(slug) {
    const dataDirectory = path.join(process.cwd(), 'data');
    const fullPath = path.join(dataDirectory, `chatbots/${slug}.json`);
    try {
        // Read the contents of the JSON file
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the JSON data
        const jsonData = JSON.parse(fileContents);

        if (jsonData.badge) {
            jsonData.badge.slug = slug;
        }

        return jsonData;
    } catch (error) {
        // Handle errors (e.g., file not found, JSON parsing error)
        console.error(`Error reading JSON file ${fullPath}:`, error);
        return null; // Or throw an error if you want to handle it differently
    }
}

export function getEventsData(slug) {
    const dataDirectory = path.join(process.cwd(), 'data');
    const fullPath = path.join(dataDirectory, `events.json`);
    try {
        // Read the contents of the JSON file
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the JSON data
        const jsonData = JSON.parse(fileContents);

        // Filter events based on location
        const eventsData = jsonData
            .filter((event) => event.location === slug)
            .map((event) => event.events); // Extract only the "events" property

        return eventsData.length > 0 ? eventsData[0] : null;
    } catch (error) {
        // Handle errors (e.g., file not found, JSON parsing error)
        console.error(`Error reading JSON file ${fullPath}:`, error);
        return null; // Or throw an error if you want to handle it differently
    }
}

export function getAllBadges() {

    const slugs = getAllLocationSlugs();
    const badges = slugs.map((slug) => {
        const dataDirectory = path.join(process.cwd(), 'data/chatbots');
        const fullPath = path.join(dataDirectory, `${slug.slug}.json`);
        try {
            // Read the contents of the JSON file
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Parse the JSON data
            const jsonData = JSON.parse(fileContents);

            if (jsonData.badge) {
                jsonData.badge.slug = slug.slug;
            }

            return jsonData.badge;
        } catch (error) {
            // Handle errors (e.g., file not found, JSON parsing error)
            console.error(`Error reading JSON file ${fullPath}:`, error);
            return null; // Or throw an error if you want to handle it differently
        }
    }
    );
    return badges;
}