import React,{useRef,useState} from "react"
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
    const [home,setHome]=useState(true);
const [service,setService]=useState(false);
const [contact,setContact]=useState(false);
const [about,setAbout]=useState(false);
    return(    
    <div className="navlist">
      <div className="navbar-toggle" id="mobile-menu" onClick={handleToggle} ref={menu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="navbar-menu" ref={menuLinks}>
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
    </div>     
    );
}
export default Navlist;