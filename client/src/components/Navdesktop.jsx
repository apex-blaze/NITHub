import React from 'react'
import "./css/Navbar.css"
function Navdesktop() {
    return (
        <div className="navdesktop">
        <a href="/" target="blank" class="navbar-link" style={{color:"#00ba8e"}}>Home</a>
        <a href="/" className="navbar-link">Services</a>
        <a href="/" className="navbar-link">About Us</a>
        <a href="/" className="navbar-link">Login{" "}<i class="fas fa-caret-down fa-sm"></i></a>
    </div>
    )
}

export default Navdesktop
