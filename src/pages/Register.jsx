import React from "react";
import CardFormComponent from "../component/CardFormComponent";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center body-bg">
      <CardFormComponent isVisible={true} mode={"register"} text1={"Daftar"} text2={"Masuk"} link1={"/"} question={"Sudah punya akun?"}/>
    </div>
  );
};

export default Register;
