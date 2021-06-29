import React from "react"
import "./css/Contactus.css"
import msg from "../images/msg.gif"

function Contactus() {
    return (
        <section id="Contact">
        <div className="contact">
            <h1 className="contact-title">{" "}<span style={{color:"#00916f"}}>Contact</span>{" "}Us</h1>
            <hr className="contact-hr"></hr>
        <div className="contact-all">
                <div className="contact-1">
<img src={msg} alt="mail" className="contact-mail"  style={{borderRadius:"10px",display:"block",margin:"2rem auto"}}></img><h3 className="contact-down-title"> SEND MAIL</h3>
<p className="mail-content">Drop Us a mail at:<br></br>
<span>
nithub@gmail.com</span>
</p>
                </div>
        
                <div className="contact-2" >
<div>
<p className="call-content">
For more details and {" "}
 <span>

speak to our team
</span> or <span> get in touch </span> with us!
</p>
</div>
<div className="contact-1">
<i className="fab fa-github-square fa-5x" style={{color:"#00916f",display:"flex",alignContent:"center",justifyContent:"center",margin:"1rem 0"}}></i>
<h3 className="contact-down-title"> CHECKOUT GITHUB</h3>
<p className="mail-content">
Connect us at {" "}
<span>github </span>and  tell us about the {" "}<span>
modification</span>{ " "}
 or {" "}<span>
 You can raise issues on our github repo
</span>{" "}and help us get better !!!
<br></br>
<span><i style={{color:"#00ba8e"}} className="fab fa-github fa-lg"></i><span>:</span>
<a  className="contact-git" href="https://github.com/apex-blaze/NITHub" alt="NitHubGit">
 {" "}Github Link</a>
</span>
</p>
</div>
                </div>
                
        </div>
        </div>
        </section>
    )
}

export default Contactus
