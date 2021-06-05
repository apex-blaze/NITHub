import React from 'react'
import "./css/Signin.css"
function Signin() {
    return (
        <div className="signin">
       <span className="signin-logo"> <i className="fas fa-user fa-7x"></i></span>
          <h1 className="signin-header">Sign In</h1>
          <button className="signin-button"> Continue with  <i class="fab fa-google"></i></button>
        </div>
    )
}

export default Signin
