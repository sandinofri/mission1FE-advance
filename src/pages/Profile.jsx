import React from "react";
import { useState, useEffect, useRef } from "react";
import NavbarComponent from "../component/NavbarComponent";
import DaftarSayaComponent from "../component/DaftarSayaComponent";
import FooterComponent from "../component/FooterComponent";
import ProfileComponent from "../component/ProfileComponent";
import ProfileDropDownComponent from "../component/ProfileDropDownComponent";

const Profile = () => {
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
        isVisible={false}
      />
      {showDropdown && <div ref={dropdownRef}><ProfileDropDownComponent /></div> }
      <ProfileComponent />
      <DaftarSayaComponent />
      <FooterComponent />
    </>
  );
};

export default Profile;
