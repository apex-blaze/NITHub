import React from "react";
import Footer from "./Footer";
import "./css/Dashboard.css";
import DashboardNotices from "./DashboardNotices";
import DashboardProfile from "./DashboardProfile";
import DashboardUpload from "./DashboardUpload";
function Dashboard() {
  
  return (
    <div className="Dashboard">
     <DashboardProfile />
      <hr className="profile-hr"></hr>

      <div className="Dashboard-down">
       <DashboardUpload />
       <DashboardNotices />
        
        <div className="part3"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;