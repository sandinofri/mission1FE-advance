import React from "react";
import Paket from "./Paket";
import { useState, useEffect } from "react";
import { paket } from "../data/data";
import { useParams } from "react-router-dom";
import bca from "../assets/bca.png";
import americanExpress from "../assets/AMERICAN EXPRESS.png";
import logo from "../assets/logo.png";
import visa from "../assets/visa.png";
import jcb from "../assets/JCB.png";
import vector2 from "../assets/Vector (2).png";

const PembayaranComponent = () => {
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [kodePromo, setKodePromo] = useState("");
  const [isVisibleForm, setIsVisibleForm] = useState(true);
  const [notification, setNotification] = useState("");
  const { id } = useParams();
  const pkt = paket[id - 1];
  const admin = 3000;
  const today = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const [startTime, setStartTime] = useState(null); // waktu mulai countdown
  const [timeLeft, setTimeLeft] = useState(0); // sisa waktu dalam ms

  const handleSubmit = (e) => {
    e.preventDefault();
    if (kodePromo) {
      setNotification("kode promo digunakan");
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  const handleClick = () => {
    setIsVisibleForm(false);
    const now = new Date().getTime();
    setStartTime(now);
    setTimeLeft(24 * 60 * 60 * 1000); // 24 jam = 86.400.000 ms
  };

  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = startTime + 24 * 60 * 60 * 1000 - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = (ms) => {
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return `${String(hours).padStart(2, "0")} jam : ${String(minutes).padStart(
      2,
      "0"
    )} menit : ${String(seconds).padStart(2, "0")} detik`;
  };
  return (
    <div className=" pt-[35px] sm:pb-[40px] sm:px-20 px-5">
      {!isVisibleForm && (
        <div className="bg-[#22282A] py-6 px-[25px] rounded-[12px] mb-4">
          <p className="text-white text-[14px] text-center font-normal">
            Lakukan Pembayaran Sebelum
          </p>
          <div className="mt-4 text-white text-[14px] text-center font-normal">
            {formatTime(timeLeft)}
          </div>
        </div>
      )}

      <h1 className="sm:text-[30px] text-[20px] text-white font-bold mb-5">
        Ringkasan Pembayaran
      </h1>
      <div className="flex flex-wrap sm:flex-nowrap sm:justify-between">
        <div className="mb-5 sm:mb-0 w-full sm:w-auto">
          <Paket
            width="w-full"
            jenis={pkt.jenis}
            harga={pkt.harga}
            kualitas={pkt.kualitas}
          />
        </div>
        <div className=" w-full sm:w-auto sm:flex sm:flex-col sm:justify-between ">
          <p className="text-[16px] sm:text-[18px] text-white font-semibold mb-5">
            Metode Pembayaran
          </p>
          {metodePembayaran === "bca" ? (
            <div className="sm:w-full py-1 px-[10px] border border-[#E0E0E0] rounded-[6px] flex items-center gap-2 mb-5">
              <input
                className="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]"
                type="radio"
                name="metode-pembayaran"
                onChange={() => setMetodePembayaran("")}
                checked={metodePembayaran === "bca"}
              />
              <img
                className="sm:w-[24px] w-[16px] sm:h-[24px] h-[16px]"
                src={bca}
                alt=""
              />
              <span className="text-white smtext-[16px] text-[12px] font-normal">
                BCA Virtual Acount
              </span>
            </div>
          ) : (
            <div className="sm:flex sm:gap-[29px]">
              <div className="sm:w-[370px] py-1 px-[10px] border border-[#E0E0E0] rounded-[6px] flex items-center gap-2 mb-5">
                <input
                  className="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]"
                  type="radio"
                  name="metode-pembayaran"
                  onChange={() => setMetodePembayaran("kartu")}
                  checked={metodePembayaran === "kartu"}
                />
                <img
                  className="sm:w-[34px] w-[23px] sm:h-[24px] h-[16px] object-cover"
                  src={visa}
                  alt=""
                />
                <img
                  className="sm:w-[34px] w-[23px] sm:h-[24px] h-[16px] object-cover"
                  src={logo}
                  alt=""
                />
                <img
                  className="sm:w-[34px] w-[23px] sm:h-[24px] h-[16px] object-cover"
                  src={jcb}
                  alt=""
                />
                <img
                  className="sm:w-[34px] w-[23px] sm:h-[24px] h-[16px] object-cover"
                  src={americanExpress}
                  alt=""
                />
                <span className="text-white smtext-[16px] text-[12px] font-normal">
                  Kartu Debit/Kredit
                </span>
              </div>

              <div className="sm:w-[350px] py-1 px-[10px] border border-[#E0E0E0] rounded-[6px] flex items-center gap-2 mb-5">
                <input
                  className="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]"
                  type="radio"
                  name="metode-pembayaran"
                  onChange={() => setMetodePembayaran("bca")}
                  checked={metodePembayaran === "bca"}
                />
                <img
                  className="sm:w-[24px] w-[16px] sm:h-[24px] h-[16px]"
                  src={bca}
                  alt=""
                />
                <span className="text-white smtext-[16px] text-[12px] font-normal">
                  BCA Virtual Acount
                </span>
              </div>
            </div>
          )}

          {isVisibleForm ? (
            <form className="mt-2 mb-5" action="" onSubmit={handleSubmit}>
              <label
                htmlFor="input-kode"
                className="text-white text-[16px] sm:text-[18px]  font-semibold mb-4 block"
              >
                Kode Voucher (Jika ada)
              </label>
              {notification && (
                <p className="text-[16px] text-emerald-500">{notification}</p>
              )}
              <div className="flex gap-4 justify-between items-center">
                <input
                  className="sm:w-[650px] w-[270px] h-[30px] sm:h-[35px]  px-[10px] text-[12px] text-[#6C717A] border border-[#E0E0E0] rounded-[6px]"
                  type="text"
                  placeholder="Masukan kode voucher"
                  id="input-kode"
                  name="input-kode"
                  onChange={(e) => setKodePromo(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex justify-center items-center rounded-[48px] bg-[#2F3334] py-3 px-2 text-white text-[14px] w-[81px] h-[30px] sm:h-[35px]"
                >
                  Gunakan
                </button>
              </div>
            </form>
          ) : (
            <div className="w-full sm:w-[750px] mb-4">
              <p className="flex justify-between text-[12px] sm:text-[16px] text-[#C1C2C4] font-normal">
                <span>Tanggal Pembelian </span>
                <span>{today}</span>
              </p>
              <p className="flex justify-between text-[12px] sm:text-[16px] text-[#C1C2C4] font-normal">
                <span>Kode Pembayaran </span>
                <span>
                  {kodePromo} <img className="inline" src={vector2} alt="" />
                </span>
              </p>
            </div>
          )}

          <p className="text-[16px] sm:text-[18px] text-white font-semibold mb-5">
            Ringkasan Transaksi
          </p>
          <div className="sm:w-[400px] mb-5 sm:mb-0">
            <p className="flex justify-between text-[#C1C2C4] font-normal">
              <span className="sm:w-[250px] w-[138px] text-[12px] sm:text-[16px]">
                Paket Premium Individual
              </span>
              <span className="sm:w-[81px] w-[64px] text-[12px] sm:text-[16px]">
                Rp {pkt.harga}
              </span>
            </p>
            <p className="flex justify-between text-[16px] text-[#C1C2C4] font-normal">
              <span className="sm:w-[250px]  w-[138px] text-[12px] sm:text-[16px]">
                Biaya Admin
              </span>{" "}
              <span className="sm:w-[81px] w-[64px] text-[12px] sm:text-[16px]">
                Rp {admin}
              </span>
            </p>
            <p className="flex justify-between text-[16px] text-[#C1C2C4] font-semibold">
              <span className="sm:w-[250px]  w-[138px] text-[12px] sm:text-[16px]">
                Total Pembayaran
              </span>{" "}
              <span className="sm:w-[81px] w-[64px] text-[12px] sm:text-[16px] sm:font-bold">
                Rp {pkt.harga + admin}
              </span>
            </p>
          </div>
          {!isVisibleForm && (
            <div className="sm:my-4">
              <p className="text-[16px] sm:text-[18px] text-white font-semibold mb-5">
                Tata Cara Pembayaran
              </p>
              <div className="text-[#C1C2C4] font-normal text-[12px] sm:text-[16px] ">
                <ol type="1" start={1} className="list-decimal ml-4">
                  <li>
                    Buka aplikasi BCA Mobile Banking atau akses BCA Internet
                    Banking.
                  </li>
                  <li>Login ke akun Anda.</li>
                  <li>Pilih menu "Transfer" atau "Pembayaran".</li>
                  <li>
                    Pilih opsi "Virtual Account" atau "Virtual Account Number".
                  </li>
                  <li>
                    Masukkan nomor virtual account dan jumlah pembayaran, lalu
                    konfirmasikan pembayaran.
                  </li>
                </ol>
              </div>
            </div>
          )}
          <button
            onClick={handleClick}
            className="bg-[#09147A] text-white w-[69px] sm:w-[94px] flex justify-center items-center rounded-[48px]
          px-4 sm:px-[26px] py-2 sm:py-[10px] text-[14px] sm:text-[16px]"
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranComponent;
