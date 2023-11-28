"use client"

import styles from './page.module.css'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

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

    const existingArray = JSON.parse(localStorage.getItem('yourKey')) || [];
    const newArray = [...existingArray, 'newElement'];
    localStorage.setItem('yourKey', JSON.stringify(newArray));

    return step;
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
            backgroundColor: '#EF6C00',
            display: 'flex',
            flexDirection: 'column',
            color: '#fff',
            fontFamily: 'Helvetica Neue',
            fontSize: '15px',
            borderRadius: '15px 15px 15px 0px',
            width: "max-content",
          }}

          steps={[
            {
              id: '1',
              message: 'What are you looking for?',
              trigger: '2',
              hideInput: true
            },
            {
              id: '2',
              options: [
                { value: 1, label: 'Games', trigger: '4', className: 'primary-option' },
                { value: 2, label: 'EdTech', trigger: '3' },
              ],
              hideInput: true
            },
            {
              id: '3',
              message: 'Wrong answer, try again.',
              trigger: () => handleStepChange(2),
              hideInput: true
            },
            {
              id: '4',
              // asMessage: true,
              component: (
                <div>
                  <p
                    style={{ marginBottom: '0.5rem' }}
                  >I think you will like this location!</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.9792070644253!2d3.260466376448733!3d50.831549059851184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33afcb2d35a69%3A0xb3e9316f20e0416a!2sBUDAfabriek!5e0!3m2!1sen!2sbe!4v1700641989699!5m2!1sen!2sbe"
                    width="300"
                    height="300"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              ),
              end: true,
              hideInput: true,
            },
          ]}
        />
      </ThemeProvider>
    </main>
  )
}
