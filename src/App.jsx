import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Navbar/Nabar"
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
