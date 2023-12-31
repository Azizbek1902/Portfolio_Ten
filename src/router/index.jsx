import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
