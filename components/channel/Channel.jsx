import React from "react";
import ChatBox from "../chatbox/ChatBox";
import Container from "../Container";
import Chat from "./Chat";

const Channel = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] relative">
      <div className="h-[calc(100vh-9rem)] overflow-y-auto">
        <div className="bg-gray-soft-light border-b border-gray-light">
          <Chat
            desc=' Please follow the instructions to create a new thread. Open WhatsApp
            and go to the "Chats" tab. Tap the "New Group" button to create a
            new group chat. Add OmniGPT in the group chat. Choose a name for the
            group chat and set a group icon if desired. Once the new thread is
            created, you can use it to discuss a specific topic or issue in the
            chat.'
          />
        </div>
        <div className="bg-white border-b border-gray-light">
          <Chat desc="What is this?" isUser />
        </div>
      </div>

      <div className=" absolute left-0 bottom-10 px-4 w-full">
        <Container>
          <ChatBox />
        </Container>
      </div>
    </div>
  );
};

export default Channel;
