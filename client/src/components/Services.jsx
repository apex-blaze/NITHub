import React from "react";
import "./css/Services.css";
import ServicesCard from "./ServicesCard";

function Services() {
  let title=["Instant Notification","Time Saving","Instant Notification"];
  let para=["Super Fast Notification Provided at the cost of Subsciption.","You will get notified about new recruiting companies and new notices directly from the Dean Academics and TPO's office.","Super Fast Notification Provided at the cost of Subsciption."]
  let images=[0,2,1];
  return (
    <section id="services">
      <h1 className="Services-h1">Services</h1>
      <hr className="Services-hr"></hr>
      <div className="Services">
        <ServicesCard title={title[0]} para={para[0]} img={images[0]} />
        <ServicesCard title={title[1]} para={para[1]} img={images[1]} />
        <ServicesCard title={title[2]} para={para[2]} img={images[2]} />

        
      </div>
    </section>
  );
}

export default Services;
