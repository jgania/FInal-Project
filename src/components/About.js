import React from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./NavbarComp";

function About() {
    return (
        <div className="About">
            <NavbarComp/>
            <h1>About Page</h1>

            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 style="text-align:center">Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="https://lh3.googleusercontent.com/rk6KGSncxb6Hg7f50AKRDf9ZB_2h-Gy2noAk7HGB38qTEZWUWh_WmoPdgJ3sKsNeq2hrCtR_ReRLpD4P0auqmlOGZq3zEMJs4_L1vNXFxKRhk0APPmBvdGn6wDvIjMXwk9t1wZKFU_u9e8bRAz2J7HcLVqYPhYHE5Gs4JUF2-DKWEEkcU9l-QA3lhBlK3n5zyHq9Vb5OyKcRxz2faXIxU5wG8rPQmJaokYP0zvhqPfpwWNth-W6wFg5RMkz6Ic7DDdfKAxo9VdoMzI3GPmReIfQCZ0Rk6bbqGjEhCa_0YrT4lnvXpW9BzkROKJRr4GjQZP8JUOp2ZPt7Wdj4fQgbtXnfzlfl3eypfgeCn4SjNOsxtfCRGUAPbzX9AmguJ6jcV4908MqyaOJCPGkTj8kS-mCc-spuWxWZ0iIriWuRJWgrY9pXlLLPsiv4Hj-8RAw2NaZDLqozBiaa7_oIidQoFZndr-jvlBX1cJ65NoWauf86DtWU8uYaFX4uo0k6Ou-PQ4zBvMWd2wyk8YvlbcRfOSz0VtbetbnIB8Z55gUwUbes7jyzm0JzR_Gchruh-SjYb44WuDEv1ryviNK5JqgOX1u_QLpE8nZvfPy8t4_I2dE0vDNROCBkIoD84SMjUXRBZpyBw8UsWy10oVTPhW6DHi5AEl37xxHdIFALSn-b-AVJOJGoyElMUs71hEd_DV9Besc6mb1QMatt5xx9rvrW6J9eLar52860kjxUtQN-3K7GxkkS0R7vT1TtwovEeA=w643-h919-no?authuser=0" alt="Jordan Gania" style="width:100%"></img>
                        <div class="container">
                            <h2>Jordan Gania</h2>
                            <p class="title">Creater</p>
                            <p>Aspiring front-end programmer and Data Analyst</p>
                            <p>jordan.gania@gmail.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default About;