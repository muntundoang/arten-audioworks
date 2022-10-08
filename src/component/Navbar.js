import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import artenLogo from "../img/ARTEN-LOGO-V2-1W.png";

function Navbar() {
  const navigate = useNavigate();
  const [checkMenu, setCheckMenu] = useState(false);

  return (
    <div className="h-[120px] w-screen bg-primary flex justify-center items-center shadow-xl">
      <div className="h-32 lg:w-[1200px] sm:w-[700px] w-[400px] flex justify-between items-center relative ">
        <div
          className="p-4 h-[80px] w-32 flex justify-center items-center"
        >
          <img className="h-[80px] object-contain hover:cursor-pointer" alt="arten-logo" src={artenLogo} onClick={() => navigate("/")}></img>
        </div>
        <div
          onClick={() => setCheckMenu(!checkMenu)}
          className="w-10 h-10 rounded-full outline outline-1 outline-white flex justify-center items-center hover:cursor-pointer md:mr-0 mr-6"
        >
          {!checkMenu ? (
            <GiHamburgerMenu color="white" />
          ) : (
            <GiCancel color="white" />
          )}
        </div>
        {checkMenu ? <HamburgerMenu setCheckMenu={setCheckMenu} /> : null}
      </div>
    </div>
  );
}

export default Navbar;
