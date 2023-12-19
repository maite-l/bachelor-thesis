import { getLocationData } from "../../lib/data";
import Chatbot from "../(components)/chatbot/Chatbot";
import React from "react";

export default async function NavigationConversation() {
  // get navigation conversation data
  const data = getLocationData('navigation');
  console.log(data);
  let conversationData = data.conversation;

  return (
    <main>
      <Chatbot steps={conversationData} characterData={data.character} />
    </main>
  )
}