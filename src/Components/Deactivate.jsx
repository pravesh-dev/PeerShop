import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUserName } from "../Stores/user";

function Deactivate() {
  const loginStatus = useSelector(store => store.user.loginStatus);
  const { email } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDeactivate, setIsDeactivate] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  useEffect(() => {
    if (!loginStatus) {
      navigate("/");
    }
  }, [loginStatus, navigate])

  const handleChange = (e) =>{
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:3000/user/delete', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });
      if(response.ok){
        let data = await response.json();
        setIsDeactivate(true)
        setTimeout(() => {
            setIsDeactivate(false)
        }, 2000);
    }
    else if(response.status === 401){
          let data = await response.json();
        setIsError(true);
        setErrMsg(data.message)
        setTimeout(() => {
            setIsError(false);
            setErrMsg('')
        }, 2000);
      }
    else if(response.status === 404){
          let data = await response.json();
        setIsError(true);
        setErrMsg(data.message)
        setTimeout(() => {
            setIsError(false);
            setErrMsg('')
        }, 2000);
    }
    else{
          let data = await response.json();
        setIsError(true);
        setErrMsg('Server Error. Please try again later!')
        setTimeout(() => {
            setIsError(false);
            setErrMsg('')
        }, 2000);
      }
    }catch(err){
        setIsError(true);
        setErrMsg('Something went wrong. Please try again later!');
        setTimeout(() => {
          setIsError(false)
          setErrMsg('');
        }, 2000);
    }
  }
  return (
    <div className="w-full h-screen bg-[#111] flex justify-center items-center background_design">
      <div className="bg-[#0000004b] w-80 h-[30rem] mx-1  flex gap-5 flex-col items-center justify-center border border-white/20 rounded-sm md:w-[30rem] lg:mt-14 relative overflow-hidden">
      <h2 className={`bg-black/80 text-green-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${isDeactivate ? 'top-0' : '-top-14'}`}>Your account has been deleted</h2>
      <h2 className={`bg-black/80 text-red-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${isError ? 'top-0' : '-top-14'}`}>{errMsg}</h2>
        <h1 className="text-xl font-krona lg:mb-5">DELETE ACCOUNT</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center px-2 gap-3 md:px-10"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
            className="form_input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            autoComplete="off"
            className="form_input"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="flex items-center justify-center gap-2 border bg-white text-black font-bold w-full h-10 mt-3 rounded-md duration-300 hover:bg-transparent hover:text-white">
            Deactivate{" "}
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Deactivate;
