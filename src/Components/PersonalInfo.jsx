import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserName, setIsAccSetting } from "../Stores/user";

function PersonalInfo() {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { name, email, contact, gender } = useSelector((store) => store.user);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: name,
    oldEmail: email,
    newEmail: '',
    contact: contact,
    gender: gender || 'N/A',
  });

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

  const handleSubmit = async (e) => {
    try{
      let response = await fetch('http://localhost:3000/user/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });
      if(response.ok){
        let data = await response.json();
        console.log(data)
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false)
          dispatch(addUserName({userName: data.user.name, userEmail: data.user.email, userContact: data.user.contact, userGender: data.user.gender}))
          navigate('/')
        }, 2000);
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="w-full h-full relative flex flex-col">
      <h2 className={`bg-black/80 text-green-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${submitted ? 'top-0' : '-top-14'}`}>User data updated successfully.</h2>
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
          className="text-xs flex items-center gap-2 cursor-pointer"
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
          className="text-xs flex items-center gap-2 cursor-pointer"
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
      <h3 className="text-sm mb-1 mt-4">Current Email Address</h3>
      <input
        className="profile_inputs"
        type="email"
        name="oldEmail"
        placeholder="Email address"
        disabled
        value={formData.oldEmail}
        onChange={handleChange}
      />
      <h3 className="text-sm mb-1 mt-4">New Email Address</h3>
      <input
        className="profile_inputs"
        type="email"
        name="newEmail"
        placeholder="Email address"
        disabled={!isEdit}
        value={formData.newEmail}
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
      onClick={handleSubmit}
        className={`bg-[#221EFF] text-base px-10 py-2 rounded-sm mt-6 self-end lg:self-start ${
          isEdit ? "block" : "hidden"
        }`}
        type="submit"
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
