import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import artenLogo from "../img/ARTEN-LOGO-V2-1W.png";

function Navbar() {
  const navigate = useNavigate();
  const [checkMenu, setCheckMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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

  // return (
  //   <div>
  //     <nav className="bg-black fixed flex-col w-full">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex items-center justify-between h-16">
  //           <div className="flex w-full items-center justify-between">
  //             <div className="flex">
  //               <img
  //                 className="h-8 w-8"
  //                 src={artenLogo}
  //                 alt="Workflow"
  //               />
  //             </div>
  //             {isLogin ? (
  //               <div className="hidden md:block">
  //               <div className="ml-10 flex items-baseline space-x-4">
  //                 <p
  //                   className=" cursor-pointer hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Hello Art Friends!
  //                 </p>
  //               </div>
  //             </div>
  //             ) : (
  //             <div className="flex invisible justify-center items-center space-x-5 md:visible">
  //               {/* <!-- Login --> */}
  //               <p className="text-white cursor-default text-lg"> Hi, Art Friend!</p>
  //               <a className="flex text-white 
  //                   cursor-pointer hover:bg-gray-700 rounded-xl transition-colors p-[10px] duration-300
  //                   font-semibold">

  //                 <svg className="fill-current h-5 w-5 mr-2 mt-0.5" version="1.1" width="24" height="24"
  //                   viewBox="0 0 24 24">
  //                   <path
  //                     d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
  //                 </svg>

  //                 Login
  //               </a>
  //             </div>
  //             )}
  //           </div>
  //           <div className="mr-2 flex md:hidden">
  //             <button
  //               onClick={() => setIsOpen(!isOpen)}
  //               type="button"
  //               className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
  //               aria-controls="mobile-menu"
  //               aria-expanded="false"
  //             >
  //               <span className="sr-only">Open main menu</span>
  //               {!isOpen ? (
  //                 <svg
  //                   className="block h-6 w-6"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   aria-hidden="true"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="M4 6h16M4 12h16M4 18h16"
  //                   />
  //                 </svg>
  //               ) : (
  //                 <svg
  //                   className="block h-6 w-6"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   aria-hidden="true"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="M6 18L18 6M6 6l12 12"
  //                   />
  //                 </svg>
  //               )}
  //             </button>
  //           </div>
  //         </div>
  //       </div>

  //       <Transition
  //         show={isOpen}
  //         enter="transition ease-out duration-100 transform"
  //         enterFrom="opacity-0 scale-95"
  //         enterTo="opacity-100 scale-100"
  //         leave="transition ease-in duration-75 transform"
  //         leaveFrom="opacity-100 scale-100"
  //         leaveTo="opacity-0 scale-95"
  //       >
  //         {(ref) => (
  //           <div className="md:hidden" id="mobile-menu">
  //             <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
  //               <a
  //                 href="#"
  //                 className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
  //               >
  //                 Dashboard
  //               </a>

  //               <a
  //                 href="#"
  //                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //               >
  //                 Team
  //               </a>

  //               <a
  //                 href="#"
  //                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //               >
  //                 Projects
  //               </a>

  //               <a
  //                 href="#"
  //                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //               >
  //                 Calendar
  //               </a>

  //               <a
  //                 href="#"
  //                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //               >
  //                 Reports
  //               </a>
  //             </div>
  //           </div>
  //         )}
  //       </Transition>
  //     </nav>
  //   </div>
  // );

}

export default Navbar;
