import React from 'react'
import watchRecommend from '../assets/images/watch-recommend.png'
import saleRecommend from '../assets/images/sale-recommend.png'
import jacketRecommend from '../assets/images/jacket-recommend.png'
function Recommendation() {
  return (
    <div className='w-full h-96 bg-[#111] py-4 px-3 flex gap-x-2 justify-center flex-wrap items-start sm:gap-x-10 lg:gap-x-16 lg:py-12 xl:gap-x-32 xl:py-20'>
      <div className='w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80'>
        <img className='w-full h-full object-cover' src={watchRecommend} alt="" />
      </div>
      <div className='w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80'>
        <img className='w-full h-full object-cover' src={saleRecommend} alt="" />
      </div>
      <div className='w-36 h-36 -mt-8 xs:mt-0 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80'>
        <img className='w-full h-full object-cover' src={jacketRecommend} alt="" />
      </div>
    </div>
  )
}

export default Recommendation
