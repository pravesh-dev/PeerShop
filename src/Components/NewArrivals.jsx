import React, { useEffect, useState } from "react";
// import bag1 from "../assets/images/items/bag1.png";
import close from '../assets/images/Icons/close.png'

function NewArrivals() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clickedImage, setClickedImage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("/newArrival.json");
        let data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handelClickedImage = (img) => {
    setClickedImage(img);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error loading the new arrivals.</p>;

  return (
    <div className="w-full p-2 flex flex-wrap justify-center gap-2 font-krona lg:justify-start lg:w-[61.6rem] lg:p-0 xl:w-[65.5rem] xl:gap-7">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="w-36 h-48 bg-[#090909] flex flex-col items-start justify-between p-3 sm:w-52 sm:h-[17rem] lg:w-60 lg:h-80 relative"
          >
            <img
              className="w-32 sm:w-48 lg:w-56"
              src={item.img}
              alt={item.name}
            />
            <img
              className="w-32 sm:w-48 lg:w-56 absolute top-2 left-2 hover:scale-105 duration-300"
              src={item.img}
              alt={item.name}
              onClick={() => {
                setIsClicked(true);
                handelClickedImage(item.img);
              }}
            />
            <h2 className="text-[0.38rem] sm:text-[0.58rem] lg:text-[0.7rem]">
              {item.name}
            </h2>
            <button className="bg-[#4f717949] text-[#3598AF] text-[0.45rem] px-2 py-[0.04rem] rounded-sm sm:text-[0.60rem] sm:px-4 sm:py-[0.14rem]">
              {item.rating}
            </button>
            <div className="w-full flex justify-between items-center">
              <span className="text-[0.52rem] sm:text-[0.8rem]">
                ${item.price}
              </span>{" "}
              <button className="text-[0.3rem] bg-[#0039CA] px-3 py-[0.3rem] rounded-sm sm:text-[0.4rem] sm:px-4 sm:py-[0.4rem] hover:bg-[#0039cac9] active:scale-95 duration-300">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
      <div
        className={`w-full h-screen fixed top-0 left-0 bg-black/10 backdrop-blur-lg z-[99] justify-center items-center hidden lg:${
          isClicked ? "flex" : ""
        }`}
      >
        <img className="absolute top-16 left-[87%] cursor-pointer" src={close} alt="" onClick={()=>{
          setIsClicked(false)
          setClickedImage('')
        }} />
        <div className="w-[30rem] h-[30rem] filter drop-shadow-[0_0_5px_#ffffff23]">
          <img
            className="w-full h-full object-cover"
            src={clickedImage}
            alt="clicked Images"
          />
        </div>
      </div>
      <div className="w-36 h-48 flex gap-2 items-center justify-center text-xs sm:w-52 sm:h-[17rem] lg:w-60 lg:h-80">
        View all{" "}
        <span className="w-3 h-3 p-2 text-sm bg-black flex justify-center items-center rounded-full">
          ‹
        </span>
      </div>
    </div>
  );
}

export default NewArrivals;
