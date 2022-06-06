import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const navigate = useNavigate();
  const [checkMenu, setCheckMenu] = useState(false);

  return (
    <div className="h-16 w-screen bg-primary flex justify-center shadow-xl">
      <div className="h-16 lg:w-[1000px] sm:w-[700px] w-[400px] flex  justify-between items-center relative ">
        <div
          onClick={() => navigate("/")}
          className="hover:cursor-pointer font-title text-white h-10 w-36 rounded-2xl bg-button flex justify-center items-center"
        >
          <p className="font-extralight">Arten &nbsp;</p>
          <p className="font-bold">Audioworks</p>
        </div>
        <div
          onClick={() => setCheckMenu(!checkMenu)}
          className="w-10 h-10 rounded-full outline outline-1 outline-white flex justify-center items-center hover:cursor-pointer"
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
