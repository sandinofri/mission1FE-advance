import React, { use } from "react";
import { Link } from "react-router-dom";
import roll from "../assets/movie-open.png";
import google from "../assets/goggle.png";
import InputFieldComponent from "./InputFieldComponent";
import { useState } from "react";
import { createUser, geteUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";

const CardFormComponent = ({
  isVisible,
  text1,
  text2,
  link1,
  link2,
  question,
  mode,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    const { username, password, confirmPassword } = formData;

    if (!username || !password || (mode === "register" && !confirmPassword)) {
      alert("Silakan isi semua data");
      return;
    }

    if (mode === "register" && password !== confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    setDisableBtn(true);
    setIsLoading(true);

    try {
      if (mode === "register") {
        const response = await createUser({ username, password ,confirmPassword});
        console.log(response);
        alert("Berhasil mendaftar");
        navigate("/");
      }

      if (mode === "login") {
        const users = await geteUser();
        const foundUser = users.find(
          (item) => item.username === username && item.password === password
        );

        if (foundUser) {
          alert("Berhasil masuk");
          localStorage.setItem("user", JSON.stringify(foundUser));
          navigate("/beranda");
        } else {
          alert("Username atau password salah");
        }
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
      setDisableBtn(false);
    }
  };

  return (
    <div className="bg-[#141618] opacity-90 p-6 rounded-lg shadow-2xl">
      {isLoading && <LoadingComponent />}
      <div className="text-center mb-[15px]">
        <div className="flex items-center justify-center gap-1">
          <img className="w-[36px] h-[30px]" src={roll} alt="" />
          <h5 className="text-white text-3xl font-bold mt-1">CHILL</h5>
        </div>
        <h6 className="text-white text-2xl font-bold mt-[15px]">{text1}</h6>
        <p className="text-white text-[10px] font-light">Selamat datang!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <InputFieldComponent
          text={"Username"}
          placeholder={"Masukan username"}
          type={"text"}
          isVisible={false}
          id={"username"}
          name={"username"}
          onChange={handleChange}
        />
        <InputFieldComponent
          text={"Password"}
          placeholder={"Masukan kata sandi"}
          type={"password"}
          isVisible={true}
          id={"password"}
          name={"password"}
          onChange={handleChange}
        />
        {isVisible && (
          <InputFieldComponent
            text={"Konfirmasi Kata Sandi"}
            placeholder={"Masukan kata sandi"}
            type={"password"}
            isVisible={true}
            id={"konfirm-password"}
            name={"confirmPassword"}
            onChange={handleChange}
          />
        )}

        <div className="flex justify-between">
          <small className="text-slate-500 text-[10px]">
            {question}
            <Link to={link1} className="text-white ms-[5px]">
              {text2}
            </Link>
          </small>
          <small className="text-white text-[10px] cursor-pointer">
            Lupa kata sandi?
          </small>
        </div>
        <button
          type="submit"
          disabled={disableBtn}
          className={`flex items-center justify-center mt-[15px] border border-white text-white text-[10px] w-[250px] h-[30px] rounded-2xl  font-bold ${
            disableBtn ? "bg-slate-800" : "bg-slate-500"
          }`}
        >
          {text1}
        </button>
        <small className="text-slate-500 text-[10px] text-center block my-[5px]">
          Atau
        </small>
        <button className="flex items-center justify-center gap-x-2 border border-white text-white text-[10px] w-[250px] h-[30px] rounded-2xl font-bold">
          <img className="w-[10px]" src={google} alt="" />
          Daftar dengan Google
        </button>
      </form>
    </div>
  );
};

export default CardFormComponent;
