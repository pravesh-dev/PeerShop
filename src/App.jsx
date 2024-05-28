import React from "react";
import Hero from "./Components/Hero";
import Recommendation from "./Components/Recommendation";
import ItemContainer from "./Components/ItemContainer";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Item from "./Components/Item";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartTab from "./Components/CartTab";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<><Hero/> <Recommendation/> <ItemContainer/> <Blogs/><Footer/></>}></Route>
      <Route path="/:id/:name" element={<Item/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
