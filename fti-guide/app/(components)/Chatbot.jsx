"use client"

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';


const addToLocalStorage = (step, key, value) => {
    // make sure we are on client side
    if (typeof window !== 'undefined') {
        const existingArray = JSON.parse(localStorage.getItem(key)) || [];

        // check if the value is already in the array
        if (!existingArray.includes(value)) {
            const newArray = [...existingArray, value];
            localStorage.setItem(key, JSON.stringify(newArray));
        }
    }

    return step;
};


export default function Chatbot({ steps, slug }) {

    const [chatSteps, setChatSteps] = useState([{
        "id": "placeholder",
        "message": "Oh hey, jij weer!",
        "end": true,
        "hideInput": true
    }]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {

            // change placeholder message out for fetched steps
            const newSteps = steps;
            setChatSteps(newSteps);

            // check if the location is already in the localstorage, if so, remove the secondStart step
            const locationsArray = JSON.parse(localStorage.getItem('location')) || [];
            if (!locationsArray.includes(slug)) {
                const newSteps = steps.filter(step => step.id !== "secondStart");
                setChatSteps(newSteps);
            }

            // go through all steps to parse the html and add functions
            setChatSteps(prevSteps => prevSteps.map(step => {
                const { trigger, component, ...rest } = step;
                if (component) {
                    let content = step.component;
                    rest.component = (
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    );
                }
                if (trigger && trigger.function === "addToLocalStorage") {
                    rest.trigger = () => addToLocalStorage(trigger.arguments.trigger, trigger.arguments.key, trigger.arguments.value);
                } else if (trigger) {
                    rest.trigger = trigger;
                }
                return rest;
            }));

            setLoading(false);
        }
    }, [slug]);

    const theme = {
        background: '#000000',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    return (
        <ThemeProvider theme={theme}>
            {!loading && (
                <ChatBot
                    hideHeader="true"
                    hideBotAvatar="true"
                    hideUserAvatar="true"
                    hideSubmitButton="true"
                    footerStyle={{ display: 'none' }}
                    contentStyle={{
                        height: '90vh',
                        paddingBlockEnd: '20px',
                    }}
                    enableSmoothScroll="true"
                    style={{ borderRadius: '0px', boxShadow: 'none' }}
                    bubbleOptionStyle={{ border: '2px #EF6C00 solid', backgroundColor: 'transparent', color: '#EF6C00', marginBlockStart: '4px', marginInlineStart: '4px', textAlign: 'left' }}
                    customStyle={{
                        // backgroundColor: 'transparent',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        padding: '12px',
                        margin: '0px',
                        boxShadow: 'none',
                        backgroundColor: '#EF6C00',
                        //   display: 'flex',
                        //   flexDirection: 'column',
                        color: '#fff',
                        fontFamily: 'Helvetica Neue',
                        fontSize: '14px',
                        borderRadius: '18px 18px 18px 0px',
                        width: "max-content",
                        padding: '12px',
                        marginLeft: '12px',
                        marginBlockStart: '-4px',
                        marginBlockEnd: '10px',
                    }}
                    steps={chatSteps}
                />
            )}
        </ThemeProvider>
    )
}
