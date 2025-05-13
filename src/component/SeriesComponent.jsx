import React from "react";
import { series } from "../data/data";
import { useState, useEffect } from "react";
import duty from "../assets/duty.png";
const SeriesComponent = ({ header, location }) => {
  const [popup, setPopUp] = useState(false);
  const [popUpIndex, setPopUpIndex] = useState(null);
  const episode = [1, 2, 3, 4, 5];
  const film=[1,2,3]

  return (
    <div className="sm:py-10 sm:px-20 px-5 py-1.5 text-white">
      <h3 className="sm:text-3xl text-[20px] font-bold mb-4 mt-4 sm:mt-0">
        {header}
      </h3>
      <div className="flex justify-between overflow-auto sm:overflow-visible scrollbar-hide scroll-smooth sm:gap-6 gap-3 relative poointer-events-none">
        <div className="absolute w-full h-full z-49 sm:flex hidden justify-between items-center pointer-events-none">
          <p className="flex items-center justify-center -ms-[20px] w-[40px] h-[40px] rounded-[50px] bg-[#2F3334] cursor-pointer">
            ←
          </p>
          <p className="flex items-center justify-center -me-[20px] w-[40px] h-[40px] rounded-[50px] bg-[#2F3334] cursor-pointer">
            →
          </p>
        </div>
        {/* modal */}

        {popup && (
          <>
            <div className="fixed inset-0 z-49 bg-black/70"></div>
            <div
              onClick={() => setPopUp(!popup)}
              className="fixed inset-0  flex items-center justify-center z-49 "
            >
              <div className="bg-[#181a1c] sm:mt-[50px] w-[300px] sm:w-[800px] max-h-[70vh] overflow-y-auto rounded-2xl scrollbar-hide z-50">
                <div
                  className={` w-full h-[160px] sm:h-[500px] bg-cover bg-center relative`}
                  style={{
                    backgroundImage: `url(${series[popUpIndex].image})`,
                  }}
                >
                  <div className="bg-black/40 inset-0 absolute sm:px-10 px-5">
                  <p className="sm:top-[20px] sm:right-[20px] top-3 right-3 absolute sm:w-[30px] sm:h-[30px] w-[15px] h-[15px] p-2 text-[10px] sm:text-[14px] bg-black text-white rounded-full flex justify-center items-center cursor-pointer">x</p>
                    <div className=" absolute sm:bottom-[50px] bottom-5 w-[240px] sm:w-[720px] ">
                      <h1 className="font-bold sm:text-[32px] text-[16px] sm:mb-4 mb-2">
                        Ted Lasso
                      </h1>
                      <div className="flex justify-between items-center ">
                        <div className="flex items-center">
                          <button className="text-white bg-[#0F1E92] flex justify-center items-center sm:px-6 px-3 py-1 rounded-2xl me-3">
                            Mulai
                          </button>
                          <span className="flex justify-center items-center w-[30px] h-[30px] rounded-full p-2 border border-white">
                            +
                          </span>
                        </div>
                        <div className="w-[30px] h-[30px] flex justify-center items-center p-2 border border-white rounded-full">
                          🔇
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:mx-10 mx-5 mt-12">
                  <div className="sm:w-[380px] w-[280px] p-2 sm:text-[16px] text-[10px] text-[#C1C2C4]">
                    <div className="flex items-center mb-3">
                      <span className="me-3">2020</span>
                      <span className="me-3">10 episode</span>
                      <span className="w-[30px] h-[30px] border border-[#C1C2C4] p-2 flex justify-center items-center rounded-full">
                        18+
                      </span>
                    </div>
                    <p>
                      Pelatih sepak bola perguruan tinggi Amerika Ted Lasso
                      pergi ke London untuk mengelola AFC Richmond, tim sepak
                      bola Liga Utama Inggris yang kesulitan.
                    </p>
                  </div>
                  <div className=" p-2 sm:w-[380px] w-[280px] text-[10px] sm:text-[16px] text-[#C1C2C4]">
                    <div className="flex mb-2">
                      <p className="w-[150px]  ">Cast</p>
                      <span className="me-1">:</span>
                      <p className="w-[250px]">
                        Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick
                        Mohammed, dan lain-lain
                      </p>
                    </div>
                    <div className="flex mb-2">
                      <p className="w-[150px] ">Genre</p>
                      <span className="me-1">:</span>
                      <p className="w-[250px]">Komedi, Drama, Olahraga</p>
                    </div>
                    <div className="flex">
                      <p className="w-[150px]">Pembuat Film</p>
                      <span className="me-1">:</span>
                      <p className="w-[250px]">
                        Brendan Hunt, Joe Killy, Bill Lawrence
                      </p>
                    </div>
                  </div>
                </div>
                {location === "series" ? (
                  <div className="sm:mx-10 mx-5 mt-12">
                    <h1 className="sm:text-[24px] text-[12px] text-white mb-3 font-bold ">
                      Episode
                    </h1>
                    {episode.map((item) => (
                      <div className="flex items-center py-4 sm:px-6 px-2 sm:gap-6 gap-2 ">
                        <p className="sm:text-[18px] text-[10px]">{item}</p>
                        <img
                          className="sm:w-[170px] sm:h-[96px] w-[58px] h-[32px] object-cover"
                          src={series[popUpIndex].image}
                          alt=""
                        />
                        <div>
                          <div className="flex justify-between sm:text-[18px] text-[10px] text-white font-semibold sm:mb-2">
                            <p>Part</p>
                            <p>30 min</p>
                          </div>
                          <p className="sm:w-[470px] w-auto sm:text-[18px] text-[10px] text-[#C1C2C4] font-light sm:line-clamp-none line-clamp-1">
                            American football coach Ted Lasso is hired by a
                            wealthy divorcee to coach the English soccer team
                            AFC Richmond
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="sm:mx-10 mx-5 sm:my-12 my-6">
                    <h1 className="sm:text-[24px] text-[12px] text-white font-bold mb-3">
                      Rekomendasi Film Serupa
                    </h1>
                    <div className="flex gap-2 justify-between">
                      {film.map((item)=>(
                        <img className="sm:w-[234px] sm:h-[365px] w-[87px] h-[132px] rounded-2xl object-cover" src={series[popUpIndex].image}/>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {series.map((item, index) => (
          <div
            key={index}
            className="sm:w-[190px] sm:h-[340px] w-[100px] h-[160px] shrink-0 relative"
            onClick={() => {
              setPopUp(!popup), setPopUpIndex(index);
            }}
          >
            <img
              className="w-full h-full rounded-lg object-cover z-50"
              src={item.image}
              alt=""
            />
            {item.isPremium && (
              <div className="absolute inset-0 flex items-start sm:p-4 p-2 bg-black/40 rounded-lg">
                <p className="bg-[#B7A207] py-1 px-2.5 rounded-2xl sm:text-[12px] text-[5px]">
                  Premium
                </p>
              </div>
            )}
            {item.isTrending && (
              <div className="absolute inset-0 flex items-start justify-end bg-black/40 rounded-lg">
                <p className="bg-red-800 text-white sm:w-[31px] w-[20px] text-[10px] sm:text-[15px] me-2 sm:p-1 p-0.5 text-center rounded-b-[4px]">
                  Top 10
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesComponent;
