import React from "react";
import backgroundImage from "../../background/careerbg.svg";

import "./RoleWithUs.scss";

export default function RoleWithUs() {
  return (
    <div className="role-with-us-wrapper"  style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <div className="background">
        <img src="images/careerbg.svg" alt="Img" draggable="false" />
      </div> */}
      <div className="big-title">
      ROLES WITH US
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="each-box">
                <div className="title">CORPORATE</div>
                <div className="small-content">
                  JOB ID: 1004 Business Deveopment Manager (Fine Jewels)
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="each-box">
                <div className="title">TECHNOLOGY</div>
                <div className="small-content">
                  JOB ID: 1001 Senior Developer (Android)
                </div>
                <div className="small-content">
                  JOB ID: 1002 Senior Developer (iOS)
                </div>
                <div className="small-content">
                  JOB ID: 1003 Senior Full Stack Developer
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="each-box">
                <div className="title">CREATIVES</div>
                <div className="small-content">JOB ID: 1005 Anchor/Host</div>
                <div className="small-content">
                  JOB ID: 1007 Videographer/Cinematographer
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="each-box">
              <div className="title">MARKETING</div>
                <div className="small-content">JOB ID; 1006 Senior Marketing Analytics Manager</div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="apply-now-btn-wrapper">
                  <button className="btn apply-now">
                      Apply
                      <span>
                          <img src="images/right-arrow.svg" alt="Icon" draggable="true" />
                      </span>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
