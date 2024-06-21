import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Order() {
  return (
    <div className="w-full h-screen bg-[#111] flex pt-20">
      <div className="w-60 px-1 flex flex-col gap-2">
        <div className="flex items-center">
          <Link to='/' className="text-xs text-neutral-400 tracking-wider hover:text-blue-500">Home</Link>{" "}
          <span className="text-neutral-500 text-sm">
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <Link to='/profile' className="text-xs text-neutral-400 tracking-wider hover:text-blue-500">Profile</Link>{" "}
          <span className="text-neutral-500 text-sm">
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <Link to='/profile/orders' className="text-xs text-neutral-400 tracking-wider hover:text-blue-500">My Orders</Link>
        </div>
        <div className="bg-[#151515] pl-2 py-3">
          <h2 className="text-xl mb-4">Filters</h2>
          <div>
            <h3 className="text-lg text-neutral-300 mb-2">ORDER STATUS</h3>
            <h4 className="flex items-center gap-2 mb-1">
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]`}
              ></span>
              On the way
            </h4>
            <h4 className="flex items-center gap-2 mb-1">
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]`}
              ></span>
              Delivered
            </h4>
            <h4 className="flex items-center gap-2 mb-1">
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]`}
              ></span>
              Cancelled
            </h4>
            <h4 className="flex items-center gap-2 mb-1">
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]`}
              ></span>
              Returned
            </h4>
          </div>
          <div>
            <h3 className="text-lg text-neutral-300 mb-2 mt-3">ORDER TIME</h3>
            <h4 className="flex items-center gap-2 mb-1">
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]`}
              ></span>
              Last Week
            </h4>
            <h4 className="flex items-center gap-2 mb-1">
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]`}
              ></span>
              Last 30 days
            </h4>
            <h4 className="flex items-center gap-2 mb-1">
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]`}
              ></span>
              2023
            </h4>
            <h4 className="flex items-center gap-2 mb-1">
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]`}
              ></span>
              2022
            </h4>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Order;
