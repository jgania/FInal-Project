import React from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./NavbarComp";

function ContactUs() {
    return(
        <div className="ContactUs">
            <NavbarComp/>
            <h1>Contact Us Page</h1>
        </div>
    )
}

export default ContactUs;