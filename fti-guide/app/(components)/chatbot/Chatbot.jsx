"use client"

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import ChatbotHeader from './ChatbotHeader';
import BadgePopUp from '../badges/BadgePopUp';
import styles from './Chatbot.module.css';
import Image from 'next/image';

export default function Chatbot({ data, steps, events, slug, chatheaderInfo, badgeName }) {

    if (slug === undefined) {
        slug = "navigatie";
    }

    const [chatSteps, setChatSteps] = useState([{
        "id": "placeholder",
        "message": "Oh hey, jij weer!",
        "end": true,
        "hideInput": true
    }]);
    const [loading, setLoading] = useState(true);
    const [showBadge, setShowBadge] = useState(false);

    const collectBadge = (key, value, log) => {

        if ((slug !== "navigatie") && (log.renderedSteps[log.renderedSteps.length - 1].id === "conversation badge")) {

            if (typeof window !== 'undefined') {

                const existingArray = JSON.parse(localStorage.getItem(key)) || [];

                // check if the value is already in the array
                if (!existingArray.includes(value)) {
                    const newArray = [...existingArray, value];
                    localStorage.setItem(key, JSON.stringify(newArray));
                    setShowBadge(true);
                }

            }
        }
    };

    const dateToTimeString = (date) => {
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        return `${hours}:${minutes}`;
    }

    const getLaterTodayEvents = (events, now) => {
        const todayEvents = events.filter(event => {
            const startTime = new Date(event.startTimeUTC);
            const startDate = (startTime.getFullYear()) + "/" + (startTime.getMonth() + 1) + "/" + (startTime.getDate());
            const nowDate = (now.getFullYear()) + "/" + (now.getMonth() + 1) + "/" + (now.getDate());
            return startDate === nowDate && startTime >= now;
        });
        return todayEvents;
    }
    const getCurrentEvents = (events, now) => {
        const currentEvents = events.filter(event => {
            const startTime = new Date(event.startTimeUTC);
            const endTime = new Date(event.endTimeUTC);
            return now >= startTime && now <= endTime;
        });
        return currentEvents;
    }
    const getTodayEvents = (events, now) => {
        const todayEvents = events.filter(event => {
            const startTime = new Date(event.startTimeUTC);
            const startDate = (startTime.getFullYear()) + "/" + (startTime.getMonth() + 1) + "/" + (startTime.getDate());
            const nowDate = (now.getFullYear()) + "/" + (now.getMonth() + 1) + "/" + (now.getDate());
            return startDate === nowDate;
        });
        return todayEvents;
    }

    const createMessage = (events) => {
        let message = 'Vandaag zijn er geen evenementen.';
        const now = new Date();

        // get all events that are currently happening
        const currentEvents = getCurrentEvents(events, now);

        // get all events that are happening later today
        const todayEvents = getLaterTodayEvents(events, now);

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

        return eventMessage;
    }

    const createMessageBudascoop = (events) => {
        let message = 'Vandaag spelen er geen films.';
        const now = new Date();

        // get all events that are happening later today
        const todayEvents = getLaterTodayEvents(events, now);

        // add text to message based on the amount of events later today
        if (todayEvents.length > 0) {
            if (todayEvents.length === 1) {
                const startTime = new Date(todayEvents[0].startTime);
                const startTimeString = dateToTimeString(startTime);
                const endTime = new Date(todayEvents[0].endTime);
                const endTimeString = dateToTimeString(endTime);
                message += `Later vandaag speelt '${todayEvents[0].name}' in ${todayEvents[0].location} van ${startTimeString}u tot ${endTimeString}u.`;
            }
            else {
                message += `Later vandaag spelen er ${todayEvents.length} films: `;
                todayEvents.forEach(event => {
                    const startTime = new Date(event.startTime);
                    const startTimeString = dateToTimeString(startTime);

                    if (todayEvents.indexOf(event) === todayEvents.length - 1) {
                        message += `en '${event.name}' om ${startTimeString}u in ${event.location}.`;
                    }
                    else {
                        message += `'${event.name}' om ${startTimeString}u in ${event.location}, `;
                    }
                });
            }
        }

        let eventMessage = { message: message, answer: message };
        return eventMessage;
    }

    const createMessageBudalys = (events) => {
        let message = 'Vandaag zijn er helaas geen workshops.';
        const now = new Date();

        // get all events that are happening later today
        const todayEvents = getTodayEvents(events, now);

        // add text to message based on the amount of events later today
        if (todayEvents.length > 0) {
            const startTime = new Date(todayEvents[0].startTime);
            const startTimeString = dateToTimeString(startTime);
            const endTime = new Date(todayEvents[0].endTime);
            const endTimeString = dateToTimeString(endTime);
            message = `Vandaag zijn er workshops van ${startTimeString}u tot ${endTimeString}u. `;
        }

        let eventMessage = { message: message, answer: message };
        return eventMessage;
    }

    const createMessgeBudafabriek = (events) => {
        let message = 'Vandaag zijn er helaas geen evenementen.';
        const now = new Date();

        // get all events that are currently happening
        const currentEvents = getCurrentEvents(events, now);
        // get all events that are happening later today
        const todayEvents = getLaterTodayEvents(events, now);

        if (currentEvents.length > 0 || todayEvents.length > 0) {
            let day;
            if (currentEvents.length > 0) {
                day = currentEvents[0].day;
            } else {
                day = todayEvents[0].day;
            }
            message = `Vandaag is het ` + day + `! `;

            // add text to message based on the amount of current events
            if (currentEvents.length > 0) {
                if (currentEvents.length === 1) {
                    const endTime = new Date(currentEvents[0].endTime);
                    const endTimeString = dateToTimeString(endTime);
                    message += `Momenteel is de ${currentEvents[0].name} competitie bezig. Het duurt nog tot ${endTimeString}u. `;
                }
                else {
                    message = `Momenteel zijn hier ${currentEvents.length} competities bezig: `;
                    currentEvents.forEach(event => {
                        const endTime = new Date(event.endTime);
                        const endTimeString = dateToTimeString(endTime);

                        if (currentEvents.indexOf(event) === currentEvents.length - 1) {
                            message += `en ${event.name} tot ${endTimeString}u. `;
                        }
                        else {
                            message += `${event.name} tot ${endTimeString}u, `;
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
                    message += `Later vandaag vindt de ${todayEvents[0].name} competitie plaats van ${startTimeString}u tot ${endTimeString}u.`;
                }
                else {
                    message += `Later vandaag zijn er ${todayEvents.length} competities: `;
                    todayEvents.forEach(event => {
                        const startTime = new Date(event.startTime);
                        const startTimeString = dateToTimeString(startTime);
                        const endTime = new Date(event.endTime);
                        const endTimeString = dateToTimeString(endTime);

                        if (todayEvents.indexOf(event) === todayEvents.length - 1) {
                            message += `en ${event.name} van ${startTimeString}u tot ${endTimeString}u. `;
                        }
                        else {
                            message += `${event.name} van ${startTimeString}u tot ${endTimeString}u, `;
                        }
                    });
                }
            }
        }

        let eventMessage = { message: message, answer: message };
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

    useEffect(() => {
        if (typeof window !== 'undefined') {

            // change placeholder message out for fetched steps
            const newSteps = steps;
            setChatSteps(newSteps);

            // if there are events, create a message out of relevant events and adjust the conversation data
            if (events) {
                const stepData = data.optionalEventStep;
                let eventMessage;
                if (slug === 'budascoop') {
                    eventMessage = createMessageBudascoop(events);
                } else if (slug === 'budalys') {
                    eventMessage = createMessageBudalys(events);
                } else if (slug === 'budafabriek') {
                    eventMessage = createMessgeBudafabriek(events);
                } else {
                    eventMessage = createMessage(events);
                }
                const newSteps = adjustData(eventMessage, steps, stepData);
                setChatSteps(newSteps);
            }

            // check if the location is already in the localstorage, if so, remove the secondStart step
            const locationsArray = JSON.parse(localStorage.getItem('collected')) || [];
            if (!locationsArray.includes(slug)) {
                const newSteps = steps.filter(step => step.id !== "secondStart");
                setChatSteps(newSteps);
            } else {
                const options1 = steps.find(step => step.id === "question options");
                const index1 = steps.findIndex(step => step.id === "question options");

                options1.options = options1.options.filter(option => option.value !== "badge");
                newSteps[index1] = options1;

                const options2 = steps.find(step => step.id === "new question options");
                const index2 = steps.findIndex(step => step.id === "new question options");

                options2.options = options2.options.filter(option => option.value !== "badge");
                newSteps[index2] = options2;

                setChatSteps(newSteps);
            }

            // go through all steps to parse the html
            setChatSteps(prevSteps => prevSteps.map(step => {
                const { component, ...rest } = step;
                if (component) {
                    let content = step.component;
                    rest.component = (
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    );
                }
                return rest;
            }));

            setTimeout(() => {
                setLoading(false);
            }, 3500);
        }
    }, [slug]);



    const theme = {
        background: 'var(--white)',
        fontFamily: 'var(--font-lausanne)',
        botBubbleColor: 'var(--purple)',
        botFontColor: 'var(--white)',
        userBubbleColor: 'var(--white)',
        userFontColor: 'var(--purple)',
    };

    return (
        <>
            {showBadge && (
                <div>
                    <BadgePopUp badgeName={badgeName} slug={slug} onClose={() => setShowBadge(false)} />
                </div>
            )}
            {!loading ? (
                <ThemeProvider theme={theme}>

                    <ChatBot
                        headerComponent={<ChatbotHeader data={chatheaderInfo} slug={slug} />}
                        hideBotAvatar="true"
                        hideUserAvatar="true"
                        hideSubmitButton="true"
                        footerStyle={{ display: 'none' }}
                        contentStyle={{
                            paddingBlockEnd: '60px',
                            paddingBlockStart: 'clamp(1rem, 4vw, 3rem)',
                            margin: '0',
                        }}
                        enableSmoothScroll="true"
                        style={{
                            borderRadius: '0px',
                            boxShadow: 'none',
                            height: 'max-content',
                            margin: 'auto',
                            width: '100%',
                            zIndex: '1',
                        }}
                        bubbleOptionStyle={{
                            border: '1px var(--purple) solid',
                            backgroundColor: 'transparent',
                            color: 'var(--purple)',
                            marginInlineStart: '4px',
                            marginBlockStart: '4px',
                            textAlign: 'center',
                            boxShadow: 'none',
                            borderRadius: '0px',
                            fontSize: 'var(--font-size--xsmall)',
                            padding: '18px',
                            fontFamily: 'var(--font-lausanne)',
                            width: '100%',
                            height: '100%',
                            lineHeight: '1.5',
                        }}
                        bubbleStyle={{
                            border: '1px var(--purple) solid',
                            boxShadow: 'none',
                            fontSize: 'var(--font-size--xsmall)',
                            lineHeight: '1.5',
                            padding: '18px',
                            borderRadius: '0px 20px',
                        }}

                        customStyle={{
                            marginRight: '0px',
                            marginLeft: '12px',
                            // marginTop: '-8px',
                            // marginBottom: '2px',
                            boxShadow: 'none',
                            backgroundColor: 'var(--purple)',
                            color: 'var(--white)',
                            fontFamily: 'var(--font-lausanne)',
                            width: "max-content",
                            border: '1px var(--purple) solid',
                            fontSize: 'var(--font-size--xsmall)',
                            lineHeight: '1.5',
                            padding: '18px',
                            borderRadius: '0px 20px',
                        }}
                        steps={chatSteps}
                        handleEnd={(log) => {
                            collectBadge('collected', slug, log);

                        }}
                    />
                </ThemeProvider>
            ) : (
                <div className={styles.loading}>
                    <div className={styles.content}>
                        <Image src={`/images/loading/` + slug + `.gif`} alt={slug} width={800} height={800} priority={true} />
                        <p>RoBob wordt opgeroepen!</p>
                        <div className={styles.loader}>
                            <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}
