import React from "react";
import Signin from "./Signin";
import "./css/Home.css";
import mockup from "../images/mock3.png";
import arrow from "../images/monophy.gif";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <div className="left">
          <h1>
            Is your phone filled up with all those <span>Notices?</span>{" "}
          </h1>
          <h2>
            Now get all the <span>notifications</span> in one place!!{" "}
            <i className="fas fa-bell fa-1x" style={{ color: "#00ba8e" }}></i>
          </h2>
        </div>
        <div className="right">
          <Signin />
        </div>
      </div>
      <div className="go-green">
        <div className="mockup-c">
          <img className="mockup" src={mockup} alt="notificationimage" />
          </div>
          <div className="arrow-res">

              <h3 className="create-now" >Create your Account Now !!!
              <img className="arrow" src={arrow} alt="arrow" /></h3>
              <Link to="/register">
                <button className="home-started">Create Account</button>
              </Link>
</div>
           
        </div>
        
    </section>
  );
}

export default Home;
