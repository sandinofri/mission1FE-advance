
import roll from "../assets/movie-open.png";
import profilePicture from "../assets/avatar-icon.webp";
import { Link, useNavigate } from "react-router-dom";
import GenreComponent from "./GenreComponent";
import { useState } from "react";
import arrow from "../assets/KeyboardArrowDown.png";

const NavbarComponent = ({ togleDropDown, isVisible }) => {
  const navigate = useNavigate();
  const [genreVisible, setGenreVisible] = useState(false);
  const handleClick = () => {
    setGenreVisible(!genreVisible);
  };

  return (
    <div className="navbar sticky  top-0 w-full z-50 bg-[#181a1c] flex justify-between items-center sm:ps-[80px] sm:pe-[80px] sm:py-6 py-1.5 px-5">
      {genreVisible && (
        <div className=" text-white top-[100px]">
          <GenreComponent />
        </div>
      )}
      <div className="flex items-center sm:gap-11 gap-3 text-white">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/beranda")}
        >
          <img
            className="sm:w-[36px] sm:h-[30px] w-[24px] h-[18px]"
            src={roll}
            alt=""
          />
          <h5 className="text-white text-3xl font-bold mt-1 hidden sm:block">
            CHILL
          </h5>
        </div>
        <div className="flex items-center sm:gap-11 gap-3 text-[10px] sm:text-[18px]">
          <Link to="/series">Series</Link>
          <Link to="/film">Film</Link>
          <Link to="/daftar saya">Daftar Saya</Link>
          {isVisible && (
            <div className="sm:hidden block" onClick={handleClick}>
              <p className="flex items-center">
                Genre{" "}
                <span>
                  <img className="w-[16px]" src={arrow} alt="" />
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <div
          className="flex items-center justify-center gap-3.5"
          onClick={togleDropDown}
        >
          <img
            className="sm:w-[40px] sm:h-[40px] w-[20px] h-[20px] rounded-[50px]"
            src={profilePicture}
            alt=""
          />
          <p className="text-white text-[16px] rotate cursor-pointer">›</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
