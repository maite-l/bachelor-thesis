import { getConversationData } from "../../lib/data";
import Chatbot from "../(components)/chatbot/Chatbot";
import React from "react";
import styles from './page.module.css';

export default async function NavigationConversation() {
  // get navigation conversation data
  const data = getConversationData('navigation');
  let conversationData = data.conversation;

  return (
    <main>
      <Chatbot steps={conversationData} characterData={data.character} />
    </main>
  )
}