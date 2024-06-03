import React, { useState, useEffect, useRef } from "react";

import cart from "../assets/images/Icons/cart.png";
import menu from "../assets/images/Icons/menu.png";
import logoName from "../assets/images/logo-name.png";
import close from "../assets/images/Icons/close.png";
import profile from "../assets/images/profile.jpg";
import profileDef from "../assets/images/profileDef.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusCartTab } from "../Stores/cart";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../Stores/user";

function Header() {
  const [isNavHidden, setIsNavHidden] = useState(true);
  const carts = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user.name);
  const userLoginStatus = useSelector((store) => store.user.loginStatus);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const handleShowCart = () => {
    dispatch(toggleStatusCartTab());
  };
  const handleLogOutClick = async () => {
    setIsNavHidden(true);
    try {
      let response = await fetch("http://localhost:3000/user/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        dispatch(logoutUser());
        navigate("/");
      } else {
        console.log("Logout failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className={`w-80 h-screen bg-[#111] z-[99] fixed top-0 py-3 duration-200 ease-in-out ${
          isNavHidden ? "-left-full" : "left-0"
        }`}
      >
        <div className="flex items-center justify-between px-3">
          <img className="w-32" src={logoName} alt="Peer shop" />
          <img
            className="w-7"
            src={close}
            alt="close png"
            onClick={() => {
              setIsNavHidden(true);
            }}
          />
        </div>
        <nav className="mobile_nav flex flex-col gap-2 mt-14">
          <Link
            to="/"
            className="w-full bg-[#69409107] text-xl px-3 py-2"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Home
          </Link>
          <Link
            className="w-full bg-[#69409107] text-xl px-3 py-2"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            About Us
          </Link>
          <Link
            className="w-full bg-[#69409107] text-xl px-3 py-2"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Shop
          </Link>
          <Link
            className="w-full bg-[#69409107] text-xl px-3 py-2"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="w-full bg-[#69409107] text-xl px-3 py-2"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Contact
          </Link>
          {userLoginStatus ? (
            <Link
              className="bg-red-600 text-white py-1 text-lg font-bold mt-3 mx-1 rounded-sm text-center"
              onClick={handleLogOutClick}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-white text-black py-1 text-lg font-bold mt-3 mx-1 rounded-sm text-center"
              onClick={() => {
                setIsNavHidden(true);
              }}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
      <div className="w-full py-5 px-3 flex items-center justify-between fixed top-0 left-0 z-[98] lg:px-12 lg:py-6 bg-gradient-to-t from-transparent to-black backdrop-blur-sm">
        <span className="w-8 h-8 rounded-full lg:w-12 lg:h-12 relative">
          <img className="w-full h-full object-cover" src={profileDef} alt="" />{" "}
          <h2 className="absolute top-full left-1/2 -translate-x-1/2 text-[0.45rem] lg:text-xs text-white uppercase font-krona">
            {user}
          </h2>
        </span>
        <h2 className="font-krona uppercase text-sm lg:hidden">PeerShop</h2>
        <nav className={`desktop_nav gap-14 hidden lg:flex`}>
          <Link
            to="/"
            className="text-sm hover:scale-105 duration-300 hover:text-cyan-200"
          >
            Home
          </Link>
          <Link className="text-sm hover:scale-105 duration-300 hover:text-cyan-200">
            About Us
          </Link>
          <Link className="text-sm hover:scale-105 duration-300 hover:text-cyan-200">
            Shop
          </Link>
          <Link className="text-sm hover:scale-105 duration-300 hover:text-cyan-200">
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-sm hover:scale-105 duration-300 hover:text-cyan-200"
          >
            Contact us
          </Link>
        </nav>
        <div className="flex items-center gap-3 lg:gap-7">
          <div className="relative">
            <img
              className="w-4 lg:w-6 cursor-pointer"
              src={cart}
              alt="cart icon"
              onClick={handleShowCart}
            />
            <span className="absolute -top-[40%] -right-[30%] bg-red-700 w-3 h-3 rounded-full flex justify-center items-center text-[0.55rem] lg:w-4 lg:h-4 lg:text-[0.65rem]">
              {totalQuantity}
            </span>
          </div>
          <img
            className="w-5 lg:hidden"
            src={menu}
            alt="menu bar icon"
            onClick={() => {
              setIsNavHidden(false);
            }}
          />
          {userLoginStatus ? (
            <Link
              to="/login"
              className="hidden lg:block bg-red-600/20 text-red-600 w-24 py-1 rounded-md text-center font-bold  duration-300 hover:bg-red-600 hover:text-white"
              onClick={handleLogOutClick}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="hidden lg:block bg-white text-black w-24 py-1 rounded-md text-center font-bold border duration-300 hover:bg-transparent hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
