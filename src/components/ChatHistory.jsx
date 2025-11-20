import React from 'react'

const ChatHistory = ({chats}) => {
  console.log(chats);

  return (
    <div className="flex py-1">
      <div className="hover:bg-gray-700 rounded-lg px-2 py-1 w-full cursor-pointer" id={chats.id}>
        {chats.title}
      </div>
    </div>
  );
}

export default ChatHistory
