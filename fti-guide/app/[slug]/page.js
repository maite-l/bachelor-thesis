import { getAllLocationSlugs, getLocationData, getEventsData } from "../../lib/data";
import Chatbot from "../(components)/chatbot/Chatbot";
import React from "react";

// generate all possible paths for this route
export async function generateStaticParams() {
    const paths = getAllLocationSlugs();
    return paths;
}
export const dynamicParams = false; // prevent other routes from being generated

export default async function LocationConversation({ params }) {
    const { slug } = params;

    // get location specific conversation data
    const data = getLocationData(slug);
    let conversationData = data.conversation;
    // get location specific events
    const events = getEventsData(slug);
    const badgeName = data.badgeName;

    // get chatheader info
    let chatheaderInfo = {
        characterName: data.characterName,
    }
    if (data.eventName && data.location) {
        chatheaderInfo.eventName = data.eventName;
        chatheaderInfo.location = data.location;
    }
    if (data.quote) {
        chatheaderInfo.quote = data.quote;
    }

    return (
        <main>
            <Chatbot data={data} steps={conversationData} events={events} slug={slug} chatheaderInfo={chatheaderInfo} badgeName={badgeName} />
        </main>
    )
}