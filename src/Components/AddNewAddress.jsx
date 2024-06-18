import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setIsAddAddress } from "../Stores/user";

function AddNewAddress() {
  const dispatch = useDispatch();
  const handleCancelBtn = () => {
    dispatch(setIsAddAddress({ addAddress: false }));
  };

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    pincode: "",
    locality: "",
    address: "",
    state: "",
    district: "",
    landmark: "",
    alternateContact: "",
    addressType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressTypeChange = (selectedType) => {
    setFormData((prevData) => ({
      ...prevData,
      addressType: selectedType,
    }));
  };

  return (
    <div className="w-full py-2 flex flex-col gap-2 lg:gap-4 xl:w-[80%]">
      <h2 className="uppercase text-sm text-[#3f3bff]">add a new address</h2>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <input
          className="profile_inputs"
          onChange={handleChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="profile_inputs"
          type="number"
          name="contact"
          onChange={handleChange}
          value={formData.contact}
          placeholder="10-digit mobile number"
        />
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <input
          className="profile_inputs"
          type="number"
          onChange={handleChange}
          value={formData.pincode}
          name="pincode"
          placeholder="Pincode"
        />
        <input
          className="profile_inputs"
          onChange={handleChange}
          value={formData.locality}
          name="locality"
          type="text"
          placeholder="Locality"
        />
      </div>
      <textarea
        className="bg-[#2626264b] border-[0.5px] border-white/30 w-full my-[0.08rem] h-20 p-2 text-xs resize-y outline-none"
        placeholder="Address (Area and Street)"
        onChange={handleChange} name="address" value={formData.address}
      ></textarea>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <input
          className="profile_inputs"
          type="text"
          placeholder="City/District/Town"
          onChange={handleChange}
          value={formData.district}
          name="district"
        />
        <input
          className="profile_inputs"
          type="text"
          placeholder="State"
          onChange={handleChange}
          value={formData.state}
          name="state"
        />
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <input
          className="profile_inputs"
          type="text"
          placeholder="Landmark (Optional)"
          onChange={handleChange}
          value={formData.landmark}
          name="landmark"
        />
        <input
          className="profile_inputs"
          type="number"
          placeholder="Alternate Phone (Optional)"
          name="alternateContact"
          onChange={handleChange}
          value={formData.alternateContact}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm text-[#8d949e]">Address Type</h3>
        <div className="flex gap-2">
          <h2
            className="text-xs flex items-center gap-2 cursor-pointer"
            onClick={() => {
              handleAddressTypeChange("home");
            }}
          >
            <span
              className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b] rounded-full ${
                formData.addressType === "home" ? "bg-blue-700" : ""
              }`}
            ></span>{" "}
            Home
          </h2>
          <h2
            className="text-xs flex items-center gap-2 cursor-pointer"
            onClick={() => {
              handleAddressTypeChange("work");
            }}
          >
            <span
              className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b] rounded-full ${
                formData.addressType === "work" ? "bg-blue-700" : ""
              }`}
            ></span>{" "}
            Work
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-end mt-2 lg:flex-row-reverse">
        <button
          className="text-[#221EFF] text-base px-7 py-1"
          onClick={handleCancelBtn}
        >
          CANCEL
        </button>
        <button className="bg-[#221EFF] text-base px-7 py-1 rounded-sm">
          SAVE
        </button>
      </div>
    </div>
  );
}

export default AddNewAddress;
