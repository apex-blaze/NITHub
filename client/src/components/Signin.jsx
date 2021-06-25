import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/Signin.css";
import Ajax from "../apis/ajax";
function Signin() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setclick] = useState(false);
  const [passwordshow, setPasswordshow] = useState(false);
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [letlogin, setLetlogin] = useState();
  const passwordvisiblity = () => {
    setPasswordshow(passwordshow ? false : true);
    setclick(click ? false : true);
  };
  function onChange(e, fun) {
    fun(e.target.value);
  }
  function upload() {
    document.getElementById("partupload").style.visibility = "visible";
  }
  async function handleSubmit(e) {
    const alert = document.getElementById("message1");
    e.preventDefault();
    try {
      let response;
      if (letlogin === false) {
        console.log("student");
        response = await Ajax.post(`/login`, {
          username: email,
          password,
        });
      } else {
        console.log("faculty");

        response = await Ajax.post(`/login/faculty`, {
          username: username,
          password: pwd,
        });
      }
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
        className="modal fade"
        id="student"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Login as Student
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="/login" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="username"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => onChange(e, setEmail)}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type={passwordshow ? "text" : "password"}
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => onChange(e, setPassword)}
                    required
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
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

                <button
                  type="submit"
                  className="submit-button"
                  onClick={() => setLetlogin(false)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="faculty"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel1">
                Login as Faculty
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                action="/login/faculty"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => onChange(e, setUsername)}
                    required
                  />
                  <small id="emailHelp1" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type={passwordshow ? "text" : "password"}
                    name="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="Password"
                    onChange={(e) => onChange(e, setPwd)}
                    required
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                    onClick={passwordvisiblity}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    show password
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  onClick={() => setLetlogin(true)}
                >
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
