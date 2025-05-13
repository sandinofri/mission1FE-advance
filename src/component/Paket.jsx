import React from "react";
import check from "../assets/check.png";
import { Link } from "react-router-dom";

const Paket = ({jenis,harga,kualitas,id,width}) => {
  return (
    <>
      <div className={` bg-gradient-to-r from-[#5370D4] to-[#192BD7] w-[230px] ${width} text-white p-[24px] rounded-lg`}>
        <p className="py-[10px] px-[20px] bg-[#3D4142] text-white rounded-[24px] w-[120px] flex justify-center items-center mb-4">
         {jenis}
        </p>
        <p className="text-[14px] font-normal">Mulai dari Rp{harga}/bulan</p>
        <p className="text-[14px] font-normal">Akun</p>
        <div className="border-b border-white pb-8 pt-6 mb-8 text-[14px] font-normal">
          <div className="flex items-center gap-2 mb-2">
            <img className="w-[20px]" src={check} alt="" />
            <p>Tidak ada iklan</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img className="w-[20px]" src={check} alt="" />
            <p>Kulitas {kualitas}</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img className="w-[20px]" src={check} alt="" />
            <p>Download konten pilihan</p>
          </div>
        </div>
        <Link
          className="py-[10px] px-[26px] bg-white text-[#0F1E93] rounded-[48px] w-full flex justify-center items-center"
          to={"/pembayaran/"+id}
        >
          Langganan
        </Link>
        <p className="text-[12px] font-normal text-center mt-1">
          Syarat dan ketentuan berlaku
        </p>
      </div>
    </>
  );
};

export default Paket;
