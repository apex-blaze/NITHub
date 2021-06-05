import React from 'react'
import "./css/Footer.css"
import Logo from "./Logo"
function Footlist() {
    return (
      
            <div className="footlist">
             <a href="/" className="footcompo" style={{color:"#00ba8e"}}>Support</a>
             <a href="/" className="footcompo">Community</a>
             <a href="/" className="footcompo">Company</a>
             <Logo/>
             <h1 className="header-title">NIT<span className="header-span">Hub</span></h1>
             <a href="/" className="footcompo" style={{color:"#00ba8e"}}>Help desk</a>
             <a href="/" className="footcompo">Blog</a>
             <a href="/" className="footcompo">About Us</a>
             
        </div>
        
    );
}

export default Footlist;
