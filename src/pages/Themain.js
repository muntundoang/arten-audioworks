import React from "react";
import Mic from "../img/condenser.png";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
// import { BsTelegram, BsSpotify } from "react-icons/bs";
// import { FaSoundcloud, FaMusic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Themain() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-64px)] w-screen bg-primary flex justify-center">
      <div className="h-[calc(100vh-64px)] lg:w-[1000px] sm:w-[700px] w-[400px] flex flex-col items-center justify-center">
        <div className="flex justify-center items-center lg:mt-0 mt-10 ">
          <div className="sm:inline hidden font-title  lg:w-[200px] md:w-[150px] ">
            <div
              onClick={() => navigate("/")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style ">
                The main
              </p>
            </div>
            <div
              onClick={() => navigate("/rentals")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style">
                Rentals
              </p>
            </div>
            <div
              onClick={() => navigate("/aboutus")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style">
                About us
              </p>
            </div>
            <div
              onClick={() => navigate("/equipment")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style">
                Equipment
              </p>
            </div>
            <div
              onClick={() => navigate("/value")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style">
                Value
              </p>
            </div>
            <div className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] ">
              <p
                onClick={() => navigate("/contact")}
                className="hover:absolute hover:ml-6 font-bold text-2xl style"
              >
                Contact
              </p>
            </div>
          </div>
          <div className=" lg:w-[250px] md:w-[200px] sm:inline hidden">
            <img className="" src={Mic} alt="" />
          </div>
          <div className="w-[300px] lg:ml-28 md:ml-10 flex flex-col justify-center items-center">
            <p className="font-title text-white text-6xl font-bold relative tracking-widest">
              Recording Studio in Arten{" "}
              
            </p>`
            <button
                onClick={() => navigate("/rentals")}
                className="flex justify-center items-center w-52 h-14 rounded-2xl bg-button text-4xl font-bold text-white "
              >
                Book Now
              </button>`
          </div>
        </div>
        <div className="flex sm:justify-between sm:items-end sm:flex-row justify-end items-center sm:space-y-0 space-y-6 flex-col w-full h-full mb-4 text-white font-title text-sm">
          <div className="flex space-x-10">
            <div className="flex flex-col items-center">
              <a href="https://www.youtube.com/channel/UCeBxgt4kNAqLrtaEG9XYJLg" target="_blank" rel="noopener noreferrer">
              <AiFillYoutube size="30px"/>
              </a>
              <p>Youtube</p>
            </div>
            {/* <div className="flex flex-col items-center">
              <BsTelegram size="30px" />
              <p>Telegram</p>
            </div> */}
            <div className="flex flex-col items-center">
            <a href="https://www.instagram.com/arten.audioworks" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size="30px" />
            </a>
              <p>Instagram</p>
            </div>
          </div>
          {/* <div className="flex space-x-10">
            <div className="flex flex-col items-center">
              <BsSpotify size="30px" />
              <p>Spotify</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMusic size="30px" />
              <p>Apple Music</p>
            </div>
            <div className="flex flex-col items-center">
              <FaSoundcloud size="30px" />
              <p>SoundCloud</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Themain;
