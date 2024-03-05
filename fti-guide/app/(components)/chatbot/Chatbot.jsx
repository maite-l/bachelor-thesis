"use client"

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import ChatbotHeader from './ChatbotHeader';
import BadgePopUp from '../badges/BadgePopUp';
import styles from './Chatbot.module.css';
import Image from 'next/image';

export default function Chatbot({ steps, slug, chatheaderInfo, badgeName }) {

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
