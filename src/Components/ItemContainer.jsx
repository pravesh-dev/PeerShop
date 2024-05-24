import React, { useState } from 'react'
import NewArrivals from './NewArrivals'
import TopRated from './TopRated'
import bicycle from '../assets/images/Icons/bicycle.png';
import money from '../assets/images/Icons/money.png';
import clock from '../assets/images/Icons/clock.png';

function ItemContainer() {
    const [activeTab, setActiveTab] = useState('arrivals');
  return (
    <div className='w-full min-h-[50vh] bg-[#111] py-5 flex flex-col gap-4 lg:gap-10'>
      <div className='w-full flex justify-center items-center gap-5 font-krona md:gap-14 lg:gap-24'>
        <button className={`text-sm ${activeTab === 'arrivals' ? 'text-white border-b-2 border-white' : 'text-[#646464] border-none'} md:text-base lg:text-lg`} onClick={()=>{setActiveTab("arrivals")}}>New Arrivals</button>
        <button className={`text-sm ${activeTab === 'rated' ? 'text-white border-b-2 border-white' : 'text-[#646464] border-none'} md:text-base lg:text-lg`} onClick={()=>{setActiveTab("rated")}}>Top Rated</button>
      </div>
      <div className='w-full lg:flex lg:justify-center'>
        { activeTab === "arrivals" ? <NewArrivals/> : <TopRated/>}
      </div>
      <div className='w-[95%] bg-[#09090935] flex items-center justify-between mt-5 px-1 py-2 mx-auto xs:justify-center xs:gap-8 xs:w-[29rem] sm:w-[40rem] sm:gap-14 lg:w-[61.6rem] xl:w-[65.5rem] lg:mt-20'>
        <div className='flex items-center gap-2'>
          <img className='w-4 xs:w-6 lg:w-9' src={bicycle} alt="" />
          <div className='flex flex-col gap-1'>
            <h2 className='text-[0.44rem] xs:text-[0.65rem] lg:text-lg'>Free Delivery</h2>
            <p className='text-[0.34rem] w-[90%] xs:text-[0.42rem] lg:text-xs'>There will be no charge of delivery</p>
          </div>
        </div>
        <div className='flex items-center gap-2 border-r border-l border-white/50 px-3 lg:px-10'>
          <img className='w-4 xs:w-6 lg:w-9' src={money} alt="" /> 
          <div className='flex flex-col gap-1'>
            <h2 className='text-[0.44rem] xs:text-[0.65rem] lg:text-lg'>Money Guarantee</h2>
            <p className='text-[0.34rem] w-[90%] xs:text-[0.42rem] lg:text-xs'>30 days money back</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-4 xs:w-6 lg:w-9' src={clock} alt="" />
          <div className='flex flex-col gap-1'>
            <h2 className='text-[0.44rem] xs:text-[0.65rem] lg:text-lg'>Online Support 24/7</h2>
            <p className='text-[0.34rem] w-[90%] xs:text-[0.42rem] lg:text-xs'>We’re always here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemContainer
