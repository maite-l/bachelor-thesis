"use client"

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import ChatbotHeader from './ChatbotHeader';
import BadgePopUp from '../badges/BadgePopUp';
import styles from './Chatbot.module.css';
import Image from 'next/image';

export default function Chatbot({ steps, slug, characterData, badge }) {

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
    const [collectBadgeInNextStep, setCollectBadgeInNextStep] = useState(false);
    const [showBadge, setShowBadge] = useState(false);

    const addToLocalStorage = (step, key, value) => {
        // make sure we are on client side
        if (typeof window !== 'undefined') {
            const existingArray = JSON.parse(localStorage.getItem(key)) || [];

            // check if the value is already in the array
            if (!existingArray.includes(value)) {
                const newArray = [...existingArray, value];
                localStorage.setItem(key, JSON.stringify(newArray));
                setCollectBadgeInNextStep(true);
            }
        }

        return step;
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {

            // change placeholder message out for fetched steps
            const newSteps = steps;
            setChatSteps(newSteps);

            // check if the location is already in the localstorage, if so, remove the secondStart step
            const locationsArray = JSON.parse(localStorage.getItem('collected')) || [];
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

    console.log(slug);

    return (
        <>
            {showBadge && (
                <div>
                    <BadgePopUp badge={badge} onClose={() => setShowBadge(false)} />
                </div>
            )}
            {!loading ? (
                <ThemeProvider theme={theme}>

                    <ChatBot
                        headerComponent={<ChatbotHeader data={characterData} slug={slug} />}
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
                            maxWidth: 'clamp(10.5rem, 40vw, 14rem)',
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
                        handleEnd={() => {
                            if (collectBadgeInNextStep) {
                                setShowBadge(true);
                            }
                        }}
                    />
                </ThemeProvider>
            ) : (
                <div className={styles.loading}>
                    <div className={styles.content}>
                        <Image src={`/images/loading/` + slug + `.gif`} alt={slug} width={800} height={800} />
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
