import React, { useEffect, useState } from "react";
import close from "../assets/images/Icons/close.png";
import search from "../assets/images/Icons/search.png";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";

function NewArrivals() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async (query = "", limit = 40) => {
    try {
      let response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=${limit}`);
      let data = await response.json();
      setItems(data.products);
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

  const itemPage = useNavigate();

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
          autoComplete="off"
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
            <ItemCard key={index} data={item} />
          );
        })}
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
