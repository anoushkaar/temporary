import {
  CircleUser,
  LockKeyhole,
  LogOut,
  MoveUp,
  PanelLeft,
  Search,
  Settings,
  SquarePen,
  User,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import ChatHistory from "./components/ChatHistory";
import ChatMessages from "./components/ChatMessages";
import content from "./data/chatContent.json";
import chatData from "./data/recentChat.json";

const App = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [selectedSetting, setSelectedSetting] = useState("profile");
  const [settingPopupOpen, setSettingPopupOpen] = useState(false);

  const settingElements = [
    { label: "Profile", icon: <User strokeWidth={0.5} size={18} /> },
    { label: "General", icon: <Settings strokeWidth={0.5} size={18} /> },
    { label: "Account", icon: <Wrench strokeWidth={0.5} size={18} /> },
    { label: "Security", icon: <LockKeyhole strokeWidth={0.5} size={18} /> },
  ];

  const handleSidebarToggle = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const handleSettingSelect = (setting) => {
    setSelectedSetting(setting.toLowerCase());
  };

  const handlePopupClose = () => {
    setSettingPopupOpen(!settingPopupOpen);
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
        <div className=" flex items-end h-[8%] p-2 border-t border-[#2d2d2d] justify-start">
          <div
            className="flex w-[90%] h-[80%] items-center gap-2 hover:bg-[#212121] rounded-lg px-2  py-3 cursor-pointer"
            onClick={handlePopupClose}
          >
            <CircleUser
              strokeWidth={1}
              size={30}
              className="hover:text-gray-500 cursor-pointer"
            />
            <h2>Anoushka r</h2>
          </div>
          <LogOut
            strokeWidth={1}
            className="hover:text-red-600 cursor-pointer mt-1 flex self-center"
          />
        </div>
      </div>
      {/* right content */}
      <div
        className={` h-screen ${isOpenSidebar ? "block w-[83%]" : "w-full"} ${
          settingPopupOpen ? "bg-gray-950 " : "bg-[#212121]"
        }`}
      >
        <div className="flex flex-col h-screen">
          {/* top div */}
          <div className="flex h-[90%] ">
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
            <div className={`flex justify-center w-full  relative`}>
              <div
                className={`h-full p-1 w-full overflow-y-scroll flex items-center flex-col chatHistoryScrollArea  ${
                  settingPopupOpen ? "blur-[1px]" : "blur-none"
                }`}
              >
                {content?.map((data) => (
                  <ChatMessages content={data} />
                ))}
              </div>
              {/* popup div */}
              <div
                className={`flex justify-center items-center absolute inset-0 ${
                  settingPopupOpen ? "flex" : "hidden"
                } `}
              >
                {/* popup div */}
                <div
                  className={`bg-[#1E1E1E]  h-[80%] w-[50%] z-50 shadow-lg rounded-2xl flex`}
                >
                  <div className="rounded-4xl w-[30%] p-2  ">
                    <div className=" h-10">
                      <X
                        onClick={handlePopupClose}
                        className="hover:cursor-pointer"
                      />
                    </div>
                    {/* hover:bg-amber-600 px-2 rounded */}
                    <ul className="flex flex-col gap-1 h-fit px-1 ">
                      {settingElements.map((elem) => (
                        <li
                          key={elem.label}
                          className="flex items-center gap-2 hover:bg-gray-800 px-2 py-1 text-xs rounded cursor-pointer"
                          onClick={() => {
                            handleSettingSelect(elem.label);
                          }}
                        >
                          {elem.icon}
                          {elem.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#212121] w-[70%] rounded-r-2xl">
                    {selectedSetting === "profile" && (
                      <div className=" w-full h-fit ">
                        <h3 className=" p-4 text-xl border-b border-[#2d2d2d] ">
                          Profile
                        </h3>
                        <div className="flex border-b mt-3 border-[#2d2d2d]  justify-between p-4 ">
                          <span> Name</span>
                          <span>Sagar Yadav</span>
                        </div>
                        <div className="flex border-b border-[#2d2d2d]  justify-between p-4 ">
                          <span> Email Address</span>
                          <span>sagaryadav6352@gmail.com</span>
                        </div>
                        <div className="flex border-b border-[#2d2d2d]  justify-between p-4 ">
                          <span>Verified</span>
                          <span>No</span>
                        </div>
                      </div>
                    )}
                    {selectedSetting === "general" && (
                      <div className=" w-full h-fit mt-3 ">
                        <h3 className=" p-4 text-xl border-b border-[#2d2d2d] ">
                          General
                        </h3>
                        <div className="flex border-b border-[#2d2d2d]  justify-between p-4 ">
                          <span> Appearance</span>
                          <span>System</span>
                        </div>
                        <div className="flex border-b border-[#2d2d2d]  justify-between p-4 ">
                          <span> Accent color</span>
                          <span>Black</span>
                        </div>
                        <div className="flex border-b border-[#2d2d2d]  justify-between p-4 ">
                          <span> Appearance</span>
                          <span>System</span>
                        </div>
                      </div>
                    )}
                    {selectedSetting === "account" && <h2>account</h2>}
                    {selectedSetting === "security" && <h2>security</h2>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom div */}
          <div className="flex items-end h-[7%]  ">
            <div className="flex justify-center w-full items-start ">
              <div className="flex items-center w-[80%] bg-[#303030] rounded-2xl">
                <textarea
                  className="min-w-[92%] max-w-3xl p-4 outline-none resize-none text-left align-top overflow-y-auto text-white h-15 rounded-2xl scroll-smooth"
                  placeholder="Ask anything"
                />
                <MoveUp
                  className="bg-white text-black w-10 h-10 rounded-full p-2 hover:cursor-pointer hover:bg-gray-300"
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
