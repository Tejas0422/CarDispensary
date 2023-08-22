import React from "react";
import { Route, Routes } from 'react-router-dom';
import Services from "../Services/Service";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Periodic from "../Services/Periodic";
import AcService from "../Services/ACService";
import DentPaint from "../Services/DentPaint";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Periodic" element={<Periodic />} />
        <Route path="/DentPaint" element={<DentPaint/>} />
        <Route path="/AcService" element={<AcService />} />
        <Route path="/Services" element={<Home/>} />
    
     
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;

