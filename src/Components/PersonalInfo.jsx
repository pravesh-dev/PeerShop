import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsAccSetting } from "../Stores/user";

function PersonalInfo() {
  const dispatch = useDispatch();
  const { name, email, contact, gender } = useSelector((store) => store.user);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    contact: contact,
    gender: gender || 'N/A',
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderChange = (selectedGender) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));
  };

  const handleBackBtn = () => {
    dispatch(setIsAccSetting({ accSetting: false }));
  };

  return (
    <div className="w-full h-full relative flex flex-col">
      <div className="flex items-center gap-5">
        <span className="text-lg md:hidden" onClick={handleBackBtn}>
          <FaAngleLeft />
        </span>
        <h1 className="text-white text-xl">Personal Information</h1>
        <button
          className={`text-[#3F3BFF] font-bold ${isEdit ? "hidden" : "block"}`}
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
        <button
          className={`text-[#3F3BFF] font-bold ${isEdit ? "block" : "hidden"}`}
          onClick={() => {
            setIsEdit(false);
          }}
        >
          Cancel
        </button>
      </div>
      <h3 className="text-sm mb-1 mt-4">Your Name</h3>
      <div className="flex flex-col gap-2 lg:flex-row">
        <input
          className="profile_inputs"
          type="text"
          name="name"
          placeholder="First Name"
          value={formData.name}
          disabled={!isEdit}
          onChange={handleChange}
        />
      </div>
      <h3 className="text-sm mb-1 mt-4">Your Gender</h3>
      <div className="flex gap-2">
        <h2
          className="text-xs flex items-center gap-2"
          onClick={() => {
            if (isEdit) {
              handleGenderChange('male');
            }
          }}
        >
          <span
            className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b] rounded-full ${
              formData.gender === 'male' ? "bg-blue-700" : ""
            }`}
          ></span>{" "}
          Male
        </h2>
        <h2
          className="text-xs flex items-center gap-2"
          onClick={() => {
            if (isEdit) {
              handleGenderChange('female');
            }
          }}
        >
          <span
            className={`w-3 h-3 border-[0.5px] border-white/30 bg-[#2626264b] rounded-full ${
              formData.gender === 'female' ? "bg-blue-700" : ""
            }`}
          ></span>{" "}
          Female
        </h2>
      </div>
      <h3 className="text-sm mb-1 mt-4">Email Address</h3>
      <input
        className="profile_inputs"
        type="email"
        name="email"
        placeholder="Email address"
        disabled={!isEdit}
        value={formData.email}
        onChange={handleChange}
      />
      <h3 className="text-sm mb-1 mt-4">Mobile Number</h3>
      <input
        className="profile_inputs"
        type="number"
        name="contact"
        placeholder="Enter mobile number"
        disabled={!isEdit}
        value={formData.contact}
        onChange={handleChange}
      />
      <button
        className={`bg-[#221EFF] text-base px-10 py-2 rounded-sm mt-6 self-end lg:self-start ${
          isEdit ? "block" : "hidden"
        }`}
      >
        SAVE
      </button>
      <Link className="text-[#3F3BFF] absolute bottom-4 left-0 text-sm tracking-wider">
        Deactivate Account
      </Link>
    </div>
  );
}

export default PersonalInfo;
