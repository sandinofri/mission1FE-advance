import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Beranda from "./pages/Beranda";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Film from "./pages/Film";
import Series from "./pages/Series";
import DaftarSaya from "./pages/DaftarSaya";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PaketLangganan from "./pages/PaketLangganan";
import Pembayaran from "./pages/Pembayaran";

function App() {
  return (
    
    <div className="bg-[#181a1c]">
      <BrowserRouter>      
        <Routes>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/series" element={<Series />} />
          <Route path="/film" element={<Film />} />
          <Route path="/daftar saya" element={<DaftarSaya />} />
          <Route path="/*" element={<Login isVisible={false}/>} />
          <Route path="/register" element={<Register isVisible={false}/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/langganan" element={<PaketLangganan/>} />
          <Route path="/pembayaran/:id" element={<Pembayaran/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
