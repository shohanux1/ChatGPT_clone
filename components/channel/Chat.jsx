import React from "react";
import Container from "../Container";

const Chat = ({ desc, isUser }) => {
  return (
    <div className="py-6 border-gray-light">
      <Container>
        <div className={`flex items-start gap-4 ${isUser && "items-center"}`}>
          <div className="p-2 bg-teal-green-light text-sm mt-1">AV</div>
          <p>{desc}</p>
        </div>
      </Container>
    </div>
  );
};

export default Chat;
