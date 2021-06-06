import React from 'react'
import "./css/Services.css"
import bg1 from "../images/Services.jpeg"
function Services() {
    return (
        <section id="services">
        <h1>Services</h1>
        
            <div className="Services">
            {/* <div className="Card"> */}
            <div class="flip-card">
                <div class="flip-card-inner">
                <div class="flip-card-front">
                {/* <i className="fas fa-clipboard-list fa-10x" style={{color:"#00ba8e"}}></i> */}
                <img src={bg1} alt="/" style={{width:"300px",height:"320px"}} />
                </div>
                <div class="flip-card-back">
                <h2>Instant Notification</h2>
                <p>Super Fast Notification Provided at the cost of Subsciption.</p>
                <p>through emails</p>
                </div>
                </div>
                </div>     
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                {/* <i className="fas fa-clipboard-list fa-10x" style={{color:"#00ba8e"}}></i>
                 */}
                 <i class="fas fa-arrow-alt-circle-down fa-10x" style={{color:"#00ba8e"}}></i>
                </div>
                <div class="flip-card-back">
                <h2>Instant Notification</h2>
                <p>Super Fast Notification Provided at the cost of Subsciption.</p>
                <p>through emails</p>
                </div>
                </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <i className="fas fa-clipboard-list fa-10x" style={{color:"#00ba8e"}}></i>
                </div>
                <div class="flip-card-back">
                <h2>Instant Notification</h2>
                <p>Super Fast Notification Provided at the cost of Subsciption.</p>
                <p>through emails</p>
                </div>
                </div>
        </div>   
               
        </div>
        {/* </div> */}
        </section>
    )
}

export default Services;
