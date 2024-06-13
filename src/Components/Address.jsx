import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { RiAddFill } from "react-icons/ri";
import AddNewAddress from "./AddNewAddress";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Address() {
  const [isAddAddress, setIsAddAddress] = useState(false);
  const handleAddAddress = () => {
    setIsAddAddress(true);
  };
  return (
    <div className="w-full h-full relative">
      <div className="flex items-center gap-5">
        <span className="text-lg">
          <FaAngleLeft />
        </span>
        <h1 className="text-white text-xl">Manage Addresses</h1>
      </div>
      <div className="h-[32rem] overflow-y-auto md:h-[30rem] lg:h-auto">
        <div
          className={`w-full py-2 px-4 mt-5 text-[#3F3BFF] uppercase gap-3 text-sm items-center border-[0.5px] border-white/40 ${
            isAddAddress ? "hidden" : "flex"
          } lg:py-4`}
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

        <div className="w-full px-2 py-2 bg-neutral-900 mt-5 lg:py-3 lg:px-4">
          <div className="flex justify-between items-center">
            <span className="bg-[#282828] px-3 py-1 text-[#7B7B7B] text-[0.5rem]">
              Home
            </span>{" "}
            <span className="text-[#7B7B7B] text-sm">
              <HiOutlineDotsVertical />
            </span>
          </div>
          <h2 className="flex gap-5 text-sm">
            Pravesh <span className="font-sans font-thin">9991831473</span>
          </h2>
          <p className="text-[0.52rem] text-[#b8b8b8] w-64 lg:w-[25rem] lg:text-[0.6rem]">
            Shree Balaji mandir, Niwaz Nagar, Mahendragarh District, Haryana -{" "}
            <span className="text-white">123001</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Address;
