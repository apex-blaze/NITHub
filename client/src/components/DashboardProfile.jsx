import React,{useState} from 'react'

import "../components/css/Dashboard.css"
import img2 from "../images/2.png";
import img1 from "../images/1.png";
import img3 from "../images/3.png";
import img4 from "../images/7.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

function DashboardProfile() {
  let number=Math.floor(Math.random() * (6))+1;
  let img=[img2,img1,img3,img4,img5,img6];
    return (
        <div className="Dashboard-profile">
        <div
          className="profile"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            {" "}
            <img src={img[number]} alt="Avatar" className="avatar" />
          </div>
          <div>
            <h2 className="dashboard-para">Full Name</h2>
            <p className="dashboard-para">Branch Name</p>
            <p className="dashboard-para">NITH</p>
            <p className="dashboard-para">
              <button>+91 9876543210</button>
            </p>
          </div>
        </div>
      </div>
    )
}

export default DashboardProfile
