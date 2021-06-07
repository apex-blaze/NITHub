import React from 'react'
import "./css/Signin.css"
function Signin() {
    return (
        <div className="signin">
       {/* <i className="fas fa-user fa-7x signin-logo"></i> */}
       <i class="fas fa-sign-in-alt signin-logo fa-4x"></i>
          <h1 className="signin-header">Sign in</h1>
          <h2 className="signin-header">With</h2>

          <button className="signin-button"><a href="/auth/google" >Continue with  <i class="fab fa-google"></i></a></button>
        </div>
    )
}

export default Signin;