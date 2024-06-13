import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profileDef from "../assets/images/profileDef.svg";
import { FaPowerOff, FaAngleRight } from "react-icons/fa6";
import { RiFileList2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { changeActiveProfileTab, logoutUser } from "../Stores/user";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import PanCard from "./PanCard";

function Profile() {
  const loginStatus = useSelector((store) => store.user.loginStatus);
  const user = useSelector((store) => store.user.name);
  const activeProfileTab = useSelector(store => store.user.activeProfileTab)
  console.log(activeProfileTab)
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [isAccSetting,setIsAccSetting] = useState(false)
  useEffect(() => {
    if (!loginStatus) {
      navigate("/login");
    }
  }, [loginStatus, navigate]);

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  const handleAccountClick = (tab) => {
    setIsAccSetting(true)
    dispatch(changeActiveProfileTab({activeTab: tab}))
  }

  return (
    <div className="bg-[#111] w-full min-h-screen flex justify-center items-center">
      <div className="w-full mx-2 h-[34rem] mt-28 mb-1 relative overflow-x-hidden md:w-[45rem] md:flex md:justify-between lg:w-[60rem] lg:h-auto xl:w-[94%]">
        <div className="w-full h-full flex flex-col justify-between md:w-[20rem]">
          <div className="w-full bg-[#191919] flex items-center gap-5 py-3 px-4">
            <img src={profileDef} className="w-10 h-10 rounded-full" alt="profile image" />
            <div>
              <h4 className="text-xs text-neutral-500 -mb-1">Hello,</h4>
              <h1 className="text-xl font-black tracking-wider">{user}</h1>
            </div>
          </div>
          <div className="w-full h-[27rem] bg-[#191919] flex flex-col justify-between">
            <div className="">
              <div className="flex justify-between items-center py-4 px-4 border-b border-white/10">
                <h2 className="flex items-center gap-4 text-lg text-[#AAAAAA] font-semibold">
                  <span className="text-lg text-[#3F3BFF]">
                    <RiFileList2Line />
                  </span>
                  MY ORDERS
                </h2>
                <span className="text-sm">
                  <FaAngleRight />
                </span>
              </div>
              <div className="w-full py-1 border-b border-white/10">
                <h2 className="flex px-4 items-center gap-4 text-lg text-[#AAAAAA] font-semibold uppercase">
                  <span className="text-lg text-[#3F3BFF]">
                    <FaUser />
                  </span>{" "}
                  account setting
                </h2>
                <h3 className="text-[0.7rem] flex gap-4 px-4 py-[0.1rem]" onClick={()=>{handleAccountClick('profile')}}><span className="text-lg invisible"><FaUser/></span> Profile Information</h3>
                <h3 className="text-[0.7rem] flex gap-4 px-4 py-[0.1rem]" onClick={()=>{handleAccountClick('address')}}><span className="text-lg invisible"><FaUser/></span> Manage Addresses</h3>
                <h3 className="text-[0.7rem] flex gap-4 px-4 py-[0.1rem]" onClick={()=>{handleAccountClick('panCard')}}><span className="text-lg invisible"><FaUser/></span> PAN Card Information</h3>
              </div>
            </div>
            <h2 className="flex px-4 py-3 items-center gap-4 text-lg text-[#AAAAAA] font-semibold border-t border-white/10" onClick={handleLogOut}>
              <span className="text-lg text-[#3F3BFF]"><FaPowerOff /></span> Logout
            </h2>
          </div>
        </div>
        <div className={`w-full h-full absolute top-0 left-0 ${isAccSetting ? 'block' : 'hidden'} bg-[#111] md:relative md:block md:w-[20rem] md:bg-[#191919] md:p-2 lg:w-[35rem] lg:h-auto lg:p-7 xl:w-[69%]`}>
                {
                  activeProfileTab === 'profile' ? (
                    <PersonalInfo />
                  ) : activeProfileTab === 'address' ? (
                    <Address />
                  ) : activeProfileTab === 'panCard' ? (
                    <PanCard />
                  ): (<div>Invalid Tab</div>)
                }
        </div>
      </div>
    </div>
  );
}

export default Profile;
