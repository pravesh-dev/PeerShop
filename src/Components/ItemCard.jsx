import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../Stores/cart";

function ItemCard(props) {
  const carts = useSelector(store => store.cart.items);
  const loginStatus = useSelector(store => store.user.loginStatus)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id, thumbnail, title, rating, price } = props.data;
  const link = `${id}/${title.split(" ").join("-").toLowerCase()}`;

  const handleAddToCart = () =>{
    if(!loginStatus){
      navigate('/signUp')
    }
    else{
      dispatch(addToCart({
        productId: id,
        quantity: 1
      }))
    }
  }
  return (
    <div
      className="w-36 h-48 bg-[#090909] flex flex-col items-start justify-between p-3 sm:w-52 sm:h-[17rem] lg:w-60 lg:h-80 relative"
      //   onClick={() => itemPage("/item", { state: { item } })}
    >
      <Link to={link}>
        <img className="w-32 sm:w-48 lg:w-56" src={thumbnail} alt={title} />
      </Link>
      <h2 className="text-[0.38rem] sm:text-[0.58rem] lg:text-[0.7rem]">
        {title}
      </h2>
      <button className="bg-[#4f717949] text-[#3598AF] text-[0.45rem] px-2 py-[0.04rem] rounded-sm sm:text-[0.60rem] sm:px-4 sm:py-[0.14rem]">
        {rating}
      </button>
      <div className="w-full flex justify-between items-center">
        <span className="text-[0.52rem] sm:text-[0.8rem]">${price}</span>{" "}
        <button className="text-[0.3rem] bg-[#0039CA] px-3 py-[0.3rem] rounded-sm sm:text-[0.4rem] sm:px-4 sm:py-[0.4rem] hover:bg-[#0039cac9] active:scale-95 duration-300" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
