import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../Stores/cart";

function CartItem(props) {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setDetail(data);
    };
    fetchItem();
  }, [productId]);
  const handleMinusCart = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handleAddCart = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <div className="flex justify-between items-center text-white border-b border-white/10 pb-1">
      <div className="flex gap-3 items-center md:gap-6">
        <img src={detail.thumbnail} className="w-10 md:w-16" alt="" />
        <div className="w-24 md:w-44">
          <h2 className="text-[0.55rem] md:text-[0.9rem]">{detail.title}</h2>
          <h3 className="text-[0.5rem] md:text-[0.7rem]">Type: <span className="text-white/70">{detail.category}</span></h3>
        </div>
      </div>
      <div className="flex gap-2 items-center md:gap-6">
        <div className="w-[4.6rem] flex justify-between md:w-[7rem]">
          <button
            className="bg-[#00052017] w-6 h-6 border border-white/5 md:w-9 md:h-9"
            onClick={handleMinusCart}
          >
            -
          </button>
          <span className="w-6 h-6 flex justify-center items-center text-sm md:w-9 md:h-9 md:text-lg">{quantity}</span>
          <button className="bg-[#000520] w-6 h-6 md:w-9 md:h-9" onClick={handleAddCart}>
            +
          </button>
        </div>
        <p className="text-sm md:text-lg w-16 md:w-20">${(detail.price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;
