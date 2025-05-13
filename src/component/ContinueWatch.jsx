import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { fetchWatchHistory } from "../service/api";
const ContinueWatch = () => {
  const [watchHistory, setWatchHistory] = useState([]);
  const getWatchHistory = async () => {
    try {
      const data = await fetchWatchHistory();
      setWatchHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWatchHistory();
  }, []);
  return (
    <div className="sm:py-10 sm:px-20 px-5 py-1.5 text-white overflow-x-auto">
      <h3 className="sm:text-3xl text-[20px] font-bold mb-4 mt-4">
        Melanjutkan Tonton Film
      </h3>
      <div className="flex justify-between overflow-x-auto sm:overflow-visible scrollbar-hide scroll-smooth sm:gap-5 gap-3 relative">
        <div className="absolute w-full h-full z-30 sm:flex hidden justify-between items-center">
          <p className="flex items-center justify-center -ms-[20px] w-[40px] h-[40px] rounded-[50px] bg-[#2F3334] cursor-pointer">
            ←
          </p>
          <p className="flex items-center justify-center -me-[20px] w-[40px] h-[40px] rounded-[50px] bg-[#2F3334] cursor-pointer">
            →
          </p>
        </div>
        {watchHistory.map((item) => (
          <div
            key={item.id}
            id="dont"
            className={`w-[250px] h-[160px] shrink-0 relative`}
          >
            <img
              className="w-full h-full rounded-lg object-cover"
              src={item.avatar}
              alt=""
            />

            <div className="absolute inset-0 flex items-end p-4 bg-black/40 rounded-lg pointer-events-none">
              <div className="flex justify-between w-full">
                <p className="text-white sm:text-[18px] text-[14px] font-bold">
                  {item.tittle}
                </p>
                <p className="text-white sm:text-[18px] text-[14px] font-bold">
                  <span>⭐</span>4.4/5
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatch;
