import React from "react";
import  { useState, useEffect, useRef } from "react";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";
import ProfileDropDownComponent from "../component/ProfileDropDownComponent";
import PembayaranComponent from "../component/PembayaranComponent";

const Pembayaran = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
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
    <>
      <NavbarComponent
        togleDropDown={() => {
          setShowDropdown((prev) => !prev);
        }}
        isVisible={true}
      />
      {showDropdown && (
        <div ref={dropdownRef}>
          <ProfileDropDownComponent />
        </div>
      )}
      <PembayaranComponent/>
      <FooterComponent />
    </>
  );
};

export default Pembayaran;
