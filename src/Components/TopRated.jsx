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
              <ItemCard key={index} data={item} />
            );
          }
        })}
      </div>
    </>
  );
}

export default TopRated;
