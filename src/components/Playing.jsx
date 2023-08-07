import React from "react";
import like from "../assets/icons/playing-heart.svg";
import plus from "../assets/icons/plus.svg";
import loop from "../assets/icons/loop.svg";
import next from "../assets/icons/next.svg";
import back from "../assets/icons/back.svg";
import shuffle from "../assets/icons/shuffle.svg";
import volumePlus from "../assets/icons/volumePlus.svg";
import volumeMinus from "../assets/icons/volumeMinus.svg";
import earphone from "../assets/icons/earphone.svg";

const Playing = () => {
  return (
    <div className="px-[77px] pt-5 pb-7 w-[45%] text-center bg-[#FAFAFA] border-r overflow-y-auto">
      <h3 className="h3 mb-10">Now playing</h3>
      {/* Music cover */}
      <div className="bg-gray-300 rounded-md w-[full] h-[300px]"></div>

      <div className="flex items-center justify-between mb-2.5">
        <img src={plus} alt="Plus" className="" />
        <div className="">
          <h3 className="h3 mt-4">Money Machine</h3>
          <p className="text-lg text-[#4F4F4F] mt-1.5">1000 Gecks</p>
        </div>
        <img src={like} alt="Favourite" className="" />
      </div>

      <div className="flex justify-between items-center text-[#828282] text-sm">
        <p className="">2:14</p>
        <p className="">-1:15</p>
      </div>

      {/* playing */}
      <div className="h-[3px] w-full bg-[#828282] bg-opacity-[0.5] rounded-full mt-1.5"></div>

      {/* playing options */}
      <div className="mt-8 flex items-center justify-between">
        <div className="">
          <img src={shuffle} alt="Shuffle" />
        </div>
        <div className="flex items-center gap-[70px]">
          <div className="">
            <img src={back} alt="Back" />
          </div>
          <div className="w-16 h-16 bg-[#27AE60] rounded-full"></div>
          <div className="">
            <img src={next} alt="Next" />
          </div>
        </div>
        <div className="">
          <img src={loop} alt="Loop" />
        </div>
      </div>

      {/* Volume */}
      <div className="mt-6 mb-4 flex items-center gap-4">
        <div className="">
            <img src={volumeMinus} alt="Decrease_Volume" />
        </div>
        <div className="h-0.5 w-full bg-[#828282]"></div>
        <div className="">
        <img src={volumePlus} alt="Increase_Volume" />
        </div>
      </div>

      {/* Listening device */}
      <div className="w-max justify-center mx-auto flex items-center gap-2.5 rounded-[300px] bg-[rgba(111,207,151,0.15)] px-[14px] py-2.5">
        <img className="w-4 h-[14px]" src={earphone} alt="Earphone" />
        <p className="text-sm font-[500] text-[#828282]">Airpods Pro (Dave)</p>
      </div>
    </div>
  );
};

export default Playing;
