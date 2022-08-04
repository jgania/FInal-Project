import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom";
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <>
      <NavbarComp />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default App