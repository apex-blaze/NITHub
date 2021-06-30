import React,{useState} from 'react'

import "../components/css/Dashboard.css"
import img2 from "../images/2.png";
import img1 from "../images/1.png";
import img3 from "../images/3.png";
import img4 from "../images/7.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

function DashboardProfile(props) {
  let num;
  let yr=props.year;
  if(yr===1)
  {
yr="1st year";
  }
  else if(yr===2)
  {
    yr="2nd year";
  }
  else if(yr===3)
  {
    yr="Pre-final year";
  }
  else if(yr===4)
  {
    yr="Final year";
  }
  else if(yr===5)
  {
    yr="Super-final year";
  }
  if(props.avatar==="img1")
  {
    num=img1;
  }
  else if(props.avatar==="img2")
  {
    num=img2;
  }
  else if(props.avatar==="img3")
  {
    num=img3;
  }
  else if(props.avatar==="img4")
  {
    num=img4;
  }
  else if(props.avatar==="img5")
  {
    num=img5;
  }
  else if(props.avatar==="img6")
  {
    num=img6;
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
            <h2 className="dashboard-para">{props.fname}{" "}{props.lname}</h2>
            <p className="dashboard-para">{props.branch}</p>
            <p className="dashboard-para">{yr}</p>
            <p className="dashboard-para">{props.Roll}</p>

            <p className="dashboard-para">NITH</p>
            
          </div>
        </div>
      </div>
    )
}

export default DashboardProfile
