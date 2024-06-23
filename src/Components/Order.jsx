import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoStarSharp, IoFilterSharp } from "react-icons/io5";
import notAvai from '../assets/images/not-avai.png'

function Order() {
  const [isFilter, setIsFilter] = useState(false);
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('')
  const showHideFilters = () => {
    isFilter ? setIsFilter(false) : setIsFilter(true)
  }
  const handleStatusFilter = (statusFilter) => {
    setStatus(statusFilter)
  }
  return (
    <div className="w-full min-h-screen bg-[#111] pt-20 flex justify-center lg:pt-32 lg:px-4">
      <div className="w-full relative lg:flex lg:items-start lg:justify-between">
      <div className={`w-60 px-1 flex-col gap-2 absolute top-0 left-0 z-20 bg-[#151515] py-3 ${isFilter ? 'flex' : 'hidden'} lg:flex lg:relative lg:w-80`}>
        <div className="flex items-center lg:pl-2">
          <Link
            to="/"
            className="text-xs text-neutral-400 tracking-wider hover:text-blue-500"
          >
            Home
          </Link>{" "}
          <span className="text-neutral-500 text-sm">
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <Link
            to="/profile"
            className="text-xs text-neutral-400 tracking-wider hover:text-blue-500"
          >
            Profile
          </Link>{" "}
          <span className="text-neutral-500 text-sm">
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <Link
            to="/profile/orders"
            className="text-xs text-neutral-400 tracking-wider hover:text-blue-500"
          >
            My Orders
          </Link>
        </div>
        <div className="bg-[#151515] pl-2 py-3 lg:pl-5">
          <h2 className="text-xl mb-4">Filters</h2>
          <div>
            <h3 className="text-lg text-neutral-300 mb-2">ORDER STATUS</h3>
            <h4 className="flex items-center gap-2 mb-1" onClick={()=>{handleStatusFilter('onWay')}}>
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 ${status === 'onWay' ? 'bg-blue-500' : 'bg-[#2626264b]'}`}
              ></span>
              On the way
            </h4>
            <h4 className="flex items-center gap-2 mb-1" onClick={()=>{handleStatusFilter('delivered')}}>
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 ${status === 'delivered' ? 'bg-blue-500' : 'bg-[#2626264b]'}`}
              ></span>
              Delivered
            </h4>
            <h4 className="flex items-center gap-2 mb-1" onClick={()=>{handleStatusFilter('cancelled')}}>
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 ${status === 'cancelled' ? 'bg-blue-500' : 'bg-[#2626264b]'}`}
              ></span>
              Cancelled
            </h4>
            <h4 className="flex items-center gap-2 mb-1" onClick={()=>{handleStatusFilter('returned')}}>
              <span
                className={`w-3 h-3 border-[0.5px] border-white/30 ${status === 'returned' ? 'bg-blue-500' : 'bg-[#2626264b]'}`}
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
      <div className="w-full lg:w-[65%]">
        <div className="flex justify-between items-center px-1 py-3 mb-3 lg:mb-4">
          <h1 className="w-[80%] text-center text-lg font-krona text-white lg:text-2xl lg:leading-3">My Orders</h1>
          <h2 className="flex items-center gap-1 lg:hidden" onClick={showHideFilters}>
            <span>
              <IoFilterSharp />
            </span>
            Filters
          </h2>
        </div>
        {
          orders.length > 0 ? (orders.map((order, index)=>{
            return (
              <div key={index} className="w-full flex items-center gap-1 justify-between bg-[#1c1c1c] px-1 py-3 mt-2 sm:px-4 lg:py-4">
          <div className="bg-cyan-600 w-10 h-10 lg:w-16 lg:h-16">
            <img src="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xs lg:text-lg">Nike Shoes</h2>
            <h2 className="text-[0.5rem] text-neutral-400 lg:text-[0.68rem]">Type: Fashion</h2>
          </div>
          <div className="text-sm lg:text-xl">$19.2</div>
          <div>
            <h2 className="flex items-center gap-1 text-xs lg:text-sm">
              <span className="w-3 h-3 bg-green-700 rounded-full lg:w-4 lg:h-4"></span>{" "}
              Delivered on Wed June 19
            </h2>
            <p className="text-[0.6rem] text-neutral-400 lg:text-[0.68rem]">
              Your item has been delivered
            </p>
            <h2 className="flex items-center gap-1 text-xs text-blue-600 lg:text-sm">
              <span className="text-sm lg:text-xl">
                <IoStarSharp />
              </span>{" "}
              Rate & Review Product
            </h2>
          </div>
        </div>
            )
          })) : <div className=" w-[80%] flex flex-col justify-center items-center bg-[#3c3c3c1b] py-4">
            <img src={notAvai} className="w-48" alt="" />
            <h2 className="mt-5 text-lg text-[#fff]">No orders</h2>
            <p className="text-sm text-neutral-400">You have not ordered any product yet!</p>
          </div>
        }
      </div>
      </div>
    </div>
  );
}

export default Order;
