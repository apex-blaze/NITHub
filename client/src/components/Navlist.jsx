import React,{useRef} from "react"
import "./css/Navbar.css"
import Logo from "./Logo";
function Navlist()
{
    // const [click, setclick] = useState(false);
    // const handleclick=()=>setclick(!click);
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
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div className="navbar-menu" ref={menuLinks}>
        <a href="/" target="blank" class="navbar-link">Home</a>
        <a href="/" class="navbar-link">Services</a>
        <a href="/" class="navbar-link">About Us</a>
        <a href="/" class="navbar-link">Login{" "}<i class="fas fa-caret-down fa-sm"></i></a>
      </div>
    </div>
        
        
    );
}
export default Navlist;