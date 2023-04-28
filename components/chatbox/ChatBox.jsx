import React from "react";
import { AiOutlineUpload, AiOutlineAudio, AiOutlineSend } from "react-icons/ai";

const ChatBox = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 bg-white">
        {/* <div>
          <button className="py-2 px-6 rounded-md border border-gray">
            Regenerate response
          </button>
        </div> */}

        <div className="w-full shadow-theme rounded border border-gray-light">
          <div className="flex text-gray items-center justify-between gap-5 py-3 px-8 text-3xl">
            <AiOutlineUpload />
            <AiOutlineAudio />

            <textarea
              rows="1"
              className="w-full text-base py-[14px] px-4 bg-[#F7F7F8] rounded outline-none"
              type="text"
              placeholder="Send a message..."
            />
            <AiOutlineSend color="#1FC77E" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
