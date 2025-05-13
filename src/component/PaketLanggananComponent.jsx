import React from "react";
import { kenapaLangganan } from "../data/data";

const PaketLanggananComponent = () => {
  return (
    <>
      <div className="sm:px-20  pt-[35px]">
        <h1 className="text-white sm:text-[24px] text-[18px] font-bold text-center mb-10">
          Kenapa Harus Berlangganan?
        </h1>
        <div>
          <div className="flex justify-around flex-wrap">
           {kenapaLangganan.map((item,index)=>(
            <div className="text-center sm:w-[300px] w-[150px] mb-4" key={index}>
                <img className=" mb-4 mx-auto" src={item.image} alt="" />
                <p className="text-white text-[18px] sm:w-[200px] mx-auto">{item.title}</p>
            </div>
           ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default PaketLanggananComponent;
