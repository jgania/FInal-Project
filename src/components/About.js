import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <section className="about">
            <div className="main">
                <img src="" alt="Jordan Gania"></img>
                <div className="about-text">
                    <h1>About Us</h1>
                    <h5>Developer & Data Analyst</h5>
                    <p>I am front-end web developer and data analyst studying at the 
                        University of Denver. I am passionate about high-level problem 
                        solving and data analytics. I have experience in entertainment, 
                        retail, front-end web development, and restaurant operations. 
                        I look forward to growing my talents, in addition to the one's 
                        I possess, to grow my career in business and data analytics.
                    </p>
                    <button className="about-button" type="button">Let's Connect</button>
                </div>
            </div>
        </section>
    )
}

export default About;