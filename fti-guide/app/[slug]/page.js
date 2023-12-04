import { getAllSlugs, getConversationData, getEventsData } from "../../lib/data";
import Chatbot from "../(components)/Chatbot";
import React from "react";
import styles from './page.module.css';

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

    let eventMessage = { message: message, answer: message };

    if (message === '') {
        eventMessage.answer = 'Vandaag is zijn er geen events meer.';
    }
    return eventMessage;
}

const adjustData = (eventMessage, originalData, stepData) => {

    if (eventMessage.message !== '') {
        // define step ids to correctly place the new step
        const previousStepId = stepData.stepBeforeId; // id of the step the new one will be placed after
        const newStepId = 'eventStep1'; // id of the new step
        const newOptionsStepId = 'eventStep2'; // id of the new options step

        // create new message step and add it to the data
        const newMessageStep = {
            id: newStepId,
            message: eventMessage.message,
            trigger: newOptionsStepId
        };
        originalData.push(newMessageStep);

        // create new options step and add it to the data
        const newOptionsStep = {
            id: newOptionsStepId,
            options: [
                {
                    value: '1',
                    label: stepData.optionLabels[0],
                    trigger: previousStepId + 1
                },
                {
                    value: '2',
                    label: stepData.optionLabels[1],
                    trigger: previousStepId + 1
                }
            ]
        };
        originalData.push(newOptionsStep);

        // adjust the trigger value of the previous step to trigger new step
        const previousStep = originalData.find(item => item.id === previousStepId);
        if (previousStep.options) {
            previousStep.options.forEach(option => {
                option.trigger = newStepId;
            });
        } else if (previousStep.trigger) {
            previousStep.trigger = newStepId;
        }
    }

    const eventAnswerStep = originalData.find(item => item.id === stepData.eventAnswerId);
    console.log(eventAnswerStep);
    console.log(eventMessage.answer);
    eventAnswerStep.message = eventMessage.answer;

    return originalData;
}

export default async function LocationConversation({ params }) {
    const { slug } = params;

    // get location specific conversation data
    const data = getConversationData(slug);
    let conversationData = data.conversation;
    // get location specific events
    const events = getEventsData(slug);

    // if there are events, create a message out of relevant events and adjust the conversation data
    if (events) {
        const stepData = data.optionalEventStep;
        const eventMessage = createMessage(events);
        conversationData = adjustData(eventMessage, conversationData, stepData);
    }

    return (
        <main>
            <div className={styles.chatbotHeader}>
                <div></div>
                <div className={styles.chatbotHeaderInfo}>
                    <h1 className={styles.chatbotName}>{data.character.name}</h1>
                    <p className={styles.chatbotQuote}>{data.character.quote}</p>
                </div>
            </div>
            <Chatbot steps={conversationData} slug={slug} />
        </main>
    )
}