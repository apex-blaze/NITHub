import React from 'react'
import "./css/Navbar.css"
import logo from "../images/logo.png";
function Logo() {
    return (
        <div>
        
       <img src={logo} alt="logo" className="navlogo"/>
       <h1 className="header-title">NIT<span className="header-span">Hub</span></h1>
       </div>
     
    );
}

export default Logo;
