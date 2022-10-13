import React, { useState } from "react";
import { SiteData } from "./wrapper";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import artenLogo from "../img/ARTEN-LOGO-V2-1W.png";
import logoutPNG from "../img/logout.png"

function Navbar() {
  const navigate = useNavigate();
  const { userInfo, isLogin, setLogout } = SiteData()
  const [isOpen, setIsOpen] = useState(false);

  const handleThemain = (e) => {
    e.preventDefault()
    setIsOpen(false);
    navigate("/");
  };
  const handleRentals = (e) => {
    e.preventDefault()
    setIsOpen(false);
    navigate("/rentals");
  };
  const handleAboutus = (e) => {
    e.preventDefault()
    setIsOpen(false);
    navigate("/aboutus");
  };
  const handleEquipment = (e) => {
    e.preventDefault()
    setIsOpen(false);
    navigate("/equipment");
  };
  const handleValue = (e) => {
    e.preventDefault()
    setIsOpen(false);
    navigate("/value");
  };
  const handleContact = (e) => {
    e.preventDefault()
    setIsOpen(false);
    navigate("/contact");
  };
  const handleLoginForm = (e) => {
    e.preventDefault()
    setIsOpen(false);
    navigate("/login");
  };

  // return (
  //   <div className="h-[120px] fixed w-screen bg-primary flex justify-center items-center shadow-xl">
  //     <div className="h-32 lg:w-[1200px] sm:w-[700px] w-[400px] flex justify-between items-center relative ">
  //       <div
  //         className="p-4 h-[80px] w-32 flex justify-center items-center"
  //       >
  //         <img className="h-[80px] object-contain hover:cursor-pointer" alt="arten-logo" src={artenLogo} onClick={() => navigate("/")}></img>
  //       </div>
  //       <div
  //         onClick={() => setCheckMenu(!checkMenu)}
  //         className="w-10 h-10 rounded-full outline outline-1 outline-white flex justify-center items-center hover:cursor-pointer md:mr-0 mr-6"
  //       >
  //         {!checkMenu ? (
  //           <GiHamburgerMenu color="white" />
  //         ) : (
  //           <GiCancel color="white" />
  //         )}
  //       </div>
  //       {checkMenu ? <HamburgerMenu setCheckMenu={setCheckMenu} /> : null}
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <nav className="bg-primary/90 fixed justify-items-center flex-col w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mt-2 h-16">
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  onClick={(e) => { handleThemain(e) }}
                  className="h-8 w-8"
                  src={artenLogo}
                  alt="Workflow"
                />
              </div>
              {isLogin ? (
                <div className="hidden md:block">
                  <div className="flex items-center justify-center">
                    <p
                      className="text-white px-3 py-2 rounded-md self-center text-sm font-medium"
                    >
                      Hi, {userInfo.fullName}!
                    </p>
                    <div className="w-[35px] h-[35px] rounded-full overflow-hidden mr-[10px]">
                      <img src={userInfo.profileImage} alt="profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex text-white 
                    cursor-pointer hover:bg-gray-700 rounded-xl transition-colors p-[10px] items-center duration-300
                    font-semibold" onClick={(e) => {setLogout(e)}}>

                      <div className="w-[35px] h-[35px] rounded-full overflow-hidden mr-[10px]">
                        <img src={logoutPNG} alt="logout sign" className="w-full h-full object-cover" />
                      </div>
                      Log Out
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex invisible justify-center items-center space-x-5 md:visible">
                  {/* <!-- Login --> */}
                  <p className="text-white cursor-default text-lg"> Hi, Art Friend!</p>
                  <div className="flex text-white 
                    cursor-pointer hover:bg-gray-700 rounded-xl transition-colors p-[10px] duration-300
                    font-semibold" onClick={(e) => {handleLoginForm(e)}}>

                    <svg className="fill-current h-5 w-5 mr-2 mt-0.5" version="1.1" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path
                        d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                    </svg>
                    Login
                  </div>
                </div>
              )}
            </div>
            <div className="mr-2 flex md:hidden">
              <div className="place-items-end mr-2 self-center">
                <p
                  className="text-right text-clip overflow-hidden text-white rounded-md text-xs font-medium"
                >
                  Hi, {userInfo.fullName}!
                </p>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  !isLogin ? (
                    <svg
                      className="block w-[35px] h-[35px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <div class="w-[35px] h-[35px] rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                      <img src={userInfo.profileImage} alt="" className="w-full h-full object-cover" />
                    </div>
                  )
                ) : (
                  <svg
                    className="w-[35px] h-[35px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div
                  onClick={(e) => { handleRentals(e) }}
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Rental Price
                </div>
                <div
                  onClick={(e) => { handleEquipment(e) }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Eqipment
                </div>
                <div
                  onClick={(e) => { handleRentals(e) }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Booking Calendar
                </div>
                <div
                  onClick={(e) => { handleValue(e) }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Value
                </div>
                <div
                  onClick={(e) => { handleAboutus(e) }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </div>
                <div
                  onClick={(e) => { handleContact(e) }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </div>
                <div
                  onClick={(e) => { handleLoginForm(e) }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );

}

export default Navbar;
