import React,{useState} from 'react'
import "./css/Signin.css"
function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [click, setclick] = useState(false);
  const[passwordshow, setPasswordshow]=useState(false);
  const passwordvisiblity = () =>{ 
    setPasswordshow(passwordshow? false : true);
    setclick(click? false: true);
  }
    function onChange(e, fun) {
        fun(e.target.value);
      }
    return (
        <div className="signin">
        <div class="modal fade" id="student" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Login as Student</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="/dashboard">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => onChange(e, setEmail)} required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type={passwordshow? "text":"password"}
 name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => onChange(e, setPassword)} required/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={passwordvisiblity}/>
    <label className="form-check-label" for="exampleCheck1">Show Password</label>
    {/* <i onClick={passwordvisiblity} style={{marginTop:"2rem"}} className={click?"fas fa-eye": "fas fa-eye-slash"} /> */}
  </div>

  <button type="submit" className="submit-button">Submit</button>

</form>

      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="faculty" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Login as Faculty</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="/dashboard">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => onChange(e, setEmail)} required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type={passwordshow? "text":"password"} name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => onChange(e, setPassword)} required/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={passwordvisiblity}/>
    <label className="form-check-label" for="exampleCheck1">Show Password</label>
    {/* <i onClick={passwordvisiblity} style={{marginTop:"2rem"}} className={click?"fas fa-eye": "fas fa-eye-slash"} /> */}
  </div>

  <button type="submit" className="submit-button">Submit</button>
 
</form>

      </div>
     
    </div>
  </div>
</div>
       {/* <i className="fas fa-user fa-7x signin-logo"></i> */}
       <i className="fas fa-sign-in-alt signin-logo fa-4x"></i>
          <h1 className="signin-header">Sign in</h1>
          <h2 className="signin-header">With</h2>
          <a href="/auth/google" className="signin-google"><button className="signin-button">Continue with  <i className="fab fa-google"></i></button></a>
        </div>
    )
}

export default Signin;