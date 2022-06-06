import React from "react";
import { useNavigate } from "react-router-dom";

function HamburgerMenu({ setCheckMenu }) {
  const navigate = useNavigate();

  const handleThemain = () => {
    setCheckMenu(false);
    navigate("/");
  };
  const handleRentals = () => {
    setCheckMenu(false);
    navigate("/rentals");
  };
  const handleAboutus = () => {
    setCheckMenu(false);
    navigate("/aboutus");
  };
  const handleEquipment = () => {
    setCheckMenu(false);
    navigate("/equipment");
  };
  const handleValue = () => {
    setCheckMenu(false);
    navigate("/value");
  };
  const handleContact = () => {
    setCheckMenu(false);
    navigate("/contact");
  };

  return (
    <div className="z-20 flex flex-col justify-center items-center absolute sm:h-[120px] h-[350px] w-32 right-0 top-14 bg-button  rounded-lg">
      <div>
        <div className=" font-title sm:hidden sm:mt-0 mb-4">
          <div
            onClick={() => handleThemain()}
            className=" hover:cursor-pointer hover:flex hover:items-center  "
          >
            <p className=" font-bold text-2xl text-white ">The main</p>
          </div>
          <div
            onClick={() => handleRentals()}
            className=" hover:cursor-pointer hover:flex hover:items-center  "
          >
            <p className=" font-bold text-2xl text-white">Rentals</p>
          </div>
          <div
            onClick={() => handleAboutus()}
            className=" hover:cursor-pointer hover:flex hover:items-center  "
          >
            <p className=" font-bold text-2xl text-white">About us</p>
          </div>
          <div
            onClick={() => handleEquipment()}
            className=" hover:cursor-pointer hover:flex hover:items-center  "
          >
            <p className=" font-bold text-2xl text-white">Equipment</p>
          </div>
          <div
            onClick={() => handleValue()}
            className=" hover:cursor-pointer hover:flex hover:items-center  "
          >
            <p className=" font-bold text-2xl text-white">Value</p>
          </div>
          <div className=" hover:cursor-pointer hover:flex hover:items-center  ">
            <p
              onClick={() => handleContact()}
              className=" font-bold text-2xl text-white"
            >
              Contact
            </p>
          </div>
        </div>
      </div>
      <button className="h-10 w-20 rounded-lg text-primary bg-white mb-4">
        LOG IN
      </button>
      <button className="h-10 w-20 rounded-lg text-white bg-primary">
        SIGN UP
      </button>
    </div>
  );
}

export default HamburgerMenu;
