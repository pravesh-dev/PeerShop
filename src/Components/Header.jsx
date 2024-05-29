import React, { useState, useEffect, useRef } from "react";

import cart from "../assets/images/Icons/cart.png";
import menu from "../assets/images/Icons/menu.png";
import logoName from "../assets/images/logo-name.png";
import close from "../assets/images/Icons/close.png";
import profile from '../assets/images/profile.jpg'
import profileDef from '../assets/images/profileDef.svg'
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusCartTab } from "../Stores/cart";


function Header() {
  const [isNavHidden, setIsNavHidden] = useState(true);
  const carts = useSelector(store => store.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();
  useEffect(()=>{
    let total = 0;
    carts.forEach(item => total += item.quantity)
    setTotalQuantity(total);
  }, [carts])
  const handleShowCart = () =>{
    dispatch(toggleStatusCartTab())
  }

  return (
    <>
      <div className={`w-80 h-screen bg-[#111] z-[99] fixed top-0 py-3 duration-200 ease-in-out ${isNavHidden ? '-left-full' : 'left-0'}`}>
        <div className="flex items-center justify-between px-3">
          <img className="w-32" src={logoName} alt="Peer shop" />
          <img className="w-7" src={close} alt="close png" onClick={() => { setIsNavHidden(true) }} />
        </div>
        <nav className="mobile_nav flex flex-col gap-2 mt-14">
          <a className="w-full bg-[#69409107] text-xl px-3 py-2" href="#">Home</a>
          <a className="w-full bg-[#69409107] text-xl px-3 py-2" href="#">About Us</a>
          <a className="w-full bg-[#69409107] text-xl px-3 py-2" href="#">Shop</a>
          <a className="w-full bg-[#69409107] text-xl px-3 py-2" href="#">Blogs</a>
          <a className="w-full bg-[#69409107] text-xl px-3 py-2" href="#">Contact</a>
        </nav>
      </div>
      <div className="w-full py-5 px-3 flex items-center justify-between fixed top-0 left-0 z-[98] lg:px-12 lg:py-6 bg-gradient-to-t from-transparent to-black backdrop-blur-sm">
        {/* <img src={logo} alt="logo image" className="w-6 lg:w-10" /> */}
          <span className="w-8 h-8 rounded-full overflow-hidden lg:w-12 lg:h-12"><img className="w-full h-full object-cover" src={profileDef} alt="" /></span>
          <h2 className="font-krona uppercase text-sm lg:hidden">PeerShop</h2>
        <nav className={`desktop_nav gap-14 hidden lg:flex`}>
          <a className="text-sm hover:scale-105 duration-300 hover:text-cyan-200" href="#">Home</a>
          <a className="text-sm hover:scale-105 duration-300 hover:text-cyan-200" href="#">About Us</a>
          <a className="text-sm hover:scale-105 duration-300 hover:text-cyan-200" href="#">Shop</a>
          <a className="text-sm hover:scale-105 duration-300 hover:text-cyan-200" href="#">Blog</a>
        </nav>
        <div className="flex items-center gap-3 lg:gap-7">
          <div className="relative">
            <img className="w-4 lg:w-6 cursor-pointer" src={cart} alt="cart icon" onClick={handleShowCart} />
            <span className="absolute -top-[40%] -right-[30%] bg-red-700 w-3 h-3 rounded-full flex justify-center items-center text-[0.55rem] lg:w-4 lg:h-4 lg:text-[0.65rem]">{totalQuantity}</span>
          </div>
          <img className="w-5 lg:hidden" src={menu} alt="menu bar icon" onClick={() => { setIsNavHidden(false) }} />
        </div>
      </div>
    </>
  );
}

export default Header;
