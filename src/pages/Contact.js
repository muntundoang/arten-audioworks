import React from "react";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { BsTelegram, BsSpotify } from "react-icons/bs";
import { FaSoundcloud, FaMusic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="sm:h-[calc(100vh-64px)] h-[calc(100vh-64px)] w-screen bg-white flex justify-center items-center">
      <div className="sm:h-[calc(100vh-64px)] h-[calc(100vh-64px)] lg:w-[1000px] sm:w-[700px] w-[400px] flex flex-col items-center justify-center sm:space-y-0 space-y-10">
        <div className="flex sm:flex-row flex-col sm:justify-center sm:items-start justify-start items-center sm:mt-20 mt-10">
          <div className="font-title  sm:inline hidden  lg:w-[200px] md:w-[150px] ">
            <div
              onClick={() => navigate("/")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style-white ">
                The main
              </p>
            </div>
            <div
              onClick={() => navigate("/rentals")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style-white">
                Rentals
              </p>
            </div>
            <div
              onClick={() => navigate("/aboutus")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style-white">
                About us
              </p>
            </div>
            <div
              onClick={() => navigate("/equipment")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style-white">
                Equipment
              </p>
            </div>
            <div
              onClick={() => navigate("/value")}
              className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] "
            >
              <p className="hover:absolute hover:ml-6 font-bold text-2xl style-white">
                Value
              </p>
            </div>
            <div className="hover:my-5 my-3 hover:w-4 hover:h-4 hover:rounded-full hover:bg-button hover:cursor-pointer hover:flex hover:items-center hover:ml-[-24px] ">
              <p
                onClick={() => navigate("/contact")}
                className="hover:absolute hover:ml-6 font-bold text-2xl style-white"
              >
                Contact
              </p>
            </div>
          </div>
          <div className="md:w-[300px] sm:w-[200px] space-y-3 sm:px-4">
            <div className="space-y-2">
              <p className="font-title text-primary font-bold">
                STUIDIO BOOKING AND PRIVATE COMUNICATION
              </p>
              <p className="font-body text-xs">STEREO.LINE@INFO.COM</p>
            </div>
            <div className="space-y-1">
              <p className="font-title text-primary font-bold">
                CONTACT THE ADMINISTRAION
              </p>
              <p className="font-body text-xs">STEREO.LINE@INFO.COM</p>
            </div>
            <div className="space-y-1">
              <p className="font-title text-primary font-bold">RECORD MUSIC</p>
              <p className="font-body text-xs">STEREO.LINE@INFO.COM</p>
            </div>
            <div className="space-y-1">
              <p className="font-title text-primary font-bold">CALL</p>
              <p className="font-body text-xs">+628112400365</p>
            </div>
            <div className="space-y-1">
              <p className="font-title text-primary font-bold">LOCATION</p>
              <p className="font-body text-xs">
                Jl. Tirtasari No.11, Sarijadi, Kec. Sukasari, Kota Bandung, Jawa
                Barat 40151
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-title text-primary font-bold">WORK SCHEDULE</p>
              <p className="font-body text-xs">No weekends and lunch breaks!</p>
            </div>
          </div>
          <div className="lg:w-[300px] sm:w-[250px] lg:ml-28 sm:ml-0 flex flex-col sm:items-start items-center">
            <p className="font-title text-primary text-6xl font-bold relative tracking-widest sm:inline hidden">
              Contacts with us
            </p>
            <p className="text-neutral-600 w-44 font-body text-xs mt-2 sm:inline hidden">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
              soluta.
            </p>
            <iframe
              title="google maps"
              className="mt-6 lg:w-[300px] lg:h-[200px] sm:w-[250px] sm:h-[200px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.49103877024!2d107.5752112!3d-6.8758923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a235ae645191899!2sArten%20Audioworks!5e0!3m2!1sid!2sid!4v1654272152498!5m2!1sid!2sid"
            ></iframe>
          </div>
        </div>
        <div className="flex sm:justify-between sm:items-end sm:flex-row justify-end items-center sm:space-y-0 space-y-6 flex-col w-full h-full mb-4 text-primary font-title text-sm">
          <div className="flex space-x-10">
            <div className="flex flex-col items-center">
              <AiFillYoutube size="30px" />
              <p>Youtube</p>
            </div>
            <div className="flex flex-col items-center">
              <BsTelegram size="30px" />
              <p>Telegram</p>
            </div>
            <div className="flex flex-col items-center">
              <AiFillInstagram size="30px" />
              <p>Instagram</p>
            </div>
          </div>
          <div className="flex space-x-10">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
