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
  const [student, setStudent] = useState(true);
  const [faculty, setFaculty] = useState(false);

  const passwordvisiblity = () => {
    setPasswordshow(passwordshow ? false : true);
    setclick(click ? false : true);
  };
  function onChange(e, fun) {
    fun(e.target.value);
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
        if (letlogin === false) {
          alert.style.display = "none";
          history.push("/dashboard/student");
        } else {
          alert.style.display = "none";
          history.push("/dashboard/faculty");
        }
        // history.go(0);
      }
    } catch (err) {
      console.log(err);
      if (err) {
        alert.style.visibility = "visible";
      }
    }
  }
  return (
    <div className="signin">
      <div style={{ width: "95%", margin: "0 auto" }}>
        {/* <i className="fas fa-sign-in-alt signin-logo fa-2x"></i> */}
        {/* <h4 className="signin-">Sign in as:</h4> */}
        <div className="wrap">
          <p style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <a
              className="signin-st"
              data-bs-toggle="model"
              href="#student"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => {
                setFaculty(false);
                setStudent(true);
              }}
            >
              Student
            </a>
            <a
              className="signin-fa"
              data-bs-toggle="model"
              href="#faculty"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => {
                setFaculty(true);
                setStudent(false);
              }}
            >
              Faculty
            </a>
          </p>
        </div>

        <div className={student ? "collapse-op" : "collapse-clos"}>
          <form action="/login" method="post" onSubmit={handleSubmit}>
            <label className="Register-label" htmlFor="Studentmail">
              Student Mail Id:
            </label>
            <input
              type="email"
              id="Studentmail"
              name="Studentmail"
              placeholder="Enter mail.."
              required="required"
              onChange={(e) => onChange(e, setEmail)}
            />
            <label htmlFor="Password">Password</label>
            <input
              type={passwordshow ? "text" : "password"}
              name="password"
              id="Password"
              placeholder="Password"
              onChange={(e) => onChange(e, setPassword)}
              required
            />
            <div className="form-check">
              <input
                type="checkbox"
                className="signin-checkbox"
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
              style={{ marginTop: "4px" }}
            >
              Submit
            </button>
          </form>
        </div>

        <div className={faculty ? "collapse-op" : "collapse-clos"} id="faculty">
          <form action="/login/faculty" method="post" onSubmit={handleSubmit}>
            <label className="Register-label" htmlFor="FacultyUsername">
              Username:
            </label>
            <input
              type="text"
              id="FacultyUsername"
              name="FacultyUsername"
              placeholder="Enter Username.."
              required="required"
              onChange={(e) => onChange(e, setUsername)}
            />
            <label htmlFor="FPassword">Password</label>
            <input
              type={passwordshow ? "text" : "password"}
              name="Fpassword"
              id="FPassword"
              placeholder="Password"
              onChange={(e) => onChange(e, setPwd)}
              required
            />
            <div className="form-check">
              <input
                type="checkbox"
                className="signin-checkbox"
                id="exampleCheck2"
                onClick={passwordvisiblity}
              />
              <label className="form-check-label" htmlFor="exampleCheck2">
                show password
              </label>
            </div>
            <span
              id="message2"
              className="signin-span"
              style={{ color: "red" }}
            >
              {" "}
              **Password is incorrect{" "}
            </span>

            <button
              type="submit"
              className="submit-button"
              style={{ marginTop: "4px" }}
              onClick={() => setLetlogin(true)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
/* <div
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
      </div> */
