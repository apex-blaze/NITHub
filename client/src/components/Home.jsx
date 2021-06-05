import React from "react";
import Signin from "./Signin";
import "./css/home.css";
function Home() {
    return (
        <section id="#home">
        <div className= "home-container">
            <div className="left">
              <h1>Is your phone filled Up with all those <span>Notices?</span> </h1>
              <h2>Now get all the <span>notifications</span>  in one place!!</h2>
            </div>
            <div className="right">
              <Signin/>
            </div>
          </div>
        </section>
    )
}

export default Home;
