import React from "react";
import dropdown from "../assets/icons/dropdown.svg";

const data = [{}, {}, {}, {}];
const Discover = () => {
  return (
    <div className="px-5 w-[25%] overflow-y-auto border-r">
      <h2 className="font-bold text-[32px] w-[180px] mb-10">
        Discover New Music
      </h2>
      <div className="flex items-center justify-between mb-5">
        <h3 className="h3">Top-chat</h3>
        <div className="flex gap-1.5">
          <h4 className="font-[500] text-[#828282]">Week</h4>
          <img src={dropdown} alt="Dropdown" className="" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-[18px] mb-6">
        {data.map((dt) => (
          <div className="">
            <div className=" h-[120px] bg-gray-400 rounded-md shadow-[0px_4px_8px_1px_rgba(0,0,0,0.08)]"></div>
            <div className="py-1.5 px-1">
              <p className="font-[500] text-sm mb-0.5">OK Computer</p>
              <p className="text-xs text-[#4f4f4f]">Radiohead, 2001</p>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <h3 className="mb-5 h3">You may like</h3>
        {data.map((dt, i) => (
          <div className="mb-2.5 flex gap-2 items-center">
            <div className="w-[42px] h-[42px] rounded-md bg-gray-300"></div>
            <div className="w-[calc(318px-88px)]">
              <div className="flex items-center justify-between">
                <p className="font-[500] text-sm">Static</p>
                <p className="text-xs text-[#4F4F4F]">22:36</p>
              </div>
              <div className="text-xs flex items-center justify-between">
                <p className="text-[#4F4F4F]">Godspeed You, Black...</p>
                <p className="font-[500]">2001</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
