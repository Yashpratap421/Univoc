import React from 'react'
import datapic from '../../assets/images/datascience.png'
import webpic from '../../assets/images/webdev.png'
import elecpic from '../../assets/images/electrical.png'

const Jobroles = () => {
  return (
    <div className='h-auto sm:h-[90vh] flex flex-col sm:flex-row'>
        {/* Job Roles Section */}
        <div className="w-full sm:w-[50%] h-full flex justify-end job sm:order-1">
            <div className="w-[80%] flex flex-col gap-5 mt-8">
                <h1 className='text-5xl font-normal border-[1px] border-b-gray-600 pb-2 '>Job Roles</h1>
                <div className="flex w-full justify-between mt-10">
                    <ul className='flex flex-col gap-1  text-[16px] font-normal list-disc'>
                        <li className=''> Electrical Engineer</li>
                        <li>Communication Systems Engineer</li>
                        <li> Power Systems Engineer</li>
                        <li>Electronics Design Engineer</li>
                        <li>RF Engineer</li>
                    </ul>
                    <ul className='flex flex-col gap-1  text-[16px] font-normal list-disc'>
                        <li> Network Engineer</li>
                        <li>Control Systems Engineer</li>
                        <li>Telecommunication Engineer</li>
                        <li>Circuit Design Engineer</li>
                        <li>Signal Processing Engineer</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Related Courses Section */}
        <div className="w-full sm:w-[50%] h-full flex justify-end px-4 option sm:order-2">
            <div className="w-[70%] flex flex-col mt-8">
                <h1 className='w-full text-5xl font-normal py-2 border-[1px] border-b-black'>Related Courses</h1>
                <div className="h-[25%] flex items-center gap-5 py-3 mt-1 border-[1px] border-b-black">
                    <img src={elecpic} alt="" className='w-40' />
                    <h3 className='text-[22px] font-normal'><span>Electrical and electronics</span>
                    <p className='flex items-center gap-[1px]'><i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-50 ri-star-fill"></i>
                    </p>    
                    </h3>
                </div>
                <div className="h-[25%] flex items-center gap-5 py-3 mt-1 border-[1px] border-b-black ">
                    <img src={datapic} alt="" className='w-40' />
                    <h3 className='text-[22px] font-normal'><span>Data Science</span>
                    <p className='flex items-center gap-[1px]'><i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-50 ri-star-fill"></i>
                    </p>    
                    </h3>
                </div>
                <div className="h-[25%] flex items-center gap-5 py-3 mt-1 border-[1px] border-b-black">
                    <img src={webpic} alt="" className='w-40' />
                    <h3 className='text-[22px] font-normal'><span>Dot Net Full Stack</span>
                    <p className='flex items-center gap-[1px]'><i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-500 ri-star-fill"></i>
                        <i className="text-[24px] text-yellow-50 ri-star-fill"></i>
                    </p>    
                    </h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Jobroles;
