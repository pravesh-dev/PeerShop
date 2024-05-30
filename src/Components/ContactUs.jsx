import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className='w-full h-screen bg-[#111] flex justify-center items-center background_design2'>
      <div className='bg-[#0000004b] w-80 h-[27rem] mx-1 mt-8  flex gap-5 flex-col items-center justify-center border border-white/20 rounded-sm md:w-[30rem] lg:mt-14 lg:w-[27rem] lg:h-[30rem]'>
        <h1 className='text-2xl font-krona mb-5 lg:mb-8'>CONTACT US</h1>
        <form action="/" method='post' className='w-full flex flex-col items-center px-2 gap-3 md:px-10 lg:gap-5'>
            <input type="text" name="name" placeholder='Enter your name' className='form_input' />
            <input type="email" name="email" placeholder='Enter your email' className='form_input' />
            <textarea className='bg-[#26262648] outline-none border border-white/25 rounded-sm pl-2 text-sm h-28 w-full resize-none' name="message" placeholder='Message here'></textarea>
            <button className='flex items-center justify-center gap-2 bg-slate-500 text-black font-bold w-full h-10 mt-3 rounded-md'>Send Message <span><FaLongArrowAltRight /></span></button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
