import React,{useState} from 'react'
import "./css/Footer.css"
import Logo from "./Logo"
function Footlist() {
    const[hoverf,sethoverf]=useState(true);
    const[hoveri,sethoveri]=useState(true);
    const[hovert,sethovert]=useState(true);
    const[hovers,sethovers]=useState(true);
    return (  
        <div>
            <div className="footlist">
             <div style={{margin:"0 auto"}}><a href="/" className="footcompo" style={{color:"#00ba8e"}}>Support</a>
             <a href="/" className="footcompo">Contact</a>
             <a href="/" className="footcompo">About us</a>
             {/* <a href="/" className="footcompo">Feedback</a> */}

             </div>
             <div className="footer-logo">
             <Logo /></div>
             <div className="foot-icons">
        <ul type="none" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",height:"90%"}}>
                <li>
              <a href="https://www.facebook.com/">  <i style={{color:"#00ba8e",transitionDuration:"0.6s"}} className={hoverf?"fab fa-facebook-f fa-lg":"fab fa-facebook-f fa-2x"} onMouseEnter={()=>sethoverf(false)} onMouseLeave={()=>sethoverf(true)}></i></a>
                </li>
                <li>
              <a href="https://www.instagram.com/">  <i style={{color:"#00ba8e",transitionDuration:"0.6s"}} className={hoveri?"fab fa-instagram fa-lg":"fab fa-instagram fa-2x"} onMouseEnter={()=>sethoveri(false)} onMouseLeave={()=>sethoveri(true)}></i></a>

                </li>
                <li>
                <a href="https://in.linkedin.com/">  <i style={{color:"#00ba8e",transitionDuration:"0.6s"}} className={hovert?"fab fa-linkedin-in fa-lg":"fab fa-linkedin-in fa-2x"} onMouseEnter={()=>sethovert(false)} onMouseLeave={()=>sethovert(true)}></i></a>

                </li>
                <li>
                <a href="https://github.com/apex-blaze/NITHub">   <i style={{color:"#00ba8e",transitionDuration:"0.6s"}} className={hovers?"fab fa-github fa-lg":"fab fa-github fa-2x"} onMouseEnter={()=>sethovers(false)} onMouseLeave={()=>sethovers(true)}></i></a>

                </li>
            </ul>
            
            </div>
          
        </div> 
       
        </div>   
    );
}

export default Footlist;
