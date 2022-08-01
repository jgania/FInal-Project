import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from "./Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <NavbarComp />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App