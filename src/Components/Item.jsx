import React, { useEffect, useState } from "react";
import hoodie from "/items/hoodie1.png";
import { IoStar } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Stores/cart";

function Item() {
    const { id } = useParams();
    const carts = useSelector(store => store.cart.items);
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

  useEffect(() => {
    const fetchItem = async () => {
      try{
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setItem(data);
      }
      catch(err){
        window.location.href = '/';
        console.log(err)
      }
    };

    fetchItem();
  }, [id]);

  const handleMinusQuantity = () =>{
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  }
  const handleAddQuantity = () =>{
    setQuantity(quantity + 1) 
  }
  const handleAddToCart = () =>{
    dispatch(addToCart({
      productId: item.id,
      quantity: quantity
    }))
  }
  if (!item) return <p className="w-full h-screen flex justify-center items-center bg-[#111]">Loading...</p>;

  return (
    <div className="w-full h-screen pt-16 px-1 bg-[#111] flex justify-center items-center relative">
      <Link to='/' className="text-[#3a62c7] absolute top-[5.6rem] left-[8%] flex items-center gap-1 text-sm md:top-[9rem] lg:top-[7.5rem] lg:left-[6%]"
      >
        <span>
          <FaLongArrowAltLeft />
        </span>{" "}
        Back
      </Link>
      <div className="w-80 bg-[#1b1b1b4b] flex flex-col items-center py-5 gap-3 md:flex-row md:w-[44rem] md:justify-center md:gap-12 lg:w-[60rem]">
        <img className="w-56 md:w-72 lg:w-96" src={item.thumbnail} alt="" />
        <div className="w-56 md:w-80 flex flex-col gap-1 md:gap-2 lg:w-[28rem]">
          <h3 className="text-white/50 font-barlowLight text-sm md:text-base lg:text-lg">
            {item.brand}
          </h3>
          <h2 className="text-2xl md:text-4xl md:-mt-2 lg:text-5xl">
            {item.title}
          </h2>
          <p className="text-xs font-barlowLight md:text-[0.8rem] lg:text-[1rem] flex gap-2">
            <span>Available Stocks: {item.stock}</span> | <span>{item.availabilityStatus}</span>
          </p>
          <p className="text-sm flex items-center gap-2 md:text-base lg:text-xl lg:gap-4">
            <span className="flex">
              <IoStar color="#0039CA" /> <IoStar color="#0039CA" />
            </span>{" "}
            {/* {item.reviews.length} Reviews */}
          </p>
          <p className="text-[0.55rem] font-barlowLight md:text-[0.7rem] lg:text-[0.85rem]">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-sm md:text-xl lg:text-2xl">${item.price}</h2>
            <div className="flex gap-1 justify-center items-center lg:gap-4">
              <button className="bg-gray-100 text-black w-6 font-bold text-xs rounded-xl flex justify-center items-center md:text-lg md:w-8 md:h-5" onClick={handleMinusQuantity}>
                -
              </button>
              <button className="font-bold text-xs rounded-xl flex justify-center items-center md:text-lg lg:text-2xl">
                {quantity}
              </button>
              <button className="bg-gray-100 text-black w-6 font-bold text-xs rounded-xl flex justify-center items-center md:text-lg md:w-8 md:h-5" onClick={handleAddQuantity}>
                +
              </button>
            </div>
            <button className="text-[0.5rem] bg-[#0039CA] px-3 py-[0.3rem] rounded-sm sm:px-4 sm:py-[0.4rem] hover:bg-[#0039cac9] active:scale-95 duration-300 md:text-[0.55rem] lg:text-xs" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
          <p className="text-[0.7rem] font-barlowLight md:text-[0.8rem] lg:text-base">
            {item.returnPolicy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
