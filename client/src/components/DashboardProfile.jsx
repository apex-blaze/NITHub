import React,{useState} from 'react'

import "../components/css/Dashboard.css"

import img from "../images/2.png";

function DashboardProfile() {
    return (
        <div className="Dashboard-profile">
        <div
          className="profile"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            {" "}
            <img src={img} alt="Avatar" className="avatar" />
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
