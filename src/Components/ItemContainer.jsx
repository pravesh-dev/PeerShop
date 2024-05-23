import React, { useState } from 'react'
import NewArrivals from './NewArrivals'
import TopRated from './TopRated'

function ItemContainer() {
    const [activeTab, setActiveTab] = useState('arrivals');
  return (
    <div className='w-full min-h-screen bg-[#111] border py-5 flex flex-col gap-4'>
      <div className='w-full flex justify-center items-center gap-5 border font-krona'>
        <button className={`text-sm ${activeTab === 'arrivals' ? 'text-white border-b-2 border-white' : 'text-[#646464] border-none'}`} onClick={()=>{setActiveTab("arrivals")}}>New Arrivals</button>
        <button className={`text-sm ${activeTab === 'rated' ? 'text-white border-b-2 border-white' : 'text-[#646464] border-none'}`} onClick={()=>{setActiveTab("rated")}}>Top Rated</button>
      </div>
      <div className='w-full'>
        { activeTab === "arrivals" ? <NewArrivals/> : <TopRated/>}
      </div>
    </div>
  )
}

export default ItemContainer
