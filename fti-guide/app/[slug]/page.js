import { getAllSlugs, getConversationData, getEventsData } from "../../lib/data";

// generate all possible paths for this route
export async function generateStaticParams() {
    const paths = getAllSlugs();
    return paths;
}
export const dynamicParams = false; // prevent other routes from being generated

const dateToTimeString = (date) => {
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
}

const createMessage = (events) => {
    let message = '';
    const now = new Date();

    // get all events that are currently happening
    const currentEvents = events.filter(event => {
        const startTime = new Date(event.startTime);
        const endTime = new Date(event.endTime);
        return now >= startTime && now <= endTime;
    });

    // get all events that are happening later today
    const todayEvents = events.filter(event => {
        const startTime = new Date(event.startTime);
        return startTime.getDate() === now.getDate() && startTime >= now;
    });

    // add text to message based on the amount of current events
    if (currentEvents.length > 0) {
        if (currentEvents.length === 1) {
            const endTime = new Date(currentEvents[0].endTime);
            const endTimeString = dateToTimeString(endTime);
            message += `Momenteel is ${currentEvents[0].name} bezig in ${currentEvents[0].location}. Het duurt nog tot ${endTimeString}u. `;
        }
        else {
            message = `Momenteel zijn hier ${currentEvents.length} events bezig: `;
            currentEvents.forEach(event => {
                const endTime = new Date(event.endTime);
                const endTimeString = dateToTimeString(endTime);

                if (currentEvents.indexOf(event) === currentEvents.length - 1) {
                    message += `en ${event.name} tot ${endTimeString}u in ${event.location}. `;
                }
                else {
                    message += `${event.name} tot ${endTimeString}u in ${event.location}, `;
                }
            });
        }
    }
    // add text to message based on the amount of events later today
    if (todayEvents.length > 0) {
        if (todayEvents.length === 1) {
            const startTime = new Date(todayEvents[0].startTime);
            const startTimeString = dateToTimeString(startTime);
            const endTime = new Date(todayEvents[0].endTime);
            const endTimeString = dateToTimeString(endTime);
            message += `Later vandaag vindt ${todayEvents[0].name} zich plaats in ${todayEvents[0].location} van ${startTimeString}u. tot ${endTimeString}u.`;
        }
        else {
            message += `Later vandaag zijn er ${todayEvents.length} events: `;
            todayEvents.forEach(event => {
                const startTime = new Date(event.startTime);
                const startTimeString = dateToTimeString(startTime);

                if (todayEvents.indexOf(event) === todayEvents.length - 1) {
                    message += `en ${event.name} om ${startTimeString}u in ${event.location}.`;
                }
                else {
                    message += `${event.name} om ${startTimeString}u in ${event.location}, `;
                }
            });
        }
    }
    return message;
}

const adjustData = (message, originalData, events) => {
    // define question ids to correctly place the new question
    const previousQuestionId = 2; // id of the question the new one will be placed after
    const currentQuestionId = events.length + 1; // id of the new question

    // create new question object and add it to the data
    const newConversationObject = {
        id: currentQuestionId,
        question: message,
        options: [
            {
                id: 1,
                text: "text",
                next_question: previousQuestionId + 1
            }
        ]
    };
    originalData.push(newConversationObject);

    // adjust the next_question value of the options of the previous question
    // we want to insert the new question between two others: the first question needs to point to the new question, 
    // the new question needs to point to the second question
    const previousQuestion = originalData.find(item => item.id === previousQuestionId);
    if (previousQuestion) {
        previousQuestion.options.forEach(option => {
            option.next_question = currentQuestionId;
        });
    }
    return originalData;
}

export default async function Home({ params }) {
    const { slug } = params;

    // get location specific conversation data
    let conversationData = getConversationData(slug);
    // get location specific events
    const events = getEventsData(slug);

    // if there are events, create a message out of relevant events and adjust the conversation data
    if (events) {
        const message = createMessage(events);
        if (message !== '') {
            conversationData = adjustData(message, conversationData, events);
        }
    }

    return (
        <main>
            <p>Dynamic route</p>
            <p>{slug}</p>
            <p>{JSON.stringify(conversationData)}</p>
        </main>
    )
}
