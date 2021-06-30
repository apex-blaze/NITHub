import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../components/css/Dashboard.css";
import img2 from "../images/2.png";
import img1 from "../images/1.png";
import img3 from "../images/3.png";
import img4 from "../images/7.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import Ajax from "../apis/ajax";

function DashboardProfile(props) {
  let history = useHistory();
  let num;
  let yr = props.year;
  let year = [
    " ",
    "1st year",
    "2nd year",
    "Pre-final year",
    "Final year",
    "Super-final year",
  ];
  if (props.avatar === "img1") {
    num = img1;
  } else if (props.avatar === "img2") {
    num = img2;
  } else if (props.avatar === "img3") {
    num = img3;
  } else if (props.avatar === "img4") {
    num = img4;
  } else if (props.avatar === "img5") {
    num = img5;
  } else if (props.avatar === "img6") {
    num = img6;
  }

  async function handleLogout() {
    const response = await Ajax.get(`/logout`);
    if (response.status === 200) {
      history.push("/");
    }
  }

  return (
    <div className="Dashboard-profile">
      <div
        className="profile"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <div>
          {" "}
          <img src={num} alt="Avatar" className="avatar" />
        </div>
        <div>
          <h2 className="dashboard-para">
            {props.fname} {props.lname}
          </h2>
          <p className="dashboard-para">{props.branch}</p>
          <p className="dashboard-para">{year[yr]}</p>
          <p className="dashboard-para">{props.Roll}</p>

          <p className="dashboard-para">NITH</p>
        </div>
      </div>
      <div className="button-end">
        <button className="logout-button" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
}

export default DashboardProfile;
