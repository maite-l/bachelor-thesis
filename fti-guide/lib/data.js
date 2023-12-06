import fs from 'fs';
import path from 'path';

export function getAllSlugs() {
    const dataDirectory = path.join(process.cwd(), 'data/locations');
    const filenames = fs.readdirSync(dataDirectory);
    const paths = filenames.map((filename) => {
        const slug = filename.replace(/\.json$/, '');
        return { slug };
    });
    return paths;
}

export function getConversationData(slug) {
    const dataDirectory = path.join(process.cwd(), 'data');
    const fullPath = path.join(dataDirectory, `${slug}.json`);
    try {
        // Read the contents of the JSON file
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the JSON data
        const jsonData = JSON.parse(fileContents);

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
    const dataDirectory = path.join(process.cwd(), 'data');
    const fullPath = path.join(dataDirectory, `badges.json`);
    try {
        // Read the contents of the JSON file
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the JSON data
        const jsonData = JSON.parse(fileContents);

        return jsonData;
    } catch (error) {
        // Handle errors (e.g., file not found, JSON parsing error)
        console.error(`Error reading JSON file ${fullPath}:`, error);
        return null; // Or throw an error if you want to handle it differently
    }
}