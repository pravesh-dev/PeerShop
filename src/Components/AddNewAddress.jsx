import React from "react";
import { FaSortDown } from "react-icons/fa6";

function AddNewAddress() {
  return (
    <div className="w-full py-2 flex flex-col gap-2">
      <h2 className="uppercase text-sm text-[#3f3bff]">add a new address</h2>
      <div className="flex flex-col gap-2">
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none"
          type="number"
          placeholder="10-digit mobile number"
        />
      </div>
      <div className="flex flex-col gap-2">
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none"
          type="number"
          placeholder="Pincode"
        />
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none"
          type="text"
          placeholder="Locality"
        />
      </div>
      <textarea
        className="bg-[#2626264b] border-[0.5px] border-white/30 w-full my-[0.08rem] h-20 p-2 text-xs resize-y outline-none"
        placeholder="Address (Area and Street)"
      ></textarea>
      <div className="flex flex-col gap-2">
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none"
          type="text"
          placeholder="City/District/Town"
        />
        <div className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 relative">
          <h3 className="absolute top-1 left-2 text-xs text-[#8d949e]">
            State
          </h3>
          <h2 className="flex justify-between items-center absolute top-4 w-full left-0 px-2 text-sm">
            --Select State--{" "}
            <span>
              <FaSortDown />
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none"
          type="text"
          placeholder="Landmark (Optional)"
        />
        <input
          className="bg-[#2626264b] border-[0.5px] border-white/30 w-full h-10 pl-2 text-xs outline-none"
          type="number"
          placeholder="Alternate Phone (Optional)"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm text-[#8d949e]">Address Type</h3>
        <div className="flex gap-2">
          <h2 className="text-xs text-[#c1cbd8] flex items-center gap-2">
            <span className="w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b] rounded-full"></span>{" "}
            Home
          </h2>
          <h2 className="text-xs text-[#c1cbd8] flex items-center gap-2">
            <span className="w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b] rounded-full"></span>{" "}
            Work
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-end mt-2">
        <button className="text-[#221EFF] text-base px-7 py-1">CANCEL</button>
        <button className="bg-[#221EFF] text-base px-7 py-1 rounded-sm">
          SAVE
        </button>
      </div>
    </div>
  );
}

export default AddNewAddress;
