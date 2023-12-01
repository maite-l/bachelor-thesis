"use client"

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const addToLocalStorage = (step, key, value) => {
    const existingArray = JSON.parse(localStorage.getItem(key)) || [];
    const newArray = [...existingArray, value];
    localStorage.setItem(key, JSON.stringify(newArray));
    return step;
};


export default function Chatbot({ steps }) {

    // parse the steps to add the trigger and component properties
    steps = steps.map(step => {
        const { trigger, component, ...rest } = step;

        // if there is a component property, parse it as html
        if (component) {
            let content = step.component;
            rest.component = (
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            );
        }
        // if the trigger is a function, add function in trigger
        if (trigger && trigger.type === "function") {
            rest.trigger = () => addToLocalStorage(trigger.arguments.trigger, trigger.arguments.key, trigger.arguments.value);
        } else if (trigger) {
            rest.trigger = trigger;
        }

        return rest;
    });

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
                steps={steps}
            />
        </ThemeProvider>
    )
}
