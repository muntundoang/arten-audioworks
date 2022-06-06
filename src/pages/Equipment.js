import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import A from "../img/1a.png";
import B from "../img/1b.png";
import C from "../img/1c.png";
import D from "../img/1d.png";
import E from "../img/1e.png";
import F from "../img/2a.png";
import G from "../img/2b.png";
import H from "../img/2c.png";
import I from "../img/2d.png";

function Equipment() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(300vh-64px)] w-screen bg-white flex justify-center items-center">
      <div className="h-[calc(300vh-64px)] lg:w-[1000px] sm:w-[700px] w-[400px]  flex flex-col">
        <div className="flex justify-center items-start w-full mb-10 mt-6">
          <div className="flex justify-center items-start space-x-5 ">
            <div
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <BiArrowBack size="40px" />
              <p className="text-primary font-body">Back</p>
            </div>
            <div className="font-title lg:h-14 lg:w-14 sm:h-10 sm:w-14 h-8 w-8  rounded-full bg-button flex justify-center items-center sm:text-xl text-xs text-primary font-bold">
              REC
            </div>
            <p className="lg:w-[300px] sm:w-[200px] text-primary text-sm font-body sm:inline hidden">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              illum ducimus nam dolores, nobis dolorum architecto? Perspiciatis
              facere magnam accusamus.
            </p>
          </div>
          <div className="lg:ml-0 ml-5">
            <p className="font-title text-primary lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold tracking-widest lg:w-[300px] sm:w-[250px] w-[150px] ">
              Recording accessories
            </p>
            <button
              onClick={() => navigate("/rentals")}
              className="sm:w-32 sm:h-9 w-20 h-5  rounded-3xl bg-button sm:text-base text-xs font-bold text-white mt-2"
            >
              Book Studio
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 sm:text-base text-xs">
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px] overflow-hidden  bg-neutral-500">
                <img className="sm:h-[300px] object-cover" src={A} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px]  overflow-hidden bg-neutral-500">
                <img className="h-[350px] object-cover" src={B} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px]  overflow-hidden bg-neutral-500">
                <img className="h-[400px] object-cover" src={C} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px]  overflow-hidden bg-neutral-500">
                <img className="h-[400px] object-cover" src={D} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px]  overflow-hidden bg-neutral-500">
                <img className="h-[350px] object-cover" src={E} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px]  overflow-hidden bg-neutral-500">
                <img className="h-[500px] object-cover" src={F} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px]  overflow-hidden bg-neutral-500">
                <img className="h-[320px] object-cover" src={G} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px]  overflow-hidden bg-neutral-500">
                <img className="h-[480px] object-cover" src={H} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
            <div className="space-y-6">
              <div className="sm:w-[400px] sm:h-[300px] w-[200px] h-[100px]  overflow-hidden bg-neutral-500">
                <img className="h-[300px] object-cover" src={I} alt="" />
              </div>
              <p className="font-title font-bold sm:w-[400px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipment;
