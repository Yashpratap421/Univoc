import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className='h-auto sm:h-auto bg-[#06102e] flex flex-col items-center gap-4 py-8'>
      {/* Top Section */}
      <div className="w-[90%] flex flex-col sm:flex-row gap-10 items-center sm:h-[10%] px-2">
        <h1 className='flex flex-col'>
          <img src={logo} alt="Logo" className='w-40' />
        </h1>
        <p className='text-white text-[12px] sm:text-[14px] text-center sm:text-left'>
          <span>"Empowering individuals with the skills to thrive in a changing world. </span>
          <span className='text-blue-300'>UNIVOC Skilling to Empower bridges talent and opportunity, driving innovation and growth for a brighter future."</span>
        </p>
      </div>

      {/* Links Section */}
      <div className="w-[90%] flex flex-col sm:flex-row justify-between sm:px-4 sm:py-8 mt-16 gap-4 sm:gap-8">
        <ul className='flex flex-col gap-4 sm:w-[22%]'>
          <li className='text-[20px] sm:text-[28px] text-white font-medium '>About us</li>
          <li className='text-[20px] sm:text-[28px] text-white font-medium '>Carrers</li>
          <li className='text-[14px] sm:text-[16px] text-gray-500 flex gap-4'>
            <i className="ri-map-pin-line"></i> <span>Address</span>
          </li>
          <li className='text-[14px] sm:text-[16px] text-gray-500 flex gap-4'>
            <i className="ri-mail-line"></i> <span>hrd@theunivoc.com</span>
          </li>
        </ul>
        <ul className='flex flex-col gap-4 sm:w-[22%]'>
          <li className='text-[20px] sm:text-[28px] text-white font-medium '>Academics</li>
          <li className='text-[14px] sm:text-[24px] text-gray-400'>Programme</li>
        </ul>
        <ul className='flex flex-col gap-4 sm:w-[22%]'>
          <li className='text-[20px] sm:text-[28px] text-white font-medium '>Innovation</li>
          <li className='text-[14px] sm:text-[24px] text-gray-400'>Student</li>
          <li className='text-[14px] sm:text-[24px] text-gray-400'>Faculty</li>
        </ul>
        <ul className='flex flex-col gap-4 sm:w-[22%]'>
          <li className='text-[20px] sm:text-[28px] text-white font-medium '>Other Links</li>
          <li className='text-[14px] sm:text-[24px] text-gray-400'>Jobs</li>
          <li className='text-[14px] sm:text-[24px] text-gray-400'>Become A Teacher</li>
          <li className='text-[14px] sm:text-[24px] text-gray-400'>Events</li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex gap-2 justify-center sm:justify-start w-[90%] sm:w-[90%] pb-2 border-b-[1px] border-white mt-4">
        <i className="text-[48px] text-white ri-twitter-x-line"></i>
        <i className="text-[48px] text-white ri-instagram-fill"></i>
        <i className="text-[48px] text-white ri-linkedin-fill"></i>
        <i className="text-[48px] text-white ri-youtube-fill"></i>
      </div>
    </div>
  );
}

export default Footer;
