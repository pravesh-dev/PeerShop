import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleStatusCartTab } from "../Stores/cart";


function CartTab() {
    const carts = useSelector(store => store.cart.items);
    const statusCartTab = useSelector(store => store.cart.statusCartTab)
    const dispatch = useDispatch();

    const handleShowCart = () =>{
        dispatch(toggleStatusCartTab())
    }
  return (
    <div className={`w-full h-screen duration-300 fixed top-0 ${statusCartTab === false ? 'left-full' : 'left-0'} z-[99] bg-[#111] flex flex-col justify-center items-center`}>
      <h2 className="text-xl mb-10 w-full text-center relative md:text-2xl lg:w-[60rem] lg:tracking-widest">
        <span className="absolute top-1/2 -translate-y-1/2 left-3 text-lg md:text-2xl lg:left-0 cursor-pointer" onClick={handleShowCart}>
          <IoChevronBackOutline />
        </span>
        My Shopping Cart
      </h2>
      <div className="w-[95%] h-[80vh] bg-[#171717] flex flex-col justify-between px-2 py-2 md:px-16 md:py-10 lg:w-[60rem]">
        <div className="w-full h-[75%] flex flex-col gap-6 overflow-y-auto lg:px-2">
            {
                carts.length === 0 ? <p className="text-center text-sm py-6">No items are added</p> : 
            carts.map((item, index)=>{
                return (
                    <CartItem key={index} data={item} />
                )
            })
            }
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2 md:w-[60%]">
            <p className="text-xs">If you have a promotion code, enter it here:</p>
            <div className="flex h-10">
              <input className="bg-transparent border border-white/10 text-xs pl-2 w-[60%] outline-none" type="text" placeholder="Enter your promo code" />
              <button className="w-[40%] text-xl bg-[#0005208e]">
                APPLY
              </button>
            </div>
          </div>
          <button className="w-full text-xl bg-[#A36B00] h-10 md:w-[30%]">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default CartTab;
