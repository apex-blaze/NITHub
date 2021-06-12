import React,{useState} from "react"
import "./css/Footer.css"
import Footlist from "./Footlist"
import Footermobo from "./Footermobo"
function Footer() {
    const[hoverf,sethoverf]=useState(true);
    const[hoveri,sethoveri]=useState(true);
    const[hovert,sethovert]=useState(true);
    const[hovers,sethovers]=useState(true);
    return (
        <div className="footer">
        <div className="footer-up">
        <Footlist/>
        <Footermobo/>
        </div>
        <div >
        
        <hr className="footer-hr"></hr>
        <div className="footer-down">
        <div  className="footer-icons">
        <ul type="none" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                <li>
              <a href="www.facebook.com">  <i style={{color:"#00ba8e"}} className={hoverf?"fab fa-facebook-f fa-1x":"fab fa-facebook-f fa-lg"} onMouseEnter={()=>sethoverf(false)} onMouseLeave={()=>sethoverf(true)}></i></a>
                </li>
                <li>
              <a href="www.instagram.com">  <i style={{color:"#00ba8e"}} className={hoveri?"fab fa-instagram fa-1x":"fab fa-instagram fa-lg"} onMouseEnter={()=>sethoveri(false)} onMouseLeave={()=>sethoveri(true)}></i></a>

                </li>
                <li>
              <a href="www.twitter.com">  <i style={{color:"#00ba8e"}} className={hovert?"fab fa-twitter fa-1x":"fab fa-twitter fa-lg"} onMouseEnter={()=>sethovert(false)} onMouseLeave={()=>sethovert(true)}></i></a>

                </li>
                <li>
             <a href="www.snapchat.com">   <i style={{color:"#00ba8e"}} className={hovers?"fab fa-snapchat-ghost fa-1x":"fab fa-snapchat-ghost fa-lg"} onMouseEnter={()=>sethovers(false)} onMouseLeave={()=>sethovers(true)}></i></a>
                </li>
            </ul>
            </div>
            <div style={{display:"block", margin:"0rem auto"}}>
<p className="footer-cc">©2021 NITHub
</p>
            </div>
            <div className="footer-contact"> 
{/* <p className="footer-cc"> Contact Us</p> */}
            </div>
            </div>
</div>
        </div>
            
    )
}

export default Footer;
