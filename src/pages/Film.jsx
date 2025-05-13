import React from "react";
import { useState, useEffect, useRef } from "react";
import HeroComponent from "../component/HeroComponent";
import ContinueWatch from "../component/ContinueWatch";
import TopRating from "../component/TopRating";
import FilmTrending from "../component/FilmTrending";
import RilisBaru from "../component/RilisBaru";
import SeriesComponent from "../component/SeriesComponent";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";
import ProfileDropDownComponent from "../component/ProfileDropDownComponent";

const Film = () => {
 const [showDropdown, setShowDropdown] = useState(false);
   const dropdownRef = useRef(null);
 
   useEffect(() => {
     let timeoutId;
   
     const handleClickOutside = (event) => {
       if (
         dropdownRef.current &&
         !dropdownRef.current.contains(event.target)
       ) {
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
      {showDropdown && <div ref={dropdownRef}><ProfileDropDownComponent /></div> }
      <HeroComponent
        classProperty="film"
        tittle="Avatar 3"
        desc="Avatar 3 melanjutkan cerita konflik antara manusia dan Navi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Navi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi."
        isVisible={true}
      />
      <ContinueWatch />
      <SeriesComponent header="Film Persembahan Chill" />
      <TopRating />
      <FilmTrending />
      <RilisBaru />
      <FooterComponent />
    </>
  );
};

export default Film;
