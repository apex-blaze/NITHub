import React from 'react';
import Logo from "./Logo";
import "./css/Navbar.css";
import Navlist from "./Navlist";
import Navdesktop  from "./Navdesktop"
function Header() {
    
    
    return (
        <div className="navbar1">

            <Logo/>
            <Navdesktop />
            <Navlist/>
        </div>
        
    );
}

export default Header;
