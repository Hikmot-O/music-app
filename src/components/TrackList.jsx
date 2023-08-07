import React from "react";
import shuffle from "../assets/icons/shuffle.svg";
import loop from "../assets/icons/loop.svg";
import bars from "../assets/icons/bars.svg";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const TrackList = () => {
  return (
    <div className="pl-[14px] pr-6 w-[25%] h-screen overflow-y-auto">
      <h2 className="font-[700] text-2xl">Track list</h2>
      <div className="my-3 flex items-center gap-5">
        <div className="">
          <img src={shuffle} alt="Shuffle" />
        </div>
        <div className="">
          <img src={loop} alt="Loop" />
        </div>
      </div>
      <p className="text-[#828282] text-sm font-[500] mb-3">Playing next</p>

      {/* Tracks */}
      <div className="">
        {data.map(dt =>(
            <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center gap-2">
                    <img src={bars} alt="Bars" className="" />
                    <div className="rounded-[4px] bg-gray-300 w-10 h-10"></div>
                    <div className="">
                        <p className="text-sm font-[500] mb-0.5">Magazine</p>
                        <p className="text-xs text-[#4F4F4F]">$uicideBoys</p>
                    </div>
                </div>
                <div className="">
                    <p className="text-sm font-[500]">3:14</p>
                    <p className="text-xs font-[500] text-[#828282]">2016</p>
                </div>
                {/* <div className=""></div> */}
            </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
