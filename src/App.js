import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import BtnSlider from "./components/Slider/BtnSlider";
import dataSlider from "./components/Slider/dataSlider";
import Slider from "./components/Slider/Slider";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import React from "react";
import Footer from "./components/Footer";
import Contact from "./page/contact";
import Appointment from "./page/appointment";
import Services from "./page/services";
import Hairdresser from "./page/hairdresser";
import Customer from "./page/customer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div id="top-label">
            <span id="hallo"> Saçlarınız shine'da parlasın.</span>
          </div>
          <div id="top-content">
            <div id="nav-div">
              <nav id="navigation-panel">
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>
                    isActive ? "navActive" : "underline"
                  }
                >
                  Anasayfa &nbsp;
                </NavLink>
                <NavLink
                  to="/About"
                  className={({ isActive }) => (isActive ? "navActive" : "")}
                >
                  Hakkımızda &nbsp;
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "navActive" : "")}
                >
                  Hizmetlerimiz &nbsp;
                </NavLink>
                <NavLink
                  to="/hairdresser"
                  className={({ isActive }) => (isActive ? "navActive" : "")}
                >
                  Kuaförlerimiz &nbsp;
                </NavLink>
                <NavLink
                  to="/customer"
                  className={({ isActive }) => (isActive ? "navActive" : "")}
                >
                  Müşterilerimiz &nbsp;
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "navActive" : "")}
                >
                  İletişim &nbsp;
                </NavLink>
                <NavLink
                  to="/appointment"
                  className={({ isActive }) => (isActive ? "navActive" : "")}
                >
                  Randevu al &nbsp;
                </NavLink>
              </nav>
            </div>
          </div>

          <div id={"content"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/hairdresser" element={<Hairdresser />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment" element={<Appointment />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
