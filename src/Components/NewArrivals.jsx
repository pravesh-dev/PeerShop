import React, { useEffect, useState } from "react";
// import bag1 from "../assets/images/items/bag1.png";
import close from "../assets/images/Icons/close.png";
import search from "../assets/images/Icons/search.png";

function NewArrivals() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clickedImage, setClickedImage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async (query = "") => {
    try {
      let response = await fetch(`https://dummyjson.com/products/${query && `search?q=${query}`}`);
      let data = await response.json();
      setItems(data.products);
      // console.log(data.products);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      if(searchInput){
        setTimeout(() => {
          fetchData(searchInput)
        }, 500);
      }
    };
    handleSearch();
  }, [searchInput])

  const handelClickedImage = (img) => {
    setClickedImage(img);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error loading the new arrivals.</p>;

  return (
    <div className="flex flex-col">
      <div
        className={`search-bar w-[80%] mx-auto my-3 h-8 flex justify-between items-center border border-white/30 bg-white/10 rounded-3xl lg:my-7 lg:w-[45%] lg:h-10 px-5 duration-500`}
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
        <img
          className={`w-4 mr-2 cursor-pointer ${
            searchInput !== "" ? "hidden" : "block"
          }`}
          src={search}
          alt="search icon"
          onClick={()=>{handleSearch()}}
        />
        <img
          className={`w-4 mr-2 cursor-pointer ${
            searchInput !== "" ? "block" : "hidden"
          }`}
          src={close}
          alt="close png"
          onClick={() => {
            setSearchInput("");
          }}
        />
      </div>
      <div className="w-full p-2 flex flex-wrap justify-center gap-2 font-krona lg:justify-start lg:w-[61.6rem] lg:p-0 xl:w-[65.5rem] xl:gap-7">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="w-36 h-48 bg-[#090909] flex flex-col items-start justify-between p-3 sm:w-52 sm:h-[17rem] lg:w-60 lg:h-80 relative"
            >
              <img
                className="w-32 sm:w-48 lg:w-56"
                src={item.thumbnail}
                alt={item.title}
              />
              <img
                className="w-32 scale-95 sm:w-48 lg:w-56 absolute top-2 left-2 hover:scale-105 duration-300 bg-[#111]"
                src={item.thumbnail}
                alt={item.title}
                onClick={() => {
                  setIsClicked(true);
                  handelClickedImage(item.thumbnail);
                }}
              />
              <h2 className="text-[0.38rem] sm:text-[0.58rem] lg:text-[0.7rem]">
                {item.title}
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
          <img
            className="absolute top-16 left-[87%] cursor-pointer"
            src={close}
            alt=""
            onClick={() => {
              setIsClicked(false);
              setClickedImage("");
            }}
          />
          <div className="w-[30rem] h-[30rem] filter drop-shadow-[0_0_5px_#ffffff23]">
            <img
              className="w-full h-full object-cover bg-[#111]"
              src={clickedImage}
              alt="clicked Images"
            />
          </div>
        </div>
        {/* <div className="w-36 h-48 flex gap-2 items-center justify-center text-xs sm:w-52 sm:h-[17rem] lg:w-60 lg:h-80">
          View all{" "}
          <span className="w-3 h-3 p-2 text-sm bg-black flex justify-center items-center rounded-full">
            ‹
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default NewArrivals;
