import React from 'react'
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import "./css/Services.css";

function ServicesCard(props) {
    let img=[bg1,bg2,bg3];
    return (
        <div className="Card">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={img[props.img]}
                alt="service-img"
                style={{
                  width: "19rem",
                  height: "20rem",
                  borderRadius: "18px",
                }}
              />
            </div>
            <div className="flip-card-back">
              <h2 style={{marginTop:"1rem"}}>{props.title}</h2>
              <hr className="Services-hr"></hr>

              <p>
                {props.para}
              </p>
              {/* <p>through emails</p> */}
            </div>
          </div>
        </div>
        </div>
    )
}

export default ServicesCard
