import React, { useEffect, useState } from "react";
// import bag1 from "../assets/images/items/bag1.png";
import close from "../assets/images/Icons/close.png";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";

function TopRated() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (query = "", limit = 150) => {
      try {
        let response = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=${limit}`
        );
        let data = await response.json();
        setItems(data.products);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const itemPage = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error loading the new arrivals.</p>;

  return (
    <>
      <div className="w-full p-2 flex flex-wrap justify-center gap-2 font-krona lg:justify-start lg:w-[61.6rem] lg:p-0 xl:w-[65.5rem] xl:gap-7">
        {items.map((item, index) => {
          if (item.rating > 4.5) {
            return (
              // <div
              //   key={index}
              //   className="w-36 h-48 bg-[#090909] flex flex-col items-start justify-between p-3 sm:w-52 sm:h-[17rem] lg:w-60 lg:h-80 relative"
              //   onClick={() => itemPage("/item", { state: { item } })}
              // >
              //   <img
              //     className="w-32 sm:w-48 lg:w-56"
              //     src={item.thumbnail}
              //     alt={item.title}
              //   />
              //   <h2 className="text-[0.38rem] sm:text-[0.58rem] lg:text-[0.7rem]">
              //     {item.title}
              //   </h2>
              //   <button className="bg-[#4f717949] text-[#3598AF] text-[0.45rem] px-2 py-[0.04rem] rounded-sm sm:text-[0.60rem] sm:px-4 sm:py-[0.14rem]">
              //     {item.rating}
              //   </button>
              //   <div className="w-full flex justify-between items-center">
              //     <span className="text-[0.52rem] sm:text-[0.8rem]">
              //       ${item.price}
              //     </span>
              //     <button className="text-[0.3rem] bg-[#0039CA] px-3 py-[0.3rem] rounded-sm sm:text-[0.4rem] sm:px-4 sm:py-[0.4rem] hover:bg-[#0039cac9]">
              //       Add to cart
              //     </button>
              //   </div>
              // </div>
              <ItemCard key={index} data={item} />
            );
          }
        })}
      </div>
    </>
  );
}

export default TopRated;
