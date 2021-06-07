import React from 'react'
import "./css/Register.css"
import {Link} from "react-router-dom"
function Register() {
    return (
        <div className="Register">
        <h1 className="Register-label-header"> Register Here</h1>
        <hr style={{backgroundColor:"#00ba8e"}}></hr>
        <div class="container">
  <form action="action_page.php">

    <label className="Register-label" for="fname">First Name</label>
    <input  type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label className="Register-label" for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    <label for="Roll">Roll No.</label>
    <input type="text" id="Roll" name="Roll no." placeholder="Your Roll No." />

    <label className="Register-label" for="Branch">Branch</label>
    <select id="country" name="country">
    <option value="australia">Select</option>

      <option value="ECE">Electronics and Communication Engineering</option>
      <option value="CSE">Computer Science Engineering</option>
      <option value="Electrical">Electrical Engineering</option>
      <option value="Civil">Civil Engineering</option>
      <option value="Mechanical">Mechanical Engineering</option>
      <option value="Material">Material Engineering</option>
      <option value="Architecture">Architecture Engineering</option>
    </select>
    <label className="Register-label" for="Year">Year</label>
    <select id="Year" name="sem">
    <option value="australia">Select</option>

      <option value="1st">1</option>
      <option value="2nd">2</option>
      <option value="3rd">3</option>
      <option value="4th">4</option>
      <option value="5th">5</option>

 
    </select>
    
    {/* <label for="Password">Password</label>
    <input type="text" id="lname" name="Password" placeholder="Password" />
    <label for="Confirm password">Confirm password</label>
    <input type="text" id="lname" name="onfirm password" placeholder="Confirm password" /> */}
    <label className="Register-label" for="gmail">Your Gmail</label>
    <input type="email" id="gmail" name="Email" placeholder="Enter your email"readOnly/>
    <Link to="/Dashboard">
    <input type="submit" value="Submit" />
</Link>
  </form>
</div></div>
    );
}

export default Register;
