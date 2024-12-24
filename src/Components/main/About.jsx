import React from 'react';
import pic from '../../assets/images/aboutgirl.png';

const About = () => {
  return (
    <div className="w-[100%] pb-3 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="about w-full md:w-[50%] px-5 py-2 flex flex-col">
        <div className="w-full md:w-[80%] md:ml-[20%] flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl py-3 font-normal text-black border-b-[1px] border-black">
            About the Program
          </h1>
          <p className="text-[15px] md:text-[17px] tracking-wide text-gray-600 font-normal">
            The Electrical and Communication Engineering course provides a
            comprehensive understanding of electrical systems and communication
            technologies. It covers foundational topics such as circuit theory,
            digital electronics, signal processing, and power systems. Students
            learn about communication systems, including wireless, optical, and
            satellite communication. Advanced subjects include microelectronics,
            control systems, electromagnetics, and VLSI design. Practical
            sessions, laboratory work, and industry-focused projects equip
            students with the necessary skills for designing, implementing, and
            maintaining electrical and communication networks. The program
            prepares graduates for roles in telecommunications, electronics,
            energy, and other industries requiring expertise in electrical
            systems and communication technologies.
          </p>
        </div>
        <div className="w-full md:w-[85%] mt-6 rounded-xl md:ml-[15%] flex flex-col gap-4 px-4 md:px-10 py-4 border-[1px] border-gray-300 z-10">
          <h1 className="text-3xl md:text-4xl font-medium text-black border-b-[1px] py-3 border-black">
            Courses
          </h1>
          <div className="flex flex-col gap-6 py-8 px-2">
            <p className="px-5 rounded-lg flex items-center justify-between text-[14px] md:text-[16px] font-medium text-gray-500 bg-white">
              <span>Technical skills</span>
              <i className="text-[24px] md:text-[30px] text-black ri-arrow-drop-down-fill"></i>
            </p>
            <p className="px-5 rounded-lg flex items-center justify-between text-[14px] md:text-[16px] font-medium text-gray-500 bg-white">
              <span>Functional skills</span>
              <i className="text-[24px] md:text-[30px] text-black ri-arrow-drop-down-fill"></i>
            </p>
            <p className="px-5 rounded-lg flex items-center justify-between text-[14px] md:text-[16px] font-medium text-gray-500 bg-white">
              <span>Behavioural skills</span>
              <i className="text-[24px] md:text-[30px] text-black ri-arrow-drop-down-fill"></i>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="aboutright w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <div className="aboutbox w-[80%] md:w-[70%] h-auto md:h-[70%] px-4 md:px-7 py-8 rounded-[20px] md:rounded-[40px] flex flex-col items-center">
          <img src={pic} alt="" />
          <button className="px-6 md:px-8 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 font-normal text-[18px] md:text-[22px] rounded-xl mt-4">
            Start Learning
          </button>
          <div className="flex flex-col items-center gap-3 w-full mt-6">
            <h2 className="border-b-[1px] py-1 border-black w-full flex justify-between text-[18px] md:text-[22px] font-normal">
              <span>Duration</span>
              <span>45hrs</span>
            </h2>
            <h2 className="border-b-[1px] py-1 border-black w-full flex justify-between text-[18px] md:text-[22px] font-normal">
              <span>Language</span>
              <span>English</span>
            </h2>
            <h2 className="border-b-[1px] py-1 border-black w-full flex justify-between text-[18px] md:text-[22px] font-normal">
              <span>Total Credits</span>
              <span>30</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
