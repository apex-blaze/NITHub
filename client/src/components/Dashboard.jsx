import React from 'react'
import Footer from "./Footer"
import "./css/Dashboard.css"

function Dashboard() {
    
    return (
        <div className="Dashboard">
          <div className="Dashboard-profile">
           <div className="profile">
           <img src=" " alt="Avatar" />
         <h2 className="dashboard-para">Full Name</h2>
           <p className="dashboard-para">Branch Name</p>
               <p className="dashboard-para">NITH</p>
                 <p className="dashboard-para"><button>Contact</button></p>
               </div>
           </div>
        <div className="Dashboard-down">
          <div className="part1">
              <div className="file">
                    <label className="dashboard-para" style={{fontSize:"2rem"}} for="Description">Description:</label>
                      <input  className="dashboard-para" type="text" id="Description" placeholder="Description.." required />
							         <input type="file" name="file" className="dashboard-para" />
                <button className="submit-button">Upload!!</button> 
						 </div>
          </div>
     <div className="part2">

   <div className="wrap">
        <p>
          <a className="collapse-button" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
           Feed
        </a>
          <a className="collapse-button" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
        Activity
         </a>
           <a className="collapse-button" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
          News
         </a>
  
           </p>
     </div>
         <div className="collapse" id="collapseExample1">
           <div className="card card-body">
         <p className="dashboard-para">1st Notification:<a href="/Dashboard" alt="1st one" style={{color:"black"}}>hello! I'm First one</a></p>
             
           </div>
         </div>
         <div className="collapse" id="collapseExample2">
           <div className="card card-body">
           <p className="dashboard-para">1st Feed:<a href="/Dashboard" alt="1st one" style={{color:"black"}}>hello! I'm First one</a></p>
           </div>
         </div>
         <div className="collapse" id="collapseExample3">
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

export default Dashboard
