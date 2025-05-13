import React from "react";
import { daftarSaya } from "../data/data";

const DaftarSayaComponent = () => {
  return (
    <div className=" sm:px-20 px-5 pt-5 text-white">
      <h3 className="sm:text-3xl text-[20px] font-bold mb-4 mt-4 sm:mt-0">
        Daftar Saya
      </h3>
      <div className="flex justify-between flex-wrap overflow-auto sm:overflow-visible scrollbar-hide scroll-smooth sm:gap-6 gap-3 relative ">
        {daftarSaya.map((item, index) => (
          <div
            key={index}
            className="sm:w-[150px]  w-[85px] shrink-0 relative"
          >
            <img
              className="w-full h-full rounded-lg object-cover"
              src={item.image}
              alt=""
            />
            {item.new && (
              <div className="absolute inset-0 flex items-start sm:p-4 p-2 bg-black/40 rounded-lg">
                <p className="bg-[#0F1E93] py-1 px-2.5 rounded-2xl sm:text-[12px] text-[5px]">
                  Episode Baru
                </p>
              </div>
            )}
            {item.isTrending && (
              <div className="absolute inset-0 flex items-start justify-end bg-black/40 rounded-lg">
                <p className="bg-red-800 text-white sm:w-[31px] w-[20px] text-[10px] sm:text-[15px] me-2 sm:p-1 p-0.5 text-center rounded-b-[4px]">
                  Top 10
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarSayaComponent;
