import React from "react";
import Hero from "./Components/Hero";
import Recommendation from "./Components/Recommendation";
import ItemContainer from "./Components/ItemContainer";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Item from "./Components/Item";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            index
            element={
              <>
                <Hero />
                <Recommendation/>
                <ItemContainer />
                <Blogs/>
              </>
            }
          >
          </Route>
          <Route path="/:id/:name" element={<Item/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
