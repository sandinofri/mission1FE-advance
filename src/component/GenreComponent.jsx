import React from "react";
import arrow from "../assets/keyboardArrowDown.png";
import { useState } from "react";
import GenreButtonComponent from "./GenreButtonComponent";

const GenreComponent = () => {
 
  return (
    <div className="absolute">
        <div className="flex p-5 bg-[#22282A] gap-10 rounded-[10px] mt-1 text-sm leading-[30px]">
          <ul>
            <li>Aksi</li>
            <li>Anak-anak</li>
            <li>Anime</li>
            <li>Britania</li>
            <li>Britania</li>
            <li>Drama</li>
            <li>Fantasi-ilmiah & fantasi</li>
            <li>Kejahatan</li>
          </ul>
          <ul>
            <li>Aksi</li>
            <li>Anak-anak</li>
            <li>Anime</li>
            <li>Britania</li>
            <li>Britania</li>
            <li>Drama</li>
            <li>Fantasi-ilmiah</li>
            <li>Kejahatan</li>
          </ul>
        </div>
      
    </div>
  );
};

export default GenreComponent;
