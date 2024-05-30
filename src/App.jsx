import React from "react";
import Hero from "./Components/Hero";
import Recommendation from "./Components/Recommendation";
import ItemContainer from "./Components/ItemContainer";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Item from "./Components/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero /> <Recommendation /> <ItemContainer /> <Blogs />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/:id/:name" element={<Item />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
