import React from "react";
import "./AboutFooter.scss";
export default function AboutFooter() {
  return (
    <div className="about-footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-left">
            <p>Registered Office Address:</p>
            <p className="m-16">DFYN Living Pvt. Ltd.</p>
            <p>Atrium, Sector 37D, R P City</p>
            <p>Gurgaon, Haryana</p>
            <p>India</p>
            <p className="m-16">122006</p>
            <div className="reserved-tag">
            @2021 www.dfynliving.com All rights reserved
            </div>
          </div>
          <div className="col-md-6 footer-right">
              <div className="content-wrapper">
                  <p>CIN : U51909HR2021PTC096753</p>
                  <p>Contact: +91 9953268112</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
