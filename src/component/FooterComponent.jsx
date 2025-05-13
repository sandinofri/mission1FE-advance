import React from "react";
import roll from "../assets/movie-open.png";

const FooterComponent = () => {
  return (
    <footer className="sm:px-[80px] sm:py-[60px] sm:mt-[100px] px-5 py-1.5 mt-12 border border-t-slate-500 sm:flex block sm:items-center sm:justify-between">
      <div className="sm:mb-0 mb-[15px]">
        <div className="flex items-center gap-1 ">
          <img
            className="sm:w-[36px] sm:h-[30px] w-[18px] h-[17px]"
            src={roll}
            alt=""
          />
          <h5 className="text-white sm:text-3xl text-lg font-bold mt-1">CHILL</h5>
        </div>
        <small className="sm:text-sm text-[10px]  text-[#C1C2C4] font-light">
          @2023 Chill All Rights Reserved.
        </small>
      </div>
      <div>
        <p className="text-white sm:text-lg text-[14px] font-bold mb-2.5 justify-between items-center hidden sm:block ">
          Genre <span className="block sm:hidden text-[22px]">›</span>
        </p>
        <p
          id="genre-button"
          className="text-white sm:text-lg text-[14px] font-bold mb-2.5 flex justify-between items-center sm:hidden"
        >
          Genre{" "}
          <span id="genre-icon" className="block sm:hidden text-[22px]">
            ›
          </span>
        </p>
        <div
          className="sm:flex hidden flex-wrap w-[500px] text-white sm:text-sm text-[10px] sm:font-normal gap-4 mb-8 sm:mb-0"
          id="genre-list"
        >
          <ul>
            <li>Aksi</li>
            <li>Anak-anak</li>
            <li>Anime</li>
            <li>Britania</li>
          </ul>
          <ul>
            <li>Drama</li>
            <li>Fantasi-ilmiah & Fantasi</li>
            <li>Kejahatan</li>
            <li>KDrama</li>
          </ul>
          <ul>
            <li>Komedi</li>
            <li>Petualangan</li>
            <li>Perang</li>
            <li>Romantis</li>
          </ul>
          <ul>
            <li>Sains & Alam</li>
            <li>Thriler</li>
          </ul>
        </div>
      </div>
      <div className="mb-7 sm:mb-0">
        <p className="text-white sm:text-lg text-[14px] font-bold mb-2.5 hidden justify-between items-center sm:block">
          Bantuan
        </p>
        <p
          id="help-button"
          className="text-white sm:text-lg text-[14px] font-bold mb-2.5 flex justify-between items-center sm:hidden"
        >
          Bantuan{" "}
          <span id="help-icon" className="block sm:hidden text-[22px]">
            ›
          </span>
        </p>
        <div
          id="help"
          className="text-white sm:text-sm text-[10px] font-normal sm:block hidden"
        >
          <p>FAQ</p>
          <p>Kontak Kami</p>
          <p>Privasi</p>
          <p>Syarat & Ketentuan</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
