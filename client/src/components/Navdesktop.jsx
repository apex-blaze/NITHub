import React,{useState} from 'react'
import "./css/Navbar.css"
function Navdesktop() {

  // const handleScroll = (e)=>{
  //   e.preventDefault();
  //   const sect = e.currentTarget.getAttribute("href").slice(1);
  //   const sectHeight = 50;


  //  console.log(sect);
  // }
const [home,setHome]=useState(true);
const [service,setService]=useState(false);
const [contact,setContact]=useState(false);
const [about,setAbout]=useState(false);



    return (
        <div className="navdesktop">
        
        <a href="#home"  className={home?"navbar-link navcolor-green":"navbar-link navcolor-white"} 
        onClick={()=>{setHome(true);setAbout(false);setContact(false);setService(false)}}
        >Home</a>
        <a href="#services"  className={service?"navbar-link navcolor-green":"navbar-link navcolor-white"}
        onClick={()=>{setHome(false);setAbout(false);setContact(false);setService(true)}}
        >Services</a>
        <a href="#Contact"  className={contact?"navbar-link navcolor-green":"navbar-link navcolor-white"}
        onClick={()=>{setHome(false);setAbout(false);setContact(true);setService(false)}}
        >Contact</a>

        <a href="#aboutus"  className={about?"navbar-link navcolor-green":"navbar-link navcolor-white"}
        onClick={()=>{setHome(false);setAbout(true);setContact(false);setService(false)}}
        >About Us</a>
     
        {/* <div className="dropdown navbar-link">
  <a href="/" className="dropbtn navbar-link">Login{" "}<i className="fas fa-caret-down fa-xs" /></a>
  <div className="dropdown-content">
  <a href="/faculty" style={{backgroundColor:"black",width:"10rem", fontSize:"1.2rem", border:"none"}}  className="navbar-link" data-bs-toggle="modal" data-bs-target="#faculty">
  Login as Faculty
</a>
    <a href="/student" style={{backgroundColor:"black",width:"10rem", fontSize:"1.2rem", border:"none"}} className="navbar-link" data-bs-toggle="modal" data-bs-target="#student">
  Login as Student
</a>
  </div>
</div> */}
    </div>
    )
}

export default Navdesktop;

