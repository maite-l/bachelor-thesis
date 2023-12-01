"use client"

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

export function CustomOptions({ options, triggerNextStep }) {

    const handleOptionClick = (option) => {
        triggerNextStep({ value: option.value, trigger: option.trigger });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
            {options.map((option, index) => (
                <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    style={{
                        border: option.primary ? '2px #EF6C00 solid' : 'none',
                        textDecoration: option.primary ? 'none' : 'underline',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '20px'
                    }}
                >
                    {option.value}
                </div>
            ))}
        </div>
    );
};


export default function Chatbot({steps}) {

    const addToLocalStorage = (step, key, value) => {
        const existingArray = JSON.parse(localStorage.getItem(key)) || [];
        const newArray = [...existingArray, value];
        localStorage.setItem(key, JSON.stringify(newArray));
        return step;
    };

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
