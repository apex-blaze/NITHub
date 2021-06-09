import React from "react";
import "./css/Services.css";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
function Services() {
  return (
    <section id="services">
      <h1 className="Services-h1">Services</h1>
      <hr className="Services-hr"></hr>
      <div className="Services">
        {/* <div className="Card"> */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {/* <i className="fas fa-clipboard-list fa-10x" style={{color:"#00ba8e"}}></i> */}
              <img
                src={bg1}
                alt="/"
                style={{
                  width: "19rem",
                  height: "20rem",
                  borderRadius: "18px",
                }}
              />
            </div>
            <div className="flip-card-back">
              <h2>Instant Notification</h2>
              <hr className="Services-hr" style={{ color: "white" }}></hr>

              <p>
                Super Fast Notification Provided at the cost of Subsciption.
              </p>
              <p>through emails</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {/* <i class="fas fa-arrow-alt-circle-down fa-10x" style={{color:"#00ba8e"}}></i> */}
              <img
                src={bg3}
                alt="/"
                style={{
                  width: "19rem",
                  height: "20rem",
                  borderRadius: "18px",
                }}
              />
            </div>
            <div className="flip-card-back">
              <h2>Time Saving</h2>
              <hr className="Services-hr" style={{ color: "white" }}></hr>

              <p>
                You will get notified about new recruiting companies and new
                notices directly from the Dean Academics and TPO's office.
              </p>
              <p>through emails</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {/* <i className="fas fa-clipboard-list fa-10x" style={{color:"#00ba8e"}}></i> */}
              <img
                src={bg2}
                alt="/"
                style={{
                  width: "19rem",
                  height: "20rem",
                  borderRadius: "18px",
                }}
              />
            </div>
            <div className="flip-card-back">
              <h2>Instant Notification</h2>
              <hr className="Services-hr" style={{ color: "white" }}></hr>

              <p>
                Super Fast Notification Provided at the cost of Subsciption.
              </p>
              <p>through emails</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Services;
