import React from 'react';
import bg from '../../assets/images/contactbg.png';

const Contact = () => {
  return (
    <div
      className="h-[90vh]  bg-cover bg-center flex flex-col md:flex-row-reverse"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Left Section */}
      <div className="details px-6 py-10 w-full md:w-[50%] flex flex-col justify-center sm:order-2 sm:w-full">
        <h2 className="text-[24px] md:text-[36px] text-white font-bold leading-tight">
          Have More Questions?
        </h2>
        <h3 className="text-[16px] md:text-[20px] text-gray-200 font-light mt-2">
          Reach out to us. Our support team is here to assist you.
        </h3>
        <div className="mt-6 space-y-4">
          <h3 className="text-gray-100 font-medium text-[16px] md:text-[18px] flex items-center">
            <i className="ri-mail-line text-[20px] md:text-[22px] mr-2"></i>
            Hrd@Theunivoc.Com
          </h3>
          <h3 className="text-gray-100 font-medium text-[16px] md:text-[18px] flex items-center">
            <i className="ri-phone-fill text-[20px] md:text-[22px] mr-2"></i>
            +91 84483 73884
          </h3>
        </div>
      </div>

      {/* Right Section */}
      <div className="contactform flex justify-center items-center w-full md:w-[50%] sm:order-1 sm:w-full sm:pt-4">
        <form
          action=""
          className="z-10 bg-white w-[90%] md:w-[50%] flex flex-col h-auto md:h-[80%] items-center gap-4 px-6 py-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Full Name*"
            className="border-b-[2px] border-gray-300 focus:border-blue-500 transition-all bg-transparent text-gray-700 font-medium text-[14px] md:text-[16px] outline-none py-2 w-full"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="border-b-[2px] border-gray-300 focus:border-blue-500 transition-all bg-transparent text-gray-700 font-medium text-[14px] md:text-[16px] outline-none py-2 w-full"
          />
          <input
            type="number"
            placeholder="Mobile Number*"
            className="border-b-[2px] border-gray-300 focus:border-blue-500 transition-all bg-transparent text-gray-700 font-medium text-[14px] md:text-[16px] outline-none py-2 w-full"
          />
          <div className="flex flex-col md:flex-row w-full gap-4">
            <input
              type="text"
              placeholder="State*"
              className="border-b-[2px] border-gray-300 focus:border-blue-500 transition-all bg-transparent text-gray-700 font-medium text-[14px] md:text-[16px] outline-none py-2 w-full md:w-[50%]"
            />
            <input
              type="text"
              placeholder="City*"
              className="border-b-[2px] border-gray-300 focus:border-blue-500 transition-all bg-transparent text-gray-700 font-medium text-[14px] md:text-[16px] outline-none py-2 w-full md:w-[50%]"
            />
          </div>
          <input
            type="text"
            placeholder="School Name*"
            className="border-b-[2px] border-gray-300 focus:border-blue-500 transition-all bg-transparent text-gray-700 font-medium text-[14px] md:text-[16px] outline-none py-2 w-full"
          />
          <textarea
            placeholder="Write your note"
            className="w-full h-32 md:h-40 px-4 py-2 text-gray-700 font-medium border-[2px] border-gray-300 focus:border-blue-500 transition-all outline-none rounded-md resize-none"
          ></textarea>
          <button
            type="submit"
            className="text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 font-medium text-[14px] md:text-[16px] w-full rounded-lg transition-all"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
