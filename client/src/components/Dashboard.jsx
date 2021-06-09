import React from 'react'
import Footer from "./Footer"
import "./css/Dashboard.css"
import img from "../images/2.png"
function Dashboard() {
    
    return (
        <div className="Dashboard">
          <div className="Dashboard-profile">
           <div className="profile" style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
          <div> <img src={img} alt="Avatar" className="avatar"/></div>
            <div><h2 className="dashboard-para">Full Name</h2>
           <p className="dashboard-para">Branch Name</p>
               <p className="dashboard-para">NITH</p>
                 <p className="dashboard-para"><button>+91 9876543210</button></p>

               </div>
               </div>
           </div>
        <hr className="profile-hr"></hr>

        <div className="Dashboard-down">
          <div className="part1">
              <div className="file">
              <form action="/Submit">
                    <label className="dashboard-para" style={{fontSize:"1.6rem"}} for="Description">Description:</label>
                      <input  className="dashboard-input" type="text" id="Description" placeholder="Description.." required />
							         <input type="file" name="file" className="dashboard-para dashboard-file" required/>
                <button className="submit-button">Upload!!</button> 
</form>
						 </div>
             
          </div>
     <div className="part2">

   <div className="wrap">
        <p>
          <a className="collapse-button" data-bs-toggle="collapse" href="#activity" role="button" aria-expanded="false" aria-controls="collapseExample">
           Feed
        </a>
          <a className="collapse-button" data-bs-toggle="collapse" href="#feed" role="button" aria-expanded="false" aria-controls="collapseExample">
        Activity
         </a>
           <a className="collapse-button" data-bs-toggle="collapse" href="#news" role="button" aria-expanded="false" aria-controls="collapseExample">
          News
         </a>
  
           </p>
     </div>
         <div className="collapse" id="activity">
           <div className="card card-body">
         <p className="dashboard-para">1st Notification:<a href="/Dashboard" alt="1st one" style={{color:"black"}}>hello! I'm First one</a></p>
             
           </div>
         </div>
         <div className="collapse" id="feed">
           <div className="card card-body">
           <p className="dashboard-para">1st Feed:<a href="/Dashboard" alt="1st one" style={{color:"black"}}>hello! I'm First one</a></p>
           </div>
         </div>
         <div className="collapse" id="news">
           <div className="card card-body">
           <p className="dashboard-para">1st News:<a href="/Dashboard" alt="1st one" style={{color:"black"}}>hello! I'm First one</a></p>
           </div>
         </div>
         </div>
         <div className="part3">

         </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Dashboard;
