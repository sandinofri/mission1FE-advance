import React, { use } from "react";
import CardFormComponent from "../component/CardFormComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      navigate("/beranda");
    }
  }, []);
  return (
    <div className="h-screen flex items-center justify-center body-bg">
      <CardFormComponent
        isVisible={false}
        mode={"login"}
        text1={"Masuk"}
        text2={"Daftar"}
        link1={"/register"}
        link2={"/beranda"}
        question={"Belum punya akun?"}
      />
    </div>
  );
};

export default Login;
