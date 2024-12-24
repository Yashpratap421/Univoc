import React from 'react';
import Header from '../header/Header';
import Dashboardbg from '../../assets/images/Dashboardbg.png';
import man from '../../assets/images/Dashboardpic.png';

const Dashboard = () => {
  return (
    <div className="h-[100vh] w-[100vw] px-6 md:px-12 py-10 pb-20">
      <Header />
      <div
        className="h-[80%] w-full bg-cover bg-center rounded-b-lg md:rounded-b-[70px] flex overflow-hidden flex-col md:flex-row"
        style={{ backgroundImage: `url(${Dashboardbg})` }}
      >
        {/* Left Section */}
        <div className="dashboard w-full md:w-[60%] flex flex-col justify-center items-center px-4 md:px-0">
          <div className="flex flex-col gap-6">
            <p className="text-[16px] md:text-[18px] w-[100%] mb-2 font-normal text-white flex flex-col sm:flex-row sm:justify-between gap-5 border-b-[1px] border-white mt-10 pb-3">
              <span className="sm:mt-0">Home</span>
              <span className="sm:mt-0">Integrated Degree Program</span>
              <span className="sm:mt-0">Electrical and Communication</span>
            </p>
            <h1 className="font-semibold text-white text-3xl md:text-4xl">
              Electrical and Communication
            </h1>
            <p className="flex items-center gap-1">
              <i className="text-[20px] md:text-[24px] text-yellow-500 ri-star-fill"></i>
              <i className="text-[20px] md:text-[24px] text-yellow-500 ri-star-fill"></i>
              <i className="text-[20px] md:text-[24px] text-yellow-500 ri-star-fill"></i>
              <i className="text-[20px] md:text-[24px] text-yellow-500 ri-star-fill"></i>
              <i className="text-[20px] md:text-[24px] text-yellow-50 ri-star-fill"></i>
              <span className="ml-1 text-[16px] md:text-[18px] font-medium text-white">
                (4.5)
              </span>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="dashimage w-full md:w-[40%] flex justify-center items-center mt-4 md:mt-0">
          <img src={man} alt="" className="h-[80%] w-full md:h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
