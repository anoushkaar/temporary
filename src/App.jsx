import { MoveUp, PanelLeft } from "lucide-react";
import { useState } from "react";

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
          isOpenSidebar ? "block w-[17%]" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3 mt-12 items-start ml-3">
          <button>New Chat</button>
          <button>Seacrh Chat</button>
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
            <div className="flex justify-center items-center w-full">
              <h1 className="font-extralight text-3xl">
                What are you working on?
              </h1>
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
