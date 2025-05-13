import React from "react";
import {useState,useEffect,useRef} from "react";
import HeroComponent from "../component/HeroComponent";
import ContinueWatch from "../component/ContinueWatch";
import TopRating from "../component/TopRating";
import FilmTrending from "../component/FilmTrending";
import RilisBaru from "../component/RilisBaru";
import SeriesComponent from "../component/SeriesComponent";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";
import ProfileDropDownComponent from "../component/ProfileDropDownComponent";

const Series = () => {
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
        classProperty="series"
        tittle="Happiness"
        desc="Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen."
        isVisible={true}
      />
      <ContinueWatch />
      <SeriesComponent header="Series Persembahan Chill" location="series"/>
      <TopRating />
      <FilmTrending />
      <RilisBaru />
      <FooterComponent />
    </>
  );
};

export default Series;
