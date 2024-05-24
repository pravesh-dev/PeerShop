import React, { useState, useEffect, useRef } from "react";

import logo from "../assets/images/logo.png";
import search from "../assets/images/Icons/search.png";
import cart from "../assets/images/Icons/cart.png";
import menu from "../assets/images/Icons/menu.png";
import logoName from "../assets/images/logo-name.png";
import close from "../assets/images/Icons/close.png";

function Header() {
  const [isNavHidden, setIsNavHidden] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const handleDocumentClick = (e) =>{
    if(searchRef.current && !searchRef.current.contains(e.target)){
      setShowSearch(false);
    }
  }
  useEffect(() => {
    if(showSearch){
      document.addEventListener('mousedown', handleDocumentClick)
    }
    else{
      document.removeEventListener('mousedown', handleDocumentClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [showSearch]);  

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
      <div className="w-full py-5 px-3 flex items-center justify-between fixed top-0 left-0 z-[98] lg:px-12 lg:py-6">
        <img src={logo} alt="logo image" className="w-6 lg:w-10" />
        <nav className={`desktop_nav gap-14 hidden lg:flex lg:${showSearch ? 'hidden' : ''}`}>
          <a className="text-sm hover:scale-105 duration-300 hover:text-cyan-200" href="#">Home</a>
          <a className="text-sm hover:scale-105 duration-300 hover:text-cyan-200" href="#">About Us</a>
          <a className="text-sm hover:scale-105 duration-300 hover:text-cyan-200" href="#">Shop</a>
          <a className="text-sm hover:scale-105 duration-300 hover:text-cyan-200" href="#">Blog</a>
        </nav>
        <div
          ref={searchRef}
          className={`search-bar w-[60%] h-8 flex justify-between items-center border border-white/30 bg-white/10 rounded-3xl lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-[45%] lg:h-10 px-5 duration-500 ${showSearch ? 'lg:scale-[1]' : 'lg:scale-0'}`}
        >
          <input
            className="w-[80%] h-full pl-1 border-none outline-none bg-transparent text-xs ml-1 lg:text-sm"
            type="text"
            name="search_item"
            id="search_item"
            placeholder="Search items here"
            value={searchInput}
            onChange={(e) => {
              let search = e.target.value;
              setSearchInput(search);
            }}
          />
          <img className={`w-4 mr-2 cursor-pointer ${searchInput !== "" ? 'hidden' : 'block'}`} src={search} alt="search icon" />
          <img className={`w-4 mr-2 cursor-pointer ${searchInput !== "" ? 'block' : 'hidden'}`} src={close} alt="close png" onClick={() => { setSearchInput('') }} />
        </div>
        <div className="flex items-center gap-3 lg:gap-7">
          <img className={`hidden cursor-pointer lg:block lg:${showSearch ? 'hidden' : ''} lg:w-5`} src={search} alt="search icon" onClick={() => { setShowSearch(true) }} />
          <div className="relative">
            <img className="w-4 lg:w-6 cursor-pointer" src={cart} alt="cart icon" />
            <span className="absolute -top-[40%] -right-[30%] bg-red-700 w-3 h-3 rounded-full flex justify-center items-center text-[0.55rem] lg:w-4 lg:h-4 lg:text-[0.65rem]">4</span>
          </div>
          <img className="w-5 lg:hidden" src={menu} alt="menu bar icon" onClick={() => { setIsNavHidden(false) }} />
        </div>
      </div>
    </>
  );
}

export default Header;
