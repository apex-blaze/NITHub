import React from 'react';
import Logo from "./Logo";
import "./Navbar.css";
import Navlist from "./Navlist";
function Header() {
    return (
        <div className="navbar">
            <Logo/>
            <h1 className="header-title">NIT<span className="header-span">Hub</span></h1>
           <Navlist/>
        </div>
        
    );
}

export default Header;
