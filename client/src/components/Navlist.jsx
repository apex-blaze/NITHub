import React,{useRef} from "react"
import "./css/Navbar.css"
function Navlist()
{
   
    const menu = useRef(null);
    const menuLinks = useRef(null);
    const handleToggle = ()=>{
        menu.current.classList.toggle("is-active");
        menuLinks.current.classList.toggle("active");
        document.body.classList.toggle("active");
    }
    
    
    return(
        
    <div className="navlist">
      <div className="navbar-toggle" id="mobile-menu" onClick={handleToggle} ref={menu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="navbar-menu" ref={menuLinks}>
        <a href="#home"   className="navbar-link">Home</a>
        <a href="#services"  className="navbar-link">Services</a>
        <a href="#aboutus"  className="navbar-link">About Us</a>
        <div className="dropdown navbar-link">
  <a href="/" className="dropbtn navbar-link">Login<i className="fas fa-caret-down fa-xs" /></a>
  <div className="dropdown-content">
    <a href="/" style={{backgroundColor:"black", width:"10rem", fontSize:"1.2rem"}}>Login as Faculty</a>
    <a href="/" style={{backgroundColor:"black",width:"10rem", fontSize:"1.2rem"}}>Login as Student</a>
  </div>
</div>
      </div>
    </div>
        
        
    );
}
export default Navlist;