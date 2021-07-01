import React from "react";
import "./css/Footer.css";
import Footlist from "./Footlist";
function Footer() {
  const date = new Date();
  return (
    <div className="footer">
      <Footlist />

      <hr className="footer-hr"></hr>
      <p className="footer-cc">©2021 NITHub</p>
    </div>
  );
}

export default Footer;
