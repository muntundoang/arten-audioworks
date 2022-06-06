import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Operator from "../img/value.png";

function Value() {
  const navigate = useNavigate();

  return (
    <div className="sm:h-[calc(120vh-64px)] h-[calc(200vh-64px)] w-screen bg-primary flex justify-center items-center">
      <div className="sm:h-[calc(120vh-64px)] h-[calc(200vh-64px)] lg:w-[1000px] sm:w-[700px] w-[400px] flex flex-col items-center">
        <div className="flex justify-center items-start md:w-full sm:w-[500px] w-[300px] space-x-20  mb-8 lg:mt-0 mt-6">
          <div className="flex justify-center items-center space-x-20 ">
            <div
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <BiArrowBack size="40px" color="white" />
              <p className="text-white font-body ">Back</p>
            </div>
            <p className="lg:w-[300px] sm:w-[200px] text-neutral-400 lg:text-sm text-xs font-body sm:inline hidden">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              illum ducimus nam dolores, nobis dolorum architecto? Perspiciatis
              facere magnam accusamus.
            </p>
          </div>
          <div>
            <p className="font-title text-white lg:text-6xl sm:text-4xl text-xl font-bold tracking-widest lg:w-[300px] sm:w-[180px] w-[80px]">
              Our Value is clients
            </p>
            <p className="font-title text-neutral-400 lg:text-sm text-xs mt-2 sm:w-[150px] w-[80px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              magni.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <div className="relative w-[300px] md:inline hidden ">
            <img
              className="absolute top-[-120px] w-[250px] rounded-lg"
              src={Operator}
              alt=""
            />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-20">
            <div>
              <p className="font-title font-bold text-white">Value #01</p>
              <p className="font-body text-neutral-400 lg:w-[300px] w-[200px] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                commodi sunt laboriosam natus cum nam!
              </p>
            </div>
            <div>
              <p className="font-title font-bold text-white">Value #02</p>
              <p className="font-body text-neutral-400 lg:w-[300px] w-[200px] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                commodi sunt laboriosam natus cum nam!
              </p>
            </div>
            <div>
              <p className="font-title font-bold text-white">Value #03</p>
              <p className="font-body text-neutral-400 lg:w-[300px] w-[200px] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                commodi sunt laboriosam natus cum nam!
              </p>
            </div>
            <div>
              <p className="font-title font-bold text-white">Value #04</p>
              <p className="font-body text-neutral-400 lg:w-[300px] w-[200px] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                commodi sunt laboriosam natus cum nam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;
