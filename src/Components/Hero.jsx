import React from "react";
import bgImage from "../assets/images/hero-bg.png";
import logoName from "../assets/images/logo-name.png";
import adidas from "../assets/images/Icons/adidas.png"
import dior from "../assets/images/Icons/dior.png"
import nike from "../assets/images/Icons/nike.png"
import puma from "../assets/images/Icons/puma.png"
import zara from "../assets/images/Icons/zara.png"
import Header from "./Header";
import Button from "./Button";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Header />
      <img className="w-full h-full object-cover" src={bgImage} alt="" />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black via-black/40 to-black/80 flex flex-col justify-between py-8 lg:py-12">
        <div></div>
        <div className="w-full flex flex-col gap-1 items-center lg:gap-3">
          <img className="w-32 lg:w-40" src={logoName} alt="Pear shop" />
          <h1 className="w-80 text-center tracking-widest mb-4 lg:text-2xl lg:w-[30rem]">
            Elevate your style with our curated collection - Shop now and rede!
          </h1>
          <Button />
        </div>
        <div className="flex items-center justify-center gap-6 lg:gap-28">
          <img className="w-9 lg:w-14" src={nike} alt="" />
          <img className="w-9 lg:w-14" src={adidas} alt="" />
          <img className="w-9 lg:w-14" src={zara} alt="" />
          <img className="w-9 lg:w-14" src={puma} alt="" />
          <img className="w-9 lg:w-14" src={dior} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
