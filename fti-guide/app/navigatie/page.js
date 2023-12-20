import { getLocationData } from "../../lib/data";
import Chatbot from "../(components)/chatbot/Chatbot";
import React from "react";

export default async function NavigationConversation() {
  // get navigation conversation data
  const data = getLocationData('navigation');
  const conversationData = data.conversation;

  let chatheaderInfo = {
    characterName: data.characterName,
  }
  if (data.eventName && data.location) {
    chatheaderInfo.eventName = data.eventName;
    chatheaderInfo.location = data.location;
  }
  if (data.quote) {
    chatheaderInfo.quote = data.quote;
  }

  return (
    <main>
      <Chatbot steps={conversationData} chatheaderInfo={chatheaderInfo} />
    </main>
  )
}