import React from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./NavbarComp";

function About() {
    return(
        <div className="About">
            <NavbarComp/>
            <h1>About Page</h1>
        </div>
    )
}

export default About;