import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Home from "./components/pages/Home";

import "./App.css";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";
import Calendar from "./components/pages/Calendar";
import Sponsors from "./components/pages/Sponsors";

import { Analytics } from "@vercel/analytics/react";
import Leadership from "./components/pages/Leadership";
import ZanePage from "./components/pages/ZanePage";
import CoenPage from "./components/pages/CoenPage";
import MukulPage from "./components/pages/MukulPage";
import EthanPage from "./components/pages/EthanPage";
import SachinPage from "./components/pages/SachinPage";
import AboutUs from "./components/pages/AboutUs"

function App() {
  return (
      <>
        <Analytics />
        <Router>
          <ParallaxProvider>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/leadership" element={<Leadership/>}></Route>
              <Route path="/leadership/Zane-Aloia" element={<ZanePage />}></Route>
              <Route path="/leadership/Mukul-Naidu" element={<MukulPage />}></Route>
              <Route path="/leadership/Ethan-Berg" element={<EthanPage />}></Route>
              <Route path="/leadership/Coen-Shields" element={<CoenPage />}></Route>
              <Route path="/leadership/Sachin-Sangvikar" element={<SachinPage />}></Route>
              <Route path="/AboutUs" element={<AboutUs />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/sponsors" element={<Sponsors />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
            </Routes>
            <Footer />
          </ParallaxProvider>
        </Router>
      </>
  );
}

export default App;
