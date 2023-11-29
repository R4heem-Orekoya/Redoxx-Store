import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Cartpage from "./Pages/Cartpage";
import Productpage from "./Pages/Productpage";
import Searchpage from "./Pages/Searchpage";
import Footer from "./Components/Footer";
import Scrolltotop from "./Components/Scrolltotop";
import { ToastContainer } from 'react-toastify';
import Cancel from "./Pages/Cancel";
import Success from "./Pages/Success";


const App = () => {


  return (
    <>
      <Navbar />
      <Scrolltotop />

      <div className="w-[min(1400px,90%)] mx-auto pb-20 pt-4 md:pt-8">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="/product/:id" element={<Productpage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
