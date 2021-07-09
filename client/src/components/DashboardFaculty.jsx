import React, { useEffect, useState } from "react";
import Ajax from "../apis/ajax";

import Footer from "./Footer";
import "./css/Dashboard.css";
import DashboardNotices from "./DashboardNotices";
import DashboardProfile from "./DashboardProfile";
import DashboardUpload from "./DashboardUpload";
import DashboardFilter from "./DashboardFilter";
import msg from "../images/msg.gif";
function DashboardFaculty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchFaculty() {
      const response = await Ajax.get(`/register/faculty`);
      setData(response.data);
      console.log(response.data);
    }
    fetchFaculty();
  }, []);
  return (
    <div className="Dashboard">
      {data &&
        data.map((faculty) => {
          return (
            <DashboardProfile
              fname={faculty.fname}
              lname={faculty.lname}
              branch={faculty.dept}
              avatar={faculty.avatar}
              blank="gayab"
            />
          );
        })}
      {/* <hr className="profile-hr"></hr> */}
      <div className="dah-wrap">
        <div className="Dashboard-down">
        <div>
          <DashboardUpload />
          <DashboardFilter /></div>
          <DashboardNotices />

          <div className="part3">
            {/* <img src={msg} alt="mail" width="80" height="78" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardFaculty;
