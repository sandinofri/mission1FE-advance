import React from "react";
import star from "../assets/star.png";
import exit from "../assets/exit.png";
import myProfile from "../assets/my profile.png";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { deleteUser } from "../service/api";

const ProfileDropDownComponent = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleDeleteAccount = () => {
    try {
      deleteUser(user.id);
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id="toggle-menu"
      className=" fixed sm:fixed md:fixed 2xl:sticky 2xl:w-[200px] 2xl:right-0 z-50 bg-[#181a1c] right-5 sm:right-[80px] top-[35px] sm:top-[100px] p-1 rounded-sm text-white text-[10px] font-medium"
    >
      <Link to={"/profile"} className="px-3 py-2 flex items-center gap-1">
        <img className="w-[16px]" src={myProfile} alt="" />
        <span className="text-blue-600">Profil Saya</span>
      </Link>
      <div className="px-3 py-2 flex items-center gap-1">
        <img className="w-[16px]" src={star} alt="" />
        <span>Ubah Premium</span>
      </div>
      <Link
        to="/"
        className="px-3 py-2 flex items-center gap-1"
        onClick={() => localStorage.removeItem("user")}
      >
        <img className="w-[16px]" src={exit} alt="" />
        <span>Keluar</span>
      </Link>
      <Link
        to="/"
        className="px-3 py-2 flex items-center gap-1"
        onClick={() => {
          if (confirm("Apakah anda yakin ingin menghapus akun?")) {
            handleDeleteAccount();
          }
        }}
      >
        <FiTrash size={16} />
        <span>Hapus Akun</span>
      </Link>
    </div>
  );
};

export default ProfileDropDownComponent;
