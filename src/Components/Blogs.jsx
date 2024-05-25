import React, { useState } from "react";
import saleBag from "../assets/images/sale-bag.png";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

function Blogs() {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);

  const blogs = [
    {
      img: blog1,
      name: "Lorem Ipsum",
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
      perferendis obcaecati ipsam nobis iure quis soluta earum doloribus
      inventore. Officia.`,
    },
    {
      img: blog2,
      name: "Lorem Ipsum",
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
      perferendis obcaecati ipsam nobis iure quis soluta earum doloribus
      inventore. Officia.`,
    },
  ];
  return (
    <div className="w-full bg-[#111] py-4 lg:py-16">
      <div className="w-full h-24 relative sm:h-36 lg:h-60 xl:h-80">
        <img className="w-full h-full object-cover" src={saleBag} alt="" />
        <div className="w-[50%] absolute top-1/2 -translate-y-1/2 right-0 flex gap-1 flex-col items-center lg:gap-7">
          <h2 className="text-center text-sm sm:text-xl lg:text-3xl xl:text-4xl">
            UP TO <br /> 70% OFF
          </h2>
          <button className="px-3 py-[0.3rem] bg bg-[#d9d9d91e] border border-white/40 text-xs backdrop-blur-lg sm:text-sm lg:text-base lg:px-8 lg:py-2 hover:bg-white hover:text-black duration-300 xl:text-xl">
            Show now
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-6">
        <h2 className="text-base font-krona mb-3">Our Latest Blogs</h2>
        <div className="flex gap-1">
          {blogs.map((blog, index) => {
            return (
              <div className="w-36 h-48 bg-[#090909] flex flex-col gap-1 items-start justify-between p-2 sm:w-52 sm:h-[17rem] lg:w-60 lg:h-80 relative">
                <img
                  className="w-32 sm:w-48 lg:w-56"
                  src={blog.img}
                  alt=""
                />
                <h2 className="text-[0.8rem] sm:text-[0.58rem] lg:text-[0.7rem]">
                  {blog.name}
                </h2>
                <p className="text-[0.4rem]">
                  {blog.para}
                </p>
                <div className="w-full flex items-center justify-between">
                  <button className="text-[0.5rem] bg-[#A80000] px-2 py-[0.15rem] rounded-sm sm:text-[0.4rem] sm:px-4 sm:py-[0.4rem] hover:bg-[#a8000089] active:scale-95 duration-300">
                    Read more
                  </button>
                  <div className="flex gap-1">
                    <span
                      onClick={() => {
                        setIsLiked(true);
                        setIsDisLiked(false);
                      }}
                    >
                      {isLiked ? <BiSolidLike /> : <BiLike />}
                    </span>{" "}
                    <span
                      onClick={() => {
                        setIsDisLiked(true);
                        setIsLiked(false);
                      }}
                    >
                      {isDisLiked ? <BiSolidDislike /> : <BiDislike />}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
