import { getConversationData } from "../../lib/data";
import Chatbot from "../(components)/Chatbot";
import React from "react";
import styles from './page.module.css';

export default async function NavigationConversation() {
  // get navigation conversation data
  const data = getConversationData('navigation');
  let conversationData = data.conversation;

  return (
    <main>
      <div className={styles.chatbotHeader}>
        <div></div>
        <div className={styles.chatbotHeaderInfo}>
          <h1 className={styles.chatbotName}>{data.character.name}</h1>
          <p className={styles.chatbotQuote}>{data.character.quote}</p>
        </div>
      </div>
      <Chatbot steps={conversationData} />
    </main>
  )
}