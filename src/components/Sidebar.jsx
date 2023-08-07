import React from "react";
import logo from "../assets/icons/logo.svg";
import compass from "../assets/icons/compass.svg";
import earphone from "../assets/icons/earphone.svg";
import library from "../assets/icons/library.svg";
import love from "../assets/icons/love.svg";
import logout from "../assets/icons/logout.svg";
import settings from "../assets/icons/settings.svg";

const Sidebar = () => {
  return <div className="relative bg-[#FAFAFA] px-3 pt-5 pb-1.5 h-screen w-[5%]">
    <div className="pb-6 border-b ">
        <img src={logo} alt="Logo" className="mb-3.5" />
        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
    </div>
    <div className="pt-[26px] flex flex-col gap-1.5">
        <img src={compass} alt="Compass" className="p-2.5" />
        <img src={earphone} alt="Earphone" className="p-2.5" />
        <img src={love} alt="Favourite" className="p-2.5" />
        <img src={library} alt="Library" className="p-2.5" />
    </div>
    <div className="absolute bottom-1.5">
        <img src={settings} alt="Settings" className="p-2.5" />
        <img src={logout} alt="Logout" className="p-2.5" />
    </div>
  </div>;
};

export default Sidebar;
