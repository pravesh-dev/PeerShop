import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsAccSetting } from "../Stores/user";

function PersonalInfo() {
  const dispatch = useDispatch();

  const handleBackBtn = () =>{
    // dispatch(changeActiveProfileTab({activeTab: }))
    dispatch(setIsAccSetting({accSetting: false}))
  }
  return (
    <div className="w-full h-full relative flex flex-col">
      <div className="flex items-center gap-5">
        <span className="text-lg md:hidden" onClick={handleBackBtn}>
          <FaAngleLeft />
        </span>
        <h1 className="text-white text-xl">Personal Information</h1>
        <button className="text-[#3F3BFF] font-bold">Edit</button>
      </div>
      <h3 className="text-sm mb-1 mt-4">Your Name</h3>
      <div className="flex flex-col gap-2 lg:flex-row">
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs lg:w-[49%]"
          type="text"
          placeholder="First Name"
        />
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs lg:w-[49%]"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <h3 className="text-sm mb-1 mt-4">Your Gender</h3>
      <div className="flex gap-2">
        <h2 className="text-xs flex items-center gap-2">
          <span className="w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b] rounded-full"></span>{" "}
          Male
        </h2>
        <h2 className="text-xs flex items-center gap-2">
          <span className="w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b] rounded-full"></span>{" "}
          Female
        </h2>
      </div>
      <h3 className="text-sm mb-1 mt-4">Email Address</h3>
      <input
        className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs lg:w-[49%]"
        type="email"
        placeholder="Email address"
      />
      <h3 className="text-sm mb-1 mt-4">Mobile Number</h3>
      <input
        className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs lg:w-[49%]"
        type="number"
        placeholder="Enter mobile number"
      />
      <button className="bg-[#221EFF] text-base px-10 py-2 rounded-sm mt-6 self-end lg:self-start">
        SAVE
      </button>
      <Link className="text-[#3F3BFF] absolute bottom-4 left-0 text-sm tracking-wider">Deactivate Account</Link>
    </div>
  );
}

export default PersonalInfo;
