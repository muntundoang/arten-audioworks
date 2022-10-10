import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Mixer from "../img/aboutus.png";

function Aboutus() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-primary flex justify-center items-center">
      <div className="h-screen py-[80px] lg:w-[1000px] sm:w-[700px] w-[400px] flex flex-col items-center">
        <div className="flex justify-center items-start md:w-full sm:w-[500px] w-[300px] md:space-x-20 sm:space-x-3 mb-8 lg:mt-0 mt-6">
          <div className="flex justify-center items-center sm:space-x-20 space-x-10 ">
            <div
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <BiArrowBack size="40px" color="white" />
              <p className="text-white font-body ">Back</p>
            </div>
            <div className="font-title lg:h-14 lg:w-14 sm:h-10 sm:w-10 h-8 w-8 rounded-full bg-button flex justify-center items-center lg:text-xl sm:text-base text-xs text-white font-bold">
              REC
            </div>
            <p className="lg:w-[300px] sm:w-[200px] text-neutral-400 lg:text-sm text-xs font-body sm:inline hidden">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              illum ducimus nam dolores, nobis dolorum architecto? Perspiciatis
              facere magnam accusamus.
            </p>
          </div>
          <div className="sm:ml-0 ml-10">
            <p className="font-title text-white lg:text-6xl sm:text-4xl text-xl font-bold tracking-widest lg:w-[300px] md:w-[150px] w-[80px]">
              About our studio
            </p>
            <p className="font-title text-white lg:text-sm text-xs mt-2 w-[80px]">
              We exist to make your projects better
            </p>
          </div>
        </div>
        <div className="flex sm:justify-between justify-center">
          <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-x-20 sm:gap-x-10 sm:gap-y-0 gap-y-5">
            <div>
              <p className="font-title font-bold text-white">#01</p>
              <p className="font-body text-neutral-400 lg:w-[300px] w-[200px]  sm:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                commodi sunt laboriosam natus cum nam!
              </p>
            </div>
            <div>
              <p className="font-title font-bold text-white">#02</p>
              <p className="font-body text-neutral-400 lg:w-[300px] w-[200px] sm:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                commodi sunt laboriosam natus cum nam!
              </p>
            </div>
            <div>
              <p className="font-title font-bold text-white">#03</p>
              <p className="font-body text-neutral-400 lg:w-[300px] w-[200px] sm:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                commodi sunt laboriosam natus cum nam!
              </p>
            </div>
          </div>
          <div className="sm:inline hidden md:mr-0 sm:mr-4 ">
            <img className="" src={Mixer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
