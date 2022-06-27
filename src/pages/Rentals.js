import React from "react";
import Product from "../component/data.json";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Rentals() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-64px)] w-screen bg-primary flex justify-center items-center">
      <div className="h-[calc(100vh-64px)] lg:w-[1000px] sm:w-[700px] w-[300px] flex flex-col item-center justify-start ">
        <div className="flex justify-center items-center sm:w-full w-[300px]  md:space-x-20 space-x-8 mb-8 lg:mt-0 mt-6">
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <BiArrowBack size="40px" color="white" />
            <p className="text-white font-body ">Back</p>
          </div>
          <div className="font-title lg:h-14 lg:w-14 sm:h-10 sm:w-14 h-8 w-8 rounded-full bg-button flex justify-center items-center lg:text-xl sm:text-base text-xs text-white font-bold">
            REC
          </div>
          <p className="lg:w-[300px] md:w-[200px] sm:w-[150px] text-neutral-400 lg:text-sm sm:text-xs font-body sm:inline hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illum
            ducimus nam dolores, nobis dolorum architecto? Perspiciatis facere
            magnam accusamus.
          </p>
          <p className="font-title text-white sm:text-6xl text-xl font-bold tracking-widest md:w-[300px] sm:w-[200px] w-[80px]">
            Studio rental
          </p>
        </div>
        {Product.data &&
          Product.data.map((list) => (
            <div className="hover:cursor-pointer h-[100px] md:w-full sm:w-[600px] w-[300px] bg-primary border-2 border-neutral-700 hover:border-white flex justify-between items-center sm:px-10 px-5 sm:text-sm text-xs">
              <p className="font-title text-white font-bold sm:w-[120px] w-[80px]">
                {list.title}
              </p>
              <p className="text-neutral-400 sm:w-[300px] sm:inline hidden">
                {list.desc}
              </p>
              <p className="text-white font-bold">{list.price}</p>
              <button className="sm:w-20 sm:h-9 w-12 h-6 rounded-3xl bg-button text-white font-bold">
                Book
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Rentals;
