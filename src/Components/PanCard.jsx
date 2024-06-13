import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeActiveProfileTab, setIsAccSetting } from "../Stores/user";

function PanCard() {
  const dispatch = useDispatch();
  const handleBackBtn = () =>{
    dispatch(changeActiveProfileTab({activeTab: "profile"}))
    dispatch(setIsAccSetting({accSetting: false}))
  }
  return (
    <div className="w-full h-full relative">
      <div className="flex items-center gap-5">
        <span className="text-lg" onClick={handleBackBtn}>
          <FaAngleLeft />
        </span>
        <h1 className="text-white text-xl">PAN Card Information</h1>
      </div>

      <form className="flex flex-col gap-3 mt-6">
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none xl:w-[50%]"
          type="number"
          placeholder="PAN Card Number"
        />
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none xl:w-[50%]"
          type="text"
          placeholder="Full Name"
        />
        <div className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-14 pl-2 relative xl:w-[50%]">
          <h3 className="absolute top-1 left-2 text-xs text-[#8d949e]">
            Upload PAN Card (Only JPG or JPEG files are allowed)
          </h3>
          <h2 className="flex justify-between items-center absolute top-6 w-full left-0 px-2 text-sm">
            <input type="file" />
          </h2>
        </div>
        <div className="flex items-start justify-start gap-2 pr-2 mt-5">
          <span className="w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b]"></span>
          <p className="w-[90%] text-[0.5rem] lg:text-[0.6rem]">
            I do hereby declare that PAN furnished/stated above is correct and
            belongs to me, registered as an account holder with
            www.peerShop.com. I further declare that I shall solely be held
            responsible for the consequences, in case of any false PAN
            declaration.
          </p>
        </div>
        <button className="bg-[#221EFF] text-base px-7 py-1 rounded-sm mt-5 self-end md:self-start">
          UPLOAD
        </button>
        <Link className="text-[#3F3BFF] mt-5 text-[0.55rem] tracking-wider">
          Read Terms & Conditions of PAN Card Information
        </Link>
      </form>
    </div>
  );
}

export default PanCard;
