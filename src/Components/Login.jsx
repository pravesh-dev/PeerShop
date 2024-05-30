import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='w-full h-screen bg-[#111] flex justify-center items-center background_design'>
      <div className='bg-[#0000004b] w-80 h-[30rem] mx-1  flex gap-5 flex-col items-center justify-center border border-white/20 rounded-sm md:w-[30rem] lg:mt-14'>
        <h1 className='text-2xl font-krona lg:mb-5'>LOGIN</h1>
        <form action="/" method='post' className='w-full flex flex-col items-center px-2 gap-3 md:px-10'>
            <input type="email" name="email" placeholder='Enter your email' className='form_input' />
            <input type="password" name="password" placeholder='Enter password' className='form_input' />
            <button className='flex items-center justify-center gap-2 bg-white text-black font-bold w-full h-10 mt-3 rounded-md'>Login <span><FaLongArrowAltRight /></span></button>
        </form>
        <p className='text-sm tracking-widest'>Don't have an account? <Link to='/signUp' className='text-[#7B4CFF] tracking-normal font-bold'>Create New</Link></p>
      </div>
    </div>
  )
}

export default Login
