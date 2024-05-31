import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  const [hoverLink, setHoverLink] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: '',
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
    ...formData, [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(formData)
    if(formData.password === formData.confirmPassword){
      try{
        let response = await fetch('http://localhost:3000/user/userCreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      })
      if(response.ok){
        setFormData({name: '', email: '', contact: '', password: '', confirmPassword: ''})
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
        }, 3000);
      }
      else{
        console.log('error occurs while submitting form')
      }
      }catch(err){
        console.log(err)
      }
    }
    else{
      console.log('not equal')
    }
  }
  return (
    <div className="w-full h-screen bg-[#111] flex justify-center items-center background_design">
      <div className="bg-[#0000004b] w-80 h-[30rem] mx-1  flex gap-5 flex-col items-center justify-center border border-white/20 rounded-sm md:w-[30rem] lg:mt-14 lg:w-[27rem] lg:h-[33rem] relative overflow-hidden">
      <h2 className={`bg-black/80 text-green-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${submitted ? 'top-0' : '-top-14'}`}>Form submitted successfully.</h2>
        <h1 className="text-2xl font-krona lg:mb-5">SIGN UP</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center px-2 gap-3 md:px-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
            className="form_input"
            value={formData.name}
            onChange={handleChange}
          />
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
            type="tel"
            name="contact"
            placeholder="Enter your contact no."
            className="form_input"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Create password"
            className="form_input"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="form_input"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button className="flex items-center justify-center gap-2 border bg-white text-black font-bold w-full h-10 mt-3 rounded-md duration-300 hover:bg-transparent hover:text-white">
            Sign up{" "}
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </form>
        <p className="text-sm tracking-widest">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#7B4CFF] tracking-normal font-bold relative"
            onMouseOver={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
          >
            <span
              className={`absolute left-0 bottom-0 h-[0.08rem] bg-[#7B4CFF] duration-300 ${
                hoverLink ? "w-full" : "w-0"
              }`}
            ></span>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
