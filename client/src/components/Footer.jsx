import React from "react"
import "./css/Footer.css"
import Footlist from "./Footlist"
function Footer() {
   
    return (
        <div className="footer">
        <div className="footer-up">
        <Footlist/>
        </div>
        
        <div >
        
        <hr className="footer-hr"></hr>
        <div style={{display:"block", margin:"0rem auto"}}>
<p className="footer-cc1">©2021 NITHub
</p>
            </div>
       
</div>
        </div>
            
    )
}

export default Footer;
