import React, { useState } from 'react'
import NewArrivals from './NewArrivals'
import TopRated from './TopRated'

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
    </div>
  )
}

export default ItemContainer
