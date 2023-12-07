"use client"

import styles from './page.module.css'
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


export default function Home() {
  // use theme with themeprovider from styled-components to change colours and fonts
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

  const handleStepChange = (step) => {
    // Execute your function based on the step ID or any other condition
    console.log(`Step changed to ${step}`);

    const existingArray = JSON.parse(localStorage.getItem('key')) || [];
    const newArray = [...existingArray, 'this was added by the chatbot'];
    localStorage.setItem('key', JSON.stringify(newArray));

    return step;
  };

  const insertedStep = {
    id: '6',
    message: 'This is a message that was dynamically inserted in the middle of the chatbot',
    // trigger: '7',
    end: true,
    hideInput: true
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Chatbot demo</h1>
      <ThemeProvider theme={theme}>
        <ChatBot

          // hide things we don't need
          hideHeader="true"
          hideBotAvatar="true"
          hideUserAvatar="true"
          hideSubmitButton="true"
          footerStyle={{ display: 'none' }} // hide footer even though we put hideInput on true in every step, to avoid it showing up for a split second

          // make chatbot full height to make up for stuff we hide  
          contentStyle={{
            width: '20rem',
            height: '30rem'
          }}

          // smooth scroll to bottom of chatbot
          enableSmoothScroll="true"

          // width and height of container (doesn't work on mobile)
          // width="50rem"
          // height="50rem"

          style={{ borderRadius: '0px', boxShadow: 'none' }} // style of chatbot container

          //bubbleStyle={{ marginTop: "2rem" }} // able to change spacing between bubbles

          // option styling
          bubbleOptionStyle={{ border: '2px #EF6C00 solid', backgroundColor: 'transparent', color: '#EF6C00' }}

          // will have to be the same styling as bubbleStyle with the colours of the bot in the theme
          customStyle={{
            //   backgroundColor: '#EF6C00',
            //   display: 'flex',
            //   flexDirection: 'column',
            //   color: '#fff',
            //   fontFamily: 'Helvetica Neue',
            //   fontSize: '15px',
            //   borderRadius: '15px 15px 15px 0px',
            //   width: "max-content",
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '12px',
            margin: '0px'
          }}

          steps={[
            {
              id: '1',
              message: 'Hello, this is a message you can reply to with options.',
              trigger: '2',
              hideInput: true
            },
            {
              id: '2',
              options: [
                { value: '1', label: 'this is a standard option', trigger: 3 },
                { value: '2', label: 'this is another standard option', trigger: 3 },
              ],
            },
            {
              id: '3',
              message: 'This is a message that put something in localstorage',
              trigger: () => handleStepChange(4),
              hideInput: true,
            },
            {
              id: '4',
              component: <CustomOptions options={[{ value: 'This is a custom option component', trigger: 5, primary: true }, { value: 'We created this option ourselves', trigger: 5 }]} />,
              replace: true,
            },
            {
              id: '5',
              // asMessage: true,
              component: (
                <div
                  style={{ border: '0', backgroundColor: '#EF6C00', padding: '0.5rem', borderRadius: '0.5rem' }}
                >
                  <p
                    style={{ marginBottom: '0.5rem' }}
                  >We made this component to test if we can embed Google Maps</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.9792070644253!2d3.260466376448733!3d50.831549059851184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33afcb2d35a69%3A0xb3e9316f20e0416a!2sBUDAfabriek!5e0!3m2!1sen!2sbe!4v1700641989699!5m2!1sen!2sbe"
                    width="250"
                    height="250"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              ),
              hideInput: true,
              trigger: '6'
            },
            insertedStep
          ]}
        />
      </ThemeProvider>
    </main>
  )
}
