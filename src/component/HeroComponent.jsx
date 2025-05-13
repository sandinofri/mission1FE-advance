import React from "react";
import GenreComponent from "./GenreComponent";
import GenreButtonComponent from "./GenreButtonComponent";
import { useState } from "react";

const HeroComponent = ({ classProperty, tittle, desc,isVisible}) => {

  const [genreVisible,setGenreVisible]=useState(false)
  const handleClick = ()=>{
    setGenreVisible(!genreVisible)
  }

  return (
    <>
      <div
        id="hero"
        className={`${classProperty}  text-white sm:px-[80px] sm:py-[25px] py-1.5 px-5 opacity-90 relative`}
      >
       {isVisible && (
        <div onClick={handleClick}><GenreButtonComponent/></div>
       )}
       {genreVisible && <GenreComponent/>}
        <div className="sm:mt-56 mt-24">
          <h1 className="sm:text-5xl text-xl font-bold sm:mb-4 mb-0.5">
            {tittle}
          </h1>
          <p className="sm:w-[668px] w-full mb-4 sm:text-[18px] text-[12px] sm:line-clamp-none line-clamp-2">
            {desc}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center justify-center">
              <button className="flex justify-center items-center sm:px-4 sm:py-2 bg-blue-600 rounded-3xl sm:text-[16px] text-[12px] px-3 py-1 ">
                Mulai
              </button>
              <button className="flex justify-center items-center gap-1 sm:px-4 sm:py-2 bg-slate-600 rounded-3xl sm:text-[16px] text-[12px] px-3 py-1">
                <p className="flex items-center justify-center rounded-[50px] w-[15px] h-[15px] border border-white">
                  i
                </p>
                Selengkapnya
              </button>
              <p className="rounded-[50px] flex items-center justify-center border border-slate-500 text-slate-300 sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] sm:p-0.5 sm:text-[16px] text-[12px] ">
                18+
              </p>
            </div>
            <div>
              <p className="rounded-[50px] flex items-center justify-center border border-slate-500 text-slate-300 sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] sm:p-0.5 sm:text-[16px] text-[12px]">
                🔇
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
