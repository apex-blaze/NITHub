import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/Signin.css";
import Ajax from "../apis/ajax";
function Signin() {
  let history = useHistory();
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
  async function handleSubmit(e) {
    const alert = document.getElementById("message1");
    e.preventDefault();
    try {
      const response = await Ajax.post(`/login`, {
        username: email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        alert.style.display = "none";
        history.push("/dashboard");
        history.go(0);
      }
    } catch (err) {
      console.log(err);
      if (err) {
        alert.style.display = "block";
      }
    }
  }
  return (
    <div className="signin">
      <div
        class="modal fade"
        id="student"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">
                Login as Student
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="/login" method="post" onSubmit={handleSubmit}>
                <div class="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="username"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => onChange(e, setEmail)}
                    required
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                     type={passwordshow? "text":"password"}
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => onChange(e, setPassword)}
                    required
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    onClick={passwordvisiblity}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    show password
                  </label>
                </div>
                <span
                  id="message1"
                  className="signin-span"
                  style={{ color: "red" }}
                >
                  {" "}
                  **Password is incorrect{" "}
                </span>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="faculty"
        tabindex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel1">
                Login as Faculty
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="/dashboard">
                <div class="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="username"
                    class="form-control"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => onChange(e, setEmail)}
                    required
                  />
                  <small id="emailHelp1" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type={passwordshow? "text":"password"}
                    name="password"
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Password"
                    onChange={(e) => onChange(e, setPassword)}
                    required
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    onClick={passwordvisiblity}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    show password
                  </label>
                </div>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <i className="fas fa-user fa-7x signin-logo"></i> */}
      <i className="fas fa-sign-in-alt signin-logo fa-4x"></i>
      <h1 className="signin-header">Sign in</h1>
      <h2 className="signin-header">With</h2>
      <a href="/auth/google" className="signin-google">
        <button className="signin-button">
          Continue with <i className="fab fa-google"></i>
        </button>
      </a>
    </div>
  );
}

export default Signin;
