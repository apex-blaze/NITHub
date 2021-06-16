import React from 'react'
import "./css/Navbar.css"
function Navdesktop() {

  // const handleScroll = (e)=>{
  //   e.preventDefault();
  //   const sect = e.currentTarget.getAttribute("href").slice(1);
  //   const sectHeight = 50;


  //  console.log(sect);
  // }
    return (
        <div className="navdesktop">
        
        <a href="#home"  className="navbar-link"  style={{color:"#00ba8e"}}>Home</a>
        <a href="#services"  className="navbar-link">Services</a>
        <a href="#aboutus"  className="navbar-link">About Us</a>
     
        <div className="dropdown navbar-link">
  <a href="/" className="dropbtn navbar-link">Login{" "}<i className="fas fa-caret-down fa-xs" /></a>
  <div className="dropdown-content">
  <a href="/" style={{backgroundColor:"black",width:"10rem", fontSize:"1.2rem", border:"none"}}  className="navbar-link" data-bs-toggle="modal" data-bs-target="#faculty">
  Login as Faculty
</a>
    <a href="/" style={{backgroundColor:"black",width:"10rem", fontSize:"1.2rem", border:"none"}} className="navbar-link" data-bs-toggle="modal" data-bs-target="#student">
  Login as Student
</a>
  </div>
</div>
    </div>
    )
}

export default Navdesktop;

