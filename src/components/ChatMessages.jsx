const ChatMessages = ({ content }) => {
  return (
    <div className="flex flex-col gap-8 py-2 w-[80%] ">
      {/* Right chat bubble */}
      <div className="flex justify-end">
        <div className="bg-[#303030] rounded-2xl p-3 px-4 max-w-[50%] text-white">
          {content?.chatInput}
        </div>
      </div>

      {/* Left chat bubble */}
      <div className="flex justify-start">
        <div className=" rounded-2xl p-3 px-4 max-w-[85%] mb-4 text-white">
          {content?.chatOutput}
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
