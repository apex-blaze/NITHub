import React from "react";
import Signin from "./Signin";
import "./css/Home.css";
import mockup from "../images/mock3.png";
import arrow from "../images/monophy.gif";
function Home() {
    return (
        <section id="home">
        <div className= "home-container">
            <div className="left">
              <h1>Is your phone filled up with all those <span>Notices?</span> </h1>
              <h2>Now get all the <span>notifications</span>  in one place!! { " "}
              <i className="fas fa-bell fa-1x" style={{color:"#00ba8e"}}></i>
              {/* <i class="fas fa-bullhorn fa-1x" style={{color:"#00ba8e"}}></i> */}
              </h2> 
             
              {/* <i className="fas fa-clipboard-list fa-10x" style={{color:"#00ba8e"}}></i> */}
              {/* <i class="fas fa-calendar-check fa-10x" style={{color:"#00ba8e"}}></i> */}

            </div>
            <div className="right">
              <Signin/>
            </div>
            
          </div>
          <div className="go-green">
            <div > <img className="mockup" src={mockup}/></div> 
            <div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
              <div><img className="arrow" src={arrow} /></div>
             <div><button className="home-started">Get Started</button></div> 

             </div>
             </div>
            </div>
        </section>
    )
}

export default Home;
