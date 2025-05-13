import React from "react";
import check from "../assets/check.png";
import { Link } from "react-router-dom";
import Paket from "./Paket";
import {paket} from "../data/data";

const PilihPaketComponent = () => {
  return (
    <div className="sm:px-20 mx-5 sm:mx-0 py-10 mt-15 bg-[#22282A]">
      <h1 className="text-center text-white text-[24px] font-bold mb-4">
        Pilih Paketmu
      </h1>
      <p className="text-[16px] text-white font-normal text-center mb-4">
        Temukan paket sesuai kebutuhanmu!
      </p>
      <div className="flex justify-center flex-wrap gap-[72px]">
        {paket.map((item, index) => (
          <Paket jenis={item.jenis} harga={item.harga} kualitas={item.kualitas} id={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default PilihPaketComponent;
