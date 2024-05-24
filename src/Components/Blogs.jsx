import React from 'react'
import saleBag from "../assets/images/sale-bag.png"
function Blogs() {
  return (
    <div className='w-full bg-[#111] py-4 lg:py-16'>
      <div className='w-full h-24 relative sm:h-36 lg:h-60 xl:h-80'>
        <img className='w-full h-full object-cover' src={saleBag} alt="" />
        <div className='w-[50%] absolute top-1/2 -translate-y-1/2 right-0 flex gap-1 flex-col items-center lg:gap-7'>
            <h2 className='text-center text-sm sm:text-xl lg:text-3xl xl:text-4xl'>UP TO <br /> 70% OFF</h2>
            <button className="px-3 py-[0.3rem] bg bg-[#d9d9d91e] border border-white/40 text-xs backdrop-blur-lg sm:text-sm lg:text-base lg:px-8 lg:py-2 hover:bg-white hover:text-black duration-300 xl:text-xl">
            Show now
          </button>
        </div>
      </div>
      <div>
            
      </div>
    </div>
  )
}

export default Blogs
