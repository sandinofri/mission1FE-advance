import React from "react";
import { useState, useEffect, useRef } from "react";
import HeroComponent from "../component/HeroComponent";
import ContinueWatch from "../component/ContinueWatch";
import TopRating from "../component/TopRating";
import FilmTrending from "../component/FilmTrending";
import RilisBaru from "../component/RilisBaru";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";
import ProfileDropDownComponent from "../component/ProfileDropDownComponent";
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    let timeoutId;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div>
      <NavbarComponent
        togleDropDown={() => {
          setShowDropdown((prev) => !prev);
        }}
        isVisible={false}
      />
      {showDropdown && (
        <div ref={dropdownRef}>
          <ProfileDropDownComponent />
        </div>
      )}
      <HeroComponent
        classProperty="hero"
        tittle="Duty After School"
        desc="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
        isVisible={false}
      />
      <ContinueWatch />
      <TopRating />
      <FilmTrending />
      <RilisBaru />
      <FooterComponent />
    </div>
  );
};

export default Beranda;
