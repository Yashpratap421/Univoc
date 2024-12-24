import React, { useState } from "react";
import pic from '../../assets/images/benifite.png';

const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const benefits = [
    {
      title: "Placement Facilitation",
      description:
        "Career support and placement facilitation will be provided for students who successfully complete the program.",
    },
    {
      title: "Blended Delivery",
      description:
        "The Electrical and Communication course combines online learning with in-person sessions for flexibility and hands-on experience. This approach enhances understanding, engagement, and skill development.",
    },
    {
      title: "Value Additions",
      description:
        "The students will be enabled with various other initiatives including Engineers' Ensemble, free Micro-learning, webinars, and other impactful events.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
  };

  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center py-5">
      <h1 className="text-5xl font-normal text-black pb-4 mb-4 w-[40%] border-[1px] border-b-slate-500 text-center">
        Benefits
      </h1>
      <div className="flex h-[85%] justify-between w-[100%] items-center relative"> {/* Add relative positioning here */}
        <div className="w-[90%] h-[80%] flex justify-between px-4 items-center">
          {/* Previous Benefit (Hidden on small screens) */}
          <div
            className={`previous w-[30%] h-[90%] bg-gradient-to-br from-blue-400 to-blue-600 blur-[1px] text-white p-6 flex flex-col gap-4 rounded-xl shadow-lg transition-all duration-300 ${
              currentIndex === 0 ? "opacity-50" : "opacity-80"
            } hidden sm:flex`} // hidden on small screens
          >
            <img src={pic} alt="" className="h-20 w-20" />
            <h2 className="text-2xl font-medium">
              {benefits[(currentIndex - 1 + benefits.length) % benefits.length].title}
            </h2>
            <p className="text-[16px] font-normal">
              {benefits[(currentIndex - 1 + benefits.length) % benefits.length].description}
            </p>
          </div>

          {/* Active Benefit (Centered) */}
          <div className="active w-[33%] h-[100%] rounded-xl bg-gradient-to-br from-blue-400 via-blue-300 to-blue-600 text-white p-6 flex flex-col gap-4 shadow-lg transition-all duration-300">
            <img src={pic} alt="" className="h-24 w-24" />
            <h2 className="text-2xl font-medium">{benefits[currentIndex].title}</h2>
            <p className="text-[16px] font-normal">{benefits[currentIndex].description}</p>
          </div>

          {/* Next Benefit (Hidden on small screens) */}
          <div
            className={`next w-[30%] h-[90%] bg-gradient-to-br blur-[1px] from-blue-400 to-blue-600 text-white p-6 flex flex-col gap-4 rounded-xl shadow-lg transition-all duration-300 ${
              currentIndex === benefits.length - 1 ? "opacity-50" : "opacity-80"
            } hidden sm:flex`} // hidden on small screens
          >
            <img src={pic} alt="" className="h-20 w-20" />
            <h2 className="text-2xl font-medium">
              {benefits[(currentIndex + 1) % benefits.length].title}
            </h2>
            <p className="text-[16px] font-normal">
              {benefits[(currentIndex + 1) % benefits.length].description}
            </p>
          </div>
        </div>
        
        {/* Right Arrow Icon (Visible on all screen sizes, but moved to the bottom for small screens) */}
        <i
          className="text-[30px] h-12 w-12 rounded-full flex justify-center items-center text-center bg-blue-500 text-white font-bold ri-arrow-right-line cursor-pointer absolute bottom-0 right-0 sm:relative sm:bottom-auto sm:right-auto sm:mr-10"
          onClick={handleNext}
        ></i>
      </div>
    </div>
  );
};

export default Benefits;
