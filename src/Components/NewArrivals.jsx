import React, { useEffect, useState } from "react";
// import bag1 from "../assets/images/items/bag1.png";


function NewArrivals() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("/newArrival.json");
        let data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full p-2 flex flex-wrap justify-center gap-2 font-krona">
      {items.map((item, index) => {
        return (
          <div key={index} className="w-36 h-48 bg-[#090909] flex flex-col items-start justify-between p-3">
            <img className="w-32" src={item.img} alt={item.name} />
            <h2 className="text-[0.38rem]">{item.name}</h2>
            <button className="bg-[#4f717949] text-[#3598AF] text-[0.45rem] px-2 py-[0.04rem] rounded-sm">
              {item.rating}
            </button>
            <div className="w-full flex justify-between items-center">
              <span className="text-[0.52rem]">${item.price}</span>{" "}
              <button className="text-[0.3rem] bg-[#0039CA] px-3 py-[0.3rem] rounded-sm">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
      <div className="w-36 h-48 bg-[#090909] flex flex-col items-start justify-between p-3">
        <img className="w-32" src='' alt="" />
        <h2 className="text-[0.38rem]">Classic School Backpack</h2>
        <button className="bg-[#4f717949] text-[#3598AF] text-[0.45rem] px-2 py-[0.04rem] rounded-sm">
          4.1
        </button>
        <div className="w-full flex justify-between items-center">
          <span className="text-[0.52rem]">$45.12</span>{" "}
          <button className="text-[0.3rem] bg-[#0039CA] px-3 py-[0.3rem] rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
