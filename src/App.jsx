import { CircleUser, LogOut, MoveUp, PanelLeft, Search, SquarePen } from "lucide-react";
import { useState } from "react";
import ChatHistory from "./components/ChatHistory";
import ChatMessages from "./components/ChatMessages";
import chatData from "./data/recentChat.json";
import content from "./data/chatContent.json"

const App = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const handleSidebarToggle = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  return (
    <div className="flex">
      {/* left content */}
      <div
        className={`bg-[#181818] h-screen ${
          isOpenSidebar ? "flex flex-col gap-8 w-[17%]" : "hidden"
        }`}
      >
        {/* upper div of left content */}
        <div className="flex flex-col gap-4 mt-12 items-start h-[10%] p-2">
          <div className="flex gap-2 items-center">
            <SquarePen strokeWidth={1} size={18} />
            <span>New Chat</span>
          </div>
          <div className="flex gap-2 items-center">
            <Search strokeWidth={1} size={18} />
            <span>Search Chat</span>
          </div>
        </div>
        {/* mid div of left content */}
        <div className=" h-[80%] overflow-y-scroll chatHistoryScrollArea">
          <h3 className="p-2 text-gray-500 text-sm">Recent Chat</h3>
          {chatData.map((data) => (
            <ChatHistory chats={data} />
          ))}
        </div>
        {/* bottom div of left content */}
        <div className=" flex items-end h-[8%] p-2 border-t border-gray-600 justify-start">
          <div className="flex w-[90%] h-[80%] items-center gap-2">
            <CircleUser
              strokeWidth={1}
              size={30}
              className="hover:text-gray-500 cursor-pointer"
            />
            <h2>Anoushka r</h2>
          </div>
          <LogOut
            strokeWidth={1}
            className="hover:text-red-600 cursor-pointer"
          />
        </div>
      </div>
      {/* right content */}
      <div
        className={`bg-[#212121] h-screen ${
          isOpenSidebar ? "block w-[83%]" : "w-full"
        }`}
      >
        <div className="flex flex-col h-screen">
          {/* top div */}
          <div className="flex h-[90%]">
            {/* menu toggle div */}
            <div className="p-2">
              <PanelLeft
                cursor="ew-resize"
                size={25}
                strokeWidth={1}
                onClick={handleSidebarToggle}
              />
            </div>
            {/* content area */}
            <div className="flex justify-center w-full h-[90%]">
              <div className="h-full p-1 w-full overflow-y-scroll flex flex-col chatHistoryScrollArea">
                {content.map((data) => (
                  <ChatMessages content={data} />
                ))}
              </div>
            </div>
          </div>
          {/* bottom div */}
          <div className="flex items-end h-[10%]">
            {/* <Plus /> */}
            <div className="flex justify-center w-full items-start p-10">
              <div className="flex items-center w-[80%] bg-[#303030] rounded-2xl">
                <textarea
                  className="min-w-[92%] max-w-3xl p-4 outline-none resize-none text-left align-top overflow-y-auto text-white h-15 rounded-2xl scroll-smooth"
                  placeholder="Ask anything"
                />
                <MoveUp
                  className="bg-white text-black w-10 h-10 rounded-full p-2"
                  size={40}
                  strokeWidth={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
