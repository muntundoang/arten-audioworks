import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function HamburgerMenu({ setCheckMenu }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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
  const handleLoginForm = () => {
    setCheckMenu(false);
    navigate("/login");
  };

  // return (
  //   <div className="z-20 flex flex-col justify-center items-center absolute sm:h-[120px] h-[350px] w-32 right-16  top-14 bg-button  rounded-lg">
  //     <div>
  //       <div className=" font-title sm:hidden sm:mt-0 mb-4">
  //         <div
  //           onClick={() => handleThemain()}
  //           className=" hover:cursor-pointer hover:flex hover:items-center  "
  //         >
  //           <p className=" font-bold text-2xl text-white ">The main</p>
  //         </div>
  //         <div
  //           onClick={() => handleRentals()}
  //           className=" hover:cursor-pointer hover:flex hover:items-center  "
  //         >
  //           <p className=" font-bold text-2xl text-white">Rentals</p>
  //         </div>
  //         <div
  //           onClick={() => handleAboutus()}
  //           className=" hover:cursor-pointer hover:flex hover:items-center  "
  //         >
  //           <p className=" font-bold text-2xl text-white">About us</p>
  //         </div>
  //         <div
  //           onClick={() => handleEquipment()}
  //           className=" hover:cursor-pointer hover:flex hover:items-center  "
  //         >
  //           <p className=" font-bold text-2xl text-white">Equipment</p>
  //         </div>
  //         <div
  //           onClick={() => handleValue()}
  //           className=" hover:cursor-pointer hover:flex hover:items-center  "
  //         >
  //           <p className=" font-bold text-2xl text-white">Value</p>
  //         </div>
  //         <div className=" hover:cursor-pointer hover:flex hover:items-center  ">
  //           <p
  //             onClick={() => handleContact()}
  //             className=" font-bold text-2xl text-white"
  //           >
  //             Contact
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //     <button onClick={() => handleLoginForm()} className="h-10 w-20 rounded-lg text-primary bg-white mb-4">
  //       LOG IN
  //     </button>
  //     <button className="h-10 w-20 rounded-lg text-white bg-primary">
  //       SIGN UP
  //     </button>
  //   </div>
  // );

  return (
    <div className="mr-2 flex md:hidden">
      <div className="place-items-end mr-2 self-center">
        <p
          className="text-right text-clip overflow-hidden text-white rounded-md text-xs font-medium"
        >
          Hi, Rio Lukman Tawekal askjhdgajhsdg!
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
          <div class="w-[35px] h-[35px] rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
            <img src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" className="w-full h-full object-cover" />
          </div>
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
  )
}

export default HamburgerMenu;
