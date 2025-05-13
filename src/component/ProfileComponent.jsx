import React, { useEffect, useState } from "react";
import profilePicture from "../assets/avatar-icon.webp";
import warning from "../assets/warning.png";
import { Link } from "react-router-dom";
import { updateUser } from "../service/api";
import LoadingComponent from "./LoadingComponent";

const ProfileBerlangganan = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [confirmPassword, setConfirmPassword] = useState(user.confirmPassword);
  const [disableBtn,setDisableBtn] = useState(true);
  const [isLoading,setIsLoading]= useState(false)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setDisableBtn(false);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setDisableBtn(false);
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {
    setDisableBtn(true);
    setIsLoading(true)
    try {
      const response = await updateUser(user.id, { username, password,confirmPassword});
      console.log(response);
      alert("Berhasil mengubah data");
      setIsLoading(false)
      localStorage.setItem("user", JSON.stringify(response));
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };
  return (
    <div className="  sm:px-20 px-5 py-15 ">
      {isLoading && <LoadingComponent/>}
      <h1 className="text-white text-[24px] font-bold mb-4 hidden sm:block">
        Profile Saya
      </h1>
      <div className="flex flex-wrap-reverse sm:flex-nowrap sm:gap-20 gap-10">
        <div className="sm:w-[600px] w-full">
          <h1 className="text-white text-[24px] font-bold mb-4 sm:hidden block">
            Profile Saya
          </h1>

          <div className="flex gap-5 items-center mb-4">
            <img
              className="sm:w-[130px] sm:h-[130px] w-[75px] h-[75px] rounded-full"
              src={profilePicture}
              alt=""
            />
            <div>
              <button className="sm:py-[10px] sm:px-[22px] py-2 px-6 text-[#3254FF] border border-[#3254FF] rounded-[48px] mb-2">
                Ubah Foto
              </button>
              <p className="text-slate-500">📁 Maximal 2MB</p>
            </div>
          </div>
          <div className="w-full bg-[#22282A] rounded-lg py-2 px-4 relative mb-4">
            <p className="text-[16px] text-[#9D9EA1] font-medium">
              Nama Pengguna
            </p>

            <input
              className="w-full bg-[#22282A] rounded-lg text-white text-[18px]"
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <p className="absolute right-4 top-[50%] -translate-y-3 text-[18px]">
              ✏️
            </p>
          </div>
          <div className="w-full bg-[#22282A] rounded-lg py-2 px-4 relative mb-4">
            <p className="text-[16px] text-[#9D9EA1] font-medium">Email</p>
            <p className="text-white text-[18px]">Example@gmail.com</p>
          </div>
          <div className="w-full bg-[#22282A] rounded-lg py-2 px-4 relative mb-4">
            <p className="text-[16px] text-[#9D9EA1] font-medium">Kata Sandi</p>
            <input
              className="w-full bg-[#22282A] rounded-lg text-white text-[18px]"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="absolute right-4 top-[50%] -translate-y-3 text-[18px]">
              ✏️
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className={`py-[10px] px-[26px] text-white text-[16px] rounded-[48px] ${disableBtn ? 'bg-[#22296a]' : 'bg-[#3254FF]'} `}
            disabled={disableBtn}
          >
            Simpan
          </button>
        </div>
        <div>
          {user.isActive ? (
            <div className=" bg-gradient-to-r from-[#5370D4] to-[#192BD7] p-6 rounded-[12px]">
              <p className="bg-white text-[#0F1E93] py-[6px] px-[22px] rounded-[48px] flex justify-center items-center font-semibold w-[81px] mb-4">
                Aktif
              </p>
              <h4 className="text-white text-[24px] font-bold mb-4">
                Akun Premium Individual✨
              </h4>
              <p className="text-white text-[18px] font-normal mb-4">
                Saat ini kamu sedang menggunakan akses akun premium
              </p>
              <p className="text-[#C1C2C4] text-[16px] font-medium">
                Berlaku hingga 31 Desember 2023
              </p>
            </div>
          ) : (
            <div className="p-6 bg-[#3D4142] rounded-[12px]">
              <div className="flex gap-5 items-center mb-2">
                <img className="w-[78px]" src={warning} alt="" />
                <div>
                  <p className="text-[20px] text-white font-bold mb-2">
                    <span className="sm:inline hidden">
                      Saat ini anda belum
                    </span>
                    <span> berlangganan</span>
                  </p>
                  <p className="text-[16px] text-white font-normal">
                    Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series
                    Kesukaan Kamu!
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  to={"/langganan"}
                  className="rounded-[48px] bg-[#2F3334] py-[6px] px-[22px]  text-white text-[16px]"
                >
                  Mulai Berlangganan
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileBerlangganan;
