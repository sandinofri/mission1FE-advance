import React, { useState } from "react";
import { topRating } from "../data/data.js";
import check from "../assets/check.png";
import arrow from "../assets/KeyboardArrowDown.png";
import vector from "../assets/Vector (1).png";
const TopRating = () => {
  const [overedIndex, setOveredIndex] = useState(null);
  
  return (
    <div className="sm:py-10 sm:px-20 px-5 py-1.5 text-white">
      <h3 className="sm:text-3xl text-[20px] font-bold mb-4 mt-4 sm:mt-0">
        Top Rating Film dan Series Hari ini
      </h3>

      <div className="flex justify-between overflow-x-auto sm:overflow-visible scrollbar-hide scroll-smooth sm:gap-6 gap-3 relative">
        <div className="absolute w-full h-full z-49 sm:flex hidden justify-between items-center pointer-events-none">
          <p className="flex items-center justify-center -ms-[20px] w-[40px] h-[40px] rounded-[50px] bg-[#2F3334] cursor-pointer">
            ←
          </p>
          <p className="flex items-center justify-center -me-[20px] w-[40px] h-[40px] rounded-[50px] bg-[#2F3334] cursor-pointer">
            →
          </p>
        </div>
        {topRating.map((item, index) =>
          overedIndex === index ? (
            <div
              key={index}
              className="sm:w-[190px] sm:h-[340px] w-[100px] h-[160px] shrink-0 relative group overflow-hidden rounded-lg"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={item.image}
                alt=""
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="text-white text-xs sm:text-sm">
                  <div className=" items-center gap-2 mb-1">
                    <div className="flex justify-between">
                      <div className="flex gap-1">
                        <div className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]">
                          <img src={vector} alt="" />
                        </div>
                        <div className="border border-white rounded-full sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] flex justify-center items-center">
                          <img src={check} alt="" />
                        </div>
                      </div>
                      <div className="flex justify-center items-center sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full border border-white">
                        <img src={arrow} alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="bg-white text-black text-[8px] sm:px-1.5 sm:py-0.5 px-[2px] py-[2px] me-[5px] rounded">
                      13+
                    </span>
                    <span className="text-[8px] sm:text-[12px]">
                      16 Episode
                    </span>
                  </div>
                  <div className="text-[8px] sm:text-[12px] flex gap-1">
                    <span>Misteri</span>•<span>Kriminal</span>•
                    <span>Fantasi</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="sm:w-[190px] sm:h-[340px] w-[100px] h-[160px] shrink-0 relative"
              onMouseOver={() => setOveredIndex(index)}
              onMouseLeave={() => setOveredIndex(null)}
            >
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.image}
                alt=""
              />
              {item.new && (
                <div className="absolute inset-0 flex items-start sm:p-4 p-2 bg-black/40 rounded-lg pointer-events-none">
                  <p className="bg-[#0F1E93] py-1 px-2.5 rounded-2xl sm:text-[12px] text-[5px]">
                    Episode Baru
                  </p>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TopRating;
