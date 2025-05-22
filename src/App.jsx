import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import RecipeDetail from "./Components/RecipeDetail";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = () => {
  return (
    <>
      <Header />

      <div className="container main-contents">
        {/* <Home /> */}
        {/* <Router> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:recipe" element={<Recipes />} />
            <Route path="/recipeinfo/:id" element={<RecipeDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Home />} />
          </Routes>
        {/* </Router> */}
      </div>

      <Footer />
    </>
  );
};

export default App;
