import React from "react";
import watchRecommend from "../assets/images/watch-recommend.png";
import saleRecommend from "../assets/images/sale-recommend.png";
import jacketRecommend from "../assets/images/jacket-recommend.png";
import flag from "../assets/images/Icons/flag.png";


function Recommendation() {
  return (
    <div className="w-full min-h-60 py-6 bg-[#111] flex  gap-6 flex-col items-center md:py-16 md:gap-16">
    <div className="w-full px-3 font-krona flex gap-y-2 gap-x-2 justify-center flex-wrap items-start sm:gap-x-10 xl:justify-between xl:w-[90%] xl:px-0 xl:gap-x-0">
      <div className="w-36 h-32 md:w-52 md:h-44 lg:w-72 lg:h-52 relative xl:w-96 xl:h-64">
        <img
          className="w-full h-full object-cover"
          src={watchRecommend}
          alt=""
        />
        <div className="w-[90%] h-[75%] absolute top-1/2 -translate-y-1/2 right-0">
          <img
            className="w-full h-full object-cover filter brightness-75"
            src={watchRecommend}
            alt=""
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-start gap-1 pl-2 lg:pl-5 lg:gap-2">
            <h2 className="text-sm lg:text-2xl xl:text-3xl">Luxury watch</h2>
            <p className="text-[0.43rem] pr-1 text-white/60 md:pr-2 lg:text-[0.6rem] xl:text-[0.7rem] xl:pr-14">
              Check out our new Men Watch collection!
            </p>
            <button className="px-5 py-2 bg bg-[#d9d9d912] border border-white/40 text-[0.35rem] rounded-sm lg:text-xs hover:bg-white hover:text-black duration-300">
              Shop now
            </button>
          </div>
        </div>
      </div>
      <div className="w-36 h-32 md:w-52 md:h-44 lg:w-72 lg:h-52 relative xl:w-96 xl:h-64">
        <img
          className="w-full h-full object-cover"
          src={saleRecommend}
          alt=""
        />
        <div className="w-[90%] h-[75%] absolute top-1/2 -translate-y-1/2 right-0">
          <img
            className="w-full h-full object-cover filter brightness-75"
            src={saleRecommend}
            alt=""
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center gap-1 lg:gap-2 xl:px-3">
            <h3 className="text-[0.45rem] font-barlow lg:text-[0.6rem] xl:text-[0.7rem]">Hurry up!End this weekend</h3>
            <h2 className="text-sm text-center lg:text-2xl xl:text-3xl">EXTRA SALE 75% OFF</h2>
            <p className="text-[0.35rem] pr-1 text-white/60 lg:text-[0.5rem] xl:text-[0.8rem]">
            USE PROMO CODE: <span className="text-white text-[0.44rem] lg:text-[0.6rem] xl:text-[0.91rem]">Z9QAR25</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-36 h-32 md:w-52 md:h-44 lg:w-72 lg:h-52 relative xl:w-96 xl:h-64">
        <img
          className="w-full h-full object-cover"
          src={jacketRecommend}
          alt=""
        />
        <div className="w-[90%] h-[75%] absolute top-1/2 -translate-y-1/2 right-0">
          <img
            className="w-full h-full object-cover filter brightness-75"
            src={jacketRecommend}
            alt=""
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-start gap-1 pl-2 lg:pl-5 lg:gap-2">
            <h2 className="text-sm lg:text-2xl xl:text-3xl">New jackets</h2>
            <p className="text-[0.43rem] pr-1 text-white/60 md:pr-2 lg:text-[0.6rem] xl:text-[0.7rem] xl:pr-14">
            Check out our new Men jacket collection!
            </p>
            <button className=" py-2 px-5 bg bg-[#d9d9d912] border border-white/40 text-[0.35rem] rounded-sm lg:text-xs hover:bg-white hover:text-black duration-300">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
    <p className="w-72 flex items-center justify-center text-[0.5rem] text-white/60 bg-black px-1 py-1 md:text-sm md:px-6 xs:w-96 md:w-[44rem] lg:py-3 lg:w-[59rem] xl:w-[90%]"><img className="w-2 mr-2 md:w-3" src={flag} alt="" /> #COME & CHECKOUT OUR <span className="text-white mx-1">HOTEST DEAL</span> PRODUCTS THIS MONTH!</p>
    </div>
  );
}

export default Recommendation;
