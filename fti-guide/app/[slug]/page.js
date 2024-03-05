import { getAllLocationSlugs, getLocationData, getEventsData } from "../../lib/data";
import Chatbot from "../(components)/chatbot/Chatbot";
import React from "react";

// generate all possible paths for this route
export async function generateStaticParams() {
    const paths = getAllLocationSlugs();
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
        const startDate = (startTime.getFullYear()) + "/" + (startTime.getMonth() + 1) + "/" + (startTime.getDate());
        const nowDate = (now.getFullYear()) + "/" + (now.getMonth() + 1) + "/" + (now.getDate());
        return startDate === nowDate && startTime >= now;
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
        eventMessage.answer = 'Vandaag zijn er geen evenementen.';
    }
    return eventMessage;
}

const adjustData = (eventMessage, originalData, stepData) => {

    if (eventMessage.message !== '') {
        // define step ids to correctly place the new step
        const previousStepId = stepData.stepBeforeId; // id of the step the new one will be placed after
        const previousStep = originalData.find(item => item.id === previousStepId); // the step the new one will be placed after
        let nextStepId;  // id of the step the new one will be placed before
        if (previousStep.options) {
            nextStepId = previousStep.options[0].trigger;
        }
        else {
            nextStepId = previousStep.trigger;
        }

        const newStepId1 = 'eventStep1'; // id of the new step
        const newStepId2 = 'eventStep2'; // id of the new step
        const newOptionsStepId = 'eventOptions'; // id of the new options step

        // create new message step and add it to the data
        const newMessageStep1 = {
            id: newStepId1,
            message: eventMessage.message,
            trigger: newStepId2
        };
        originalData.push(newMessageStep1);

        const newMessageStep2 = {
            id: newStepId2,
            message: 'Misschien is dat iets voor jou?',
            trigger: newOptionsStepId
        };
        originalData.push(newMessageStep2);

        // create new options step and add it to the data
        const newOptionsStep = {
            id: newOptionsStepId,
            options: [
                {
                    value: '1',
                    label: stepData.optionLabels[0],
                    trigger: nextStepId
                },
                {
                    value: '2',
                    label: stepData.optionLabels[1],
                    trigger: nextStepId
                }
            ]
        };
        originalData.push(newOptionsStep);

        // adjust the trigger value of the previous step to trigger new step
        if (previousStep.options) {
            previousStep.options.forEach(option => {
                option.trigger = newStepId1;
            });
        } else if (previousStep.trigger) {
            previousStep.trigger = newStepId1;
        }
    }

    const eventAnswerStep = originalData.find(item => item.id === stepData.eventAnswerId);
    eventAnswerStep.message = eventMessage.answer;

    return originalData;
}

export default async function LocationConversation({ params }) {
    const { slug } = params;

    // get location specific conversation data
    const data = getLocationData(slug);
    let conversationData = data.conversation;
    // get location specific events
    const events = getEventsData(slug);

    // if there are events, create a message out of relevant events and adjust the conversation data
    if (events) {
        const stepData = data.optionalEventStep;
        const eventMessage = createMessage(events);
        conversationData = adjustData(eventMessage, conversationData, stepData);
    }

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
            <Chatbot steps={conversationData} slug={slug} chatheaderInfo={chatheaderInfo} badgeName={badgeName} />
        </main>
    )
}