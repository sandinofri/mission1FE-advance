import React from "react";
import { useState } from "react";
import arrow from "../assets/keyboardArrowDown.png";

const GenreButtonComponent = () => {

  return (
    <h1
     
      className=" w-[100px] hidden  sm:px-2 sm:py-2 text-white sm:bg-[#22282A] bg-[#181a1c] z-50 sm:flex sm:justify-between items-center rounded-[10px]"
    >
      Genre
      <span>
        <img src={arrow} alt="" />
      </span>
    </h1>
  );
};

export default GenreButtonComponent;
