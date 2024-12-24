import React, { useState } from "react";
import logo from "../../assets/images/logo-1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-[20%] w-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 flex items-center border-r-2 border-l-2 border-t-2 border-blue-500 rounded-t-2xl shadow-lg relative">
      {/* Left Section */}
      <div className="h-[70%] w-[70%] flex items-center gap-5 px-4 py-1 md:w-[70%]">
        <img src={logo} alt="Logo" className="h-10 w-48" />
        <button className="hidden sm:block md:flex text-blue-600 font-normal text-[14px] border-[1px] border-blue-300 rounded-full bg-white gap-1 items-center justify-center px-3 shadow-sm shadow-blue-400 py-1">
          Explore <i className="ri-arrow-drop-down-fill"></i>
        </button>
        <p className="hidden sm:flex md:flex items-center gap-2 bg-white border-[1px] border-blue-300 px-2 py-1 rounded-full w-[40%]">
          <i className="text-blue-600 font-bold ri-search-2-line"></i>
          <input
            type="text"
            placeholder="What do you want to learn today?"
            className="mr-12 outline-none border-[0px] text-gray-600 font-normal w-[80%]"
          />
          <i className="text-gray-500 ri-send-plane-fill"></i>
        </p>
      </div>

      {/* Right Section */}
      <div className="w-[30%] h-[70%] flex justify-center items-center gap-10 md:w-[30%]">
        <button className="hidden sm:block md:block bg-white text-black border-[2px] border-blue-400 px-8 py-1 text-center rounded-full text-[16px] shadow-sm hover:shadow-md hover:bg-blue-100 transition-all duration-300">
          Sign in
        </button>
        <button className="hidden sm:block md:block text-white bg-blue-600 border-[2px] border-blue-600 px-6 py-1 text-center rounded-full text-[16px] shadow-md hover:shadow-lg hover:bg-blue-700 hover:border-blue-700 transition-all duration-300">
          Register for free
        </button>
        {/* Menu Button for Small Screens */}
        <p
          className="block sm:hidden text-blue-600 text-center border-[1px] border-blue-300 rounded-full bg-white px-4 py-2 cursor-pointer shadow-md hover:bg-blue-100 hover:text-blue-800 transition-all duration-300"
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </p>
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 flex flex-col justify-center items-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-blue-600 text-2xl hover:text-blue-800 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="ri-close-line"></i>
          </button>

          {/* Menu Options */}
          <div className="flex flex-col items-center gap-6">
            <button className="text-black border-[2px] border-blue-400 px-8 py-3 w-[100%] rounded-xl text-[18px] hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
              Sign in
            </button>
            <button className="text-white bg-blue-600 border-[2px] border-blue-600 px-8 py-3 w-[100%] rounded-xl text-[18px] hover:bg-blue-700 hover:border-blue-700 transition-all duration-300">
              Register for free
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
