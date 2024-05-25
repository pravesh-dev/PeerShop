import React from "react";
import logoName from "../assets/images/logo-name.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { AiOutlineGlobal, AiFillInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full bg-[#171717] px-3 py-4 pt-10 flex flex-col gap-4 lg:gap-8 lg:px-14">
      <div className="w-full flex flex-col gap-5 items-start justify-between relative sm:flex-row sm:justify-start sm:gap-9 lg:gap-32">
        <div className="flex items-center gap-1 absolute top-1 right-1 text-white/60"><span><AiOutlineGlobal /></span> English</div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl lg:text-3xl">Contact Info</h2>
          <p className="flex items-center gap-2 lg:gap-1">
            <span>
              <IoLocationSharp color="#FF6767" />
            </span>{" "}
            <span className="text-xs font-barlowLight lg:text-[0.6rem]">300 west cory streen</span>
          </p>
          <p className="flex items-center gap-2 lg:gap-1">
            <span>
              <IoMdCall color="#FF6767" />
            </span>{" "}
            <a className="text-xs font-barlowLight lg:text-[0.6rem]" href="tel:+91 9991831473">+91 9991831473</a>
          </p>
          <p className="flex items-center gap-2 lg:gap-1">
            <span>
              <IoIosMail color="#FF6767" />
            </span>{" "}
            <a className="text-xs font-barlowLight lg:text-[0.6rem]" href="mailto:praveshsaini.dev@gmail.com">
              praveshsaini.dev@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl">Customer Care</h2>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">Returns</a>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">Shipping</a>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">Size Guide</a>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">Track Orders</a>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">My Orders</a>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl">Quick Links</h2>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">About Us</a>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">Blogs</a>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">Shop</a>
          <a className="text-xs font-barlowLight lg:text-[0.9rem] lg:tracking-wider lg:font-barlowLight" href="#">Contact Us</a>
        </div>
        <div className="hidden sm:flex"></div>
      </div>
      <div className="flex justify-between items-center">
        <img className="w-16 sm:w-24" src={logoName} alt="Peer Shop" />
        <p className="text-[0.45rem] text-white/60 sm:text-[0.6rem] sm:tracking-widest">peerShop © 2024 All Rights Reserved</p>
        <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[0.7rem] sm:text-[0.9rem]"><AiFillInstagram /></span>
            <span className="text-[0.7rem] sm:text-[0.9rem]"><MdOutlineFacebook /></span>
            <span className="text-[0.7rem] sm:text-[0.9rem]"><FaYoutube /></span>
            <span className="text-[0.7rem] sm:text-[0.9rem]"><FaLinkedin /></span>
            <span className="text-[0.7rem] sm:text-[0.9rem]"><FaXTwitter /></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
