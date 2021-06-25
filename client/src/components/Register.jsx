import React, { useState, useEffect } from "react";
import "./css/Register.css";
import { useHistory } from "react-router-dom";
import Ajax from "../apis/ajax";
import img2 from "../images/2.png";
import img1 from "../images/1.png";
import img3 from "../images/3.png";
import img4 from "../images/7.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

function Register() {
  let history = useHistory();
  const [click, setclick] = useState(false);
  const [passwordshow, setPasswordshow] = useState(false);
  const [clickc, setclickc] = useState(false);
  const [passwordshowc, setPasswordshowc] = useState(false);
  const passwordvisiblity = () => {
    setPasswordshow(passwordshow ? false : true);
    setclick(click ? false : true);
  };
  const passwordvisiblity1 = () => {
    setPasswordshowc(passwordshowc ? false : true);
    setclickc(clickc ? false : true);
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [rollno, setRollno] = useState("");
  const [branch, setBranch] = useState(null);
  const [year, setYear] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  function onChange(e, fun) {
    fun(e.target.value);
  }

  function validate() {
    const alert = document.getElementById("message1");
    if (password !== confirmPassword) {
      const alert = document.getElementById("message1");
      alert.style.display = "block";
      return false;
    } else {
      alert.style.display = "none";
      return true;
    }
  }

  async function handleSubmit(e) {
    if (validate()) {
      e.preventDefault();
      try {
        const response = await Ajax.post(`/register`, {
          fname,
          lname,
          rollno,
          branch,
          year,
          username: email,
          password,
          avatar,
        });
        console.log(response.status);
        history.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Form Validation Failed");
      e.preventDefault(); // this won't let form submit
      return false;
    }
  }

  useEffect(() => {
    const avatarList = document.querySelectorAll(".avatar-list");
    // console.log(avatarList);
    avatarList.forEach((ava) => {
      ava.addEventListener("click", (e) => {
        const avaString = ava.getAttribute("value");
        setAvatar(avaString);
      });
    });
    return avatarList;
  }, []);

  return (
    <div className="Register">
      <h1 className="Register-label-header"> Register Here</h1>
      <hr style={{ backgroundColor: "#00ba8e" }}></hr>
      <div className="container">
        <form action="/register" method="post" onSubmit={handleSubmit}>
          <label className="Register-label" htmlFor="fname">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={(e) => onChange(e, setFname)}
            placeholder="Your name.."
            required
          />

          <label className="Register-label" htmlFor="lname">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname}
            onChange={(e) => onChange(e, setLname)}
            placeholder="Your last name.."
            required
          />
          <label htmlFor="Roll">Roll No.</label>
          <input
            type="text"
            id="Roll"
            name="rollno"
            value={rollno}
            onChange={(e) => onChange(e, setRollno)}
            placeholder="Your Roll No."
            required
          />

          <label className="Register-label" htmlFor="Branch">
            Branch
          </label>
          <select
            id="country"
            name="branch"
            required="required"
            value={branch}
            className="register-dropdown"
            onChange={(e) => onChange(e, setBranch)}
          >
            <option value="">Select</option>

            <option value="ECE">
              Electronics and Communication Engineering
            </option>
            <option value="CSE">Computer Science Engineering</option>
            <option value="Electrical">Electrical Engineering</option>
            <option value="Civil">Civil Engineering</option>
            <option value="Mechanical">Mechanical Engineering</option>
            <option value="Material">Material Engineering</option>
            <option value="Architecture">Architecture Engineering</option>
          </select>
          <label className="Register-label" htmlFor="Year">
            Year
          </label>
          <select
            id="Year"
            required="required"
            name="year"
            value={year}
            className="register-dropdown"
            onChange={(e) => onChange(e, setYear)}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label className="Register-label" htmlFor="gmail">
            Your Gmail
          </label>
          <input
            type="email"
            id="email"
            name="username"
            value={email}
            onChange={(e) => onChange(e, setEmail)}
            placeholder="Enter your email"
            required
          />
          <label htmlFor="Password">Password</label>
          <div style={{ display: "grid", gridTemplateColumns: "94% 6%" }}>
            <input
              type={passwordshowc ? "text" : "password"}
              id="lname"
              name="password"
              onChange={(e) => onChange(e, setPassword)}
              placeholder="Password"
            />
            <i
              onClick={passwordvisiblity1}
              className={clickc ? "fas fa-eye eye" : "fas fa-eye-slash eye"}
            />
          </div>
          <label htmlFor="Confirm password">Confirm password</label>
          <div style={{ display: "grid", gridTemplateColumns: "94% 6%" }}>
            <input
              type={passwordshow ? "text" : "password"}
              id="lname"
              name="confirmPassword"
              onChange={(e) => onChange(e, setConfirmPassword)}
              placeholder="Confirm password"
            />
            <i
              onClick={passwordvisiblity}
              className={click ? "fas fa-eye eye" : "fas fa-eye-slash eye"}
            />
          </div>
          <span
            id="message1"
            className="register-span"
            style={{ color: "red" }}
          >
            {" "}
            **Password didn't match{" "}
          </span>
          <div
            className="dropdown"
            style={{
              width: "100%",
              height: "4rem",
              display: "block",
              margin: "0 auto",
            }}
          >
            <button
              className="btn avatar-btn dropdown-toggle"
              style={{ margin: "0.6rem auto" }}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose Avatar
            </button>

            <ul
              style={{ backgroundColor: "#F2F2F2", opacity: "0.99" }}
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <div className=" each-avatar">
                {" "}
                <li value="img2" className="avatar-list ">
                  <img
                    src={img2}
                    alt="Avatar"
                    style={{ margin: "10px" }}
                    className=" dropdown-itemnavbar-link avatar1"
                    data-bs-toggle="modal"
                  />
                </li>
                <li value="img1" className="avatar-list">
                  <img
                    src={img1}
                    alt="Avatar"
                    style={{ margin: "10px" }}
                    className=" dropdown-itemnavbar-link avatar1"
                    data-bs-toggle="modal"
                  />
                </li>
                <li value="img3" className="avatar-list">
                  <img
                    src={img3}
                    alt="Avatar"
                    style={{ margin: "10px" }}
                    className=" dropdown-itemnavbar-link avatar1"
                    data-bs-toggle="modal"
                  />
                </li>
                <li value="img4" className="avatar-list">
                  <img
                    src={img4}
                    alt="Avatar"
                    style={{ margin: "10px" }}
                    className=" dropdown-itemnavbar-link avatar1"
                    data-bs-toggle="modal"
                  />
                </li>
                <li value="img6" className="avatar-list">
                  <img
                    src={img6}
                    alt="Avatar"
                    style={{ margin: "10px" }}
                    className=" dropdown-itemnavbar-link avatar1"
                    data-bs-toggle="modal"
                  />
                </li>
                <li value="img5" className="avatar-list">
                  <img
                    src={img5}
                    alt="Avatar"
                    style={{ margin: "10px" }}
                    className=" dropdown-itemnavbar-link avatar1"
                    data-bs-toggle="modal"
                  />
                </li>
              </div>
            </ul>
          </div>
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
export default Register;