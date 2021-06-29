import React from 'react'
import "./css/Aboutus.css"
function Aboutus() {
    return (
        <section id="aboutus">
        <div className="aboutus">
        <h1 className="about-title">About Us</h1>
        <hr className="about-hr"></hr>
            <div className="about-top">
                <div className="about-us"> 
                <h3 className="about-quote">
                “You can’t have great software without a great team, and most software teams behave like dysfunctional families.”
                </h3>
                <h5 style={{paddingTop:"2rem"}}>Who We Are</h5></div>
                <div>
                <p className="mail-content" style={{width:"70%", margin:"0 auto"}}>
We are team of 3 members Exploring the  {" "}
<span>Software Domain </span>and  Expanding our skills in the field of  {" "}<span>
Web Development</span>{ " "}
 {" "}<span>
please support us
</span>{" "}we need it!!!
<br></br>
<span></span></p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Aboutus
