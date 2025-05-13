import React from "react";
import eye from "../assets/eye-off.png";
import { useState } from "react";

const InputFieldComponent = ({
  text,
  placeholder,
  isVisible,
  type,
  id,
  name,
  onChange
}) => {

  return (
    <div className="mb-[15px]">
      <label htmlFor={id} className="text-white text-[10px] mb-[5px]">
        {text}
      </label>
      <div className="relative border border-white rounded-2xl  text-slate-500 text-[10px] w-[250px] h-[30px] flex items-center">
        <input
          className="w-full h-full rounded-2xl ps-[10px]"
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          onChange={onChange}
        />
        {isVisible && <img className="absolute right-2" src={eye} alt="" />}
      </div>
    </div>
  );
};

export default InputFieldComponent;
