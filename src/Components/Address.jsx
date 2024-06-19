import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { RiAddFill } from "react-icons/ri";
import AddNewAddress from "./AddNewAddress";
import { MdDeleteForever } from "react-icons/md";
import {
  changeActiveProfileTab,
  setIsAccSetting,
  setIsAddAddress,
} from "../Stores/user";
import { useDispatch, useSelector } from "react-redux";

function Address() {
  const isAddAddress = useSelector((store) => store.user.isAddAddress);
  const { email } = useSelector((store) => store.user);
  const [addresses, setAddresses] = useState(null);
  const dispatch = useDispatch();
  const handleAddAddress = () => {
    dispatch(setIsAddAddress({ addAddress: true }));
  };
  const handleBackBtn = () => {
    dispatch(changeActiveProfileTab({ activeTab: "profile" }));
    dispatch(setIsAccSetting({ accSetting: false }));
  };
  const handleDelete = async (addressId, userId) => {
    try{
      let response = await fetch('http://localhost:3000/address/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({addressId, userId}),
      credentials: 'include'
    })
    if(response.ok){
      console.log('deleted')
    }
    }catch(err){
      console.log("Something went wrong! Can't delete now")
    }

  }

  useEffect(() => {
    const getAddresses = async () => {
      try{
        let response = await fetch("http://localhost:3000/address/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      });
      let data = await response.json();
      setAddresses(data);
      }catch(err){
        console.log('Something wend wrong')
      }
    };
    getAddresses();
  }, [isAddAddress]);

  return (
    <div className="w-full h-full relative">
      <div className="flex items-center gap-5">
        <span className="text-lg" onClick={handleBackBtn}>
          <FaAngleLeft />
        </span>
        <h1 className="text-white text-xl">Manage Addresses</h1>
      </div>
      <div className="h-[32rem] overflow-y-auto md:h-[30rem] lg:h-auto">
        <div
          className={`w-full py-2 px-4 mt-5 text-[#3F3BFF] uppercase gap-3 text-sm items-center border-[0.5px] border-white/20 ${
            isAddAddress ? "hidden" : "flex"
          } lg:py-4 cursor-pointer`}
          onClick={handleAddAddress}
        >
          <span className="text-xl">
            <RiAddFill />
          </span>
          Add a new address
        </div>
        <div
          className={`w-full bg-[#5f5f5f07] px-1 mt-3 ${
            isAddAddress ? "block" : "hidden"
          }`}
        >
          <AddNewAddress />
        </div>

        {
          addresses === null ? 'No added addresses' : (addresses.map((address, index) => {
            return (
              <div key={index} className="w-full px-2 py-2 bg-neutral-900 mt-5 lg:py-3 lg:px-4">
                <div className="flex justify-between items-center">
                  <span className="bg-[#282828] px-3 py-1 text-[#7B7B7B] text-[0.5rem] uppercase">
                    {address.addressType}
                  </span>{" "}
                  <span className="text-[#fc0804c8] text-xl cursor-pointer lg:text-2xl" onClick={()=>{handleDelete(address._id, address.user)}}>
                    <MdDeleteForever />
                  </span>
                </div>
                <h2 className="flex gap-5 text-sm">
                  {address.name} <span className="font-sans font-thin">{address.contact}</span>
                </h2>
                <p className="text-[0.52rem] text-[#b8b8b8] w-64 lg:w-[25rem] lg:text-[0.6rem]">
                  {address.address}, {address.locality}, {address.district}, {address.state}
                  - <span className="text-white">{address.pincode}</span>
                </p>
              </div>
            );
          }))
        }
      </div>
    </div>
  );
}

export default Address;
