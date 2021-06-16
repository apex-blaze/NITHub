import React from "react";
import Signin from "./Signin";
import "./css/Home.css";
import mockup from "../images/mock3.png";
import arrow from "../images/monophy.gif";
import { Link } from "react-router-dom";
import start from "../images/start.png"
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
        <div>
          {" "}
          <img className="mockup" src={mockup} alt="notificationimage" />
          <img className="start" src={start} alt="startimage"/>
        </div>
        <div>
          <div className="green-section">
            <div>
              <h3 className="create-now">Create your Account Now !!!</h3>
              <img className="arrow" src={arrow} alt="arrow" />
              <Link to="/register">
                <button className="home-started1">Create Account</button>
              </Link>
            </div>

            <div>
              <Link to="/register">
                <button className="home-started">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
