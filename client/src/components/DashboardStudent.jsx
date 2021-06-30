import React,{useEffect,useState} from 'react'
import Footer from "./Footer";
import Ajax from "../apis/ajax";

import "./css/Dashboard.css";
import DashboardNotices from "./DashboardNotices";
import DashboardProfile from "./DashboardProfile";
import msg from "../images/msg.gif"
function DashboardStudent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const  response = await Ajax.get(`/register`);
      setData(response.data);
      // console.log(response.data[0]);

    }
    fetchUsers();
  }, []);
    return (
        <div className="Dashboard">
     { data && data.map(users=>{
            return(
            <DashboardProfile fname={users.fname} lname={users.lname} branch={users.branch}  Roll={users.rollno} year={users.year} avatar={users.avatar} />
            )
          })}
      {/* <hr className="profile-hr"></hr> */}
      <div className="Dashboard-down">
       {/* <DashboardUpload /> */}
       <div className="dash-left"></div>
       <DashboardNotices />
        
        <div className="part3">
          <img src={msg} alt="mail" width="80" height="78" />
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default DashboardStudent
