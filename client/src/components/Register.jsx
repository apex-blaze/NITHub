import React,{useState} from 'react'
import "./css/Register.css"
import {Redirect} from "react-router-dom"
function Register() {
    // let history = useHistory();
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [rollno,setRollno] = useState("");
    const [branch,setBranch] = useState(null);
    const [year,setYear] = useState(null);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    function onChange(e,fun){
      fun(e.target.value);
    }

   function validate(){
      if(password !== confirmPassword){
        const alert = document.getElementById("message1");
        alert.style.display = "block";
        return false;
      }else{
        // alert?.style?.display = "none";
        return true;
      }
   } 

    function handleSubmit(e){
      e.preventDefault();
      if(validate()){
        <Redirect  to="/dashboard" />
      }else{
        return false;
      }
    }

    return (
        <div className="Register">
        <h1 className="Register-label-header"> Register Here</h1>
        <hr style={{backgroundColor:"#00ba8e"}}></hr>
        <div class="container">
  <form action="/register" method="post"  onSubmit={handleSubmit}>
    <label className="Register-label" for="fname">First Name</label>
    <input  type="text" id="fname" name="fname" value={fname} onChange={(e)=>onChange(e,setFname)} placeholder="Your name.." required />

    <label className="Register-label" for="lname">Last Name</label>
    <input type="text" id="lname" name="lname"   value={lname} onChange={(e)=>onChange(e,setLname)} placeholder="Your last name.." required/>
    <label for="Roll">Roll No.</label>
    <input type="text" id="Roll" name="rollno"  value={rollno} onChange={(e)=>onChange(e,setRollno)} placeholder="Your Roll No." required/>

    <label className="Register-label"  for="Branch">Branch</label>
    <select id="country" name="branch" required="required" value={branch} onChange={(e)=>onChange(e,setBranch)} >
    <option value="" >Select</option>

      <option value="ECE">Electronics and Communication Engineering</option>
      <option value="CSE">Computer Science Engineering</option>
      <option value="Electrical">Electrical Engineering</option>
      <option value="Civil">Civil Engineering</option>
      <option value="Mechanical">Mechanical Engineering</option>
      <option value="Material">Material Engineering</option>
      <option value="Architecture">Architecture Engineering</option>
    </select>
    <label className="Register-label" for="Year">Year</label>
    <select id="Year" required="required" name="year" value={year} onChange={(e)=>onChange(e,setYear)} >
    <option value="">Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label className="Register-label" for="gmail">Your Gmail</label>
    <input type="email" id="gmail" name="username"  value={email} onChange={(e)=>onChange(e,setEmail)} placeholder="Enter your email" required/>
    <label for="Password">Password</label>
    <input type="password" id="password" name="password" onChange={(e)=>onChange(e,setPassword)} placeholder="Password" />
    <label for="Confirm password">Confirm password</label>
    <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e)=>onChange(e,setConfirmPassword)} placeholder="Confirm password" />
    <span id = "message1" className="register-span" style={{color:"red"}} > **Password didn't match </span> 
    
    <input id="submit" type="submit" value="Submit" />

  </form>
</div>
</div>
    );
}
export default Register;
