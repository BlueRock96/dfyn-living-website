import React from "react";
// import Bg from 'images/bg_1.svg';
import backgroundImage from "../../background/bg_1.svg";
import backgroundImage2 from "../../background/bg_2.png";
import "./ApplicationReceived.scss";
export default function ApplicationReceived() {
  return (
    <>
      <div
        className="application-received-wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="app-heading">APPLICATIONS RECEIVED</div>
          <div className="date-between">Mar 2021 - June 2021</div>
          <div className="count-wrapper">
            <div className="each-count-box">
              <img src="images/3.svg" alt="Icon" draggable="false" />
            </div>
            <div className="each-count-box">
              <img src="images/2.svg" alt="Icon" draggable="false" />
            </div>
            <div className="each-count-box">
              <img src="images/0.svg" alt="Icon" draggable="false" />
            </div>
            <div className="each-count-box">
              <img src="images/0.svg" alt="Icon" draggable="false" />
            </div>
          </div>
          <div className="brand-tag">
            ONLY TOP BRANDS | GROW WITH US | WIDER GLOBAL REACH | ANALYTICS
          </div>
          <div className="brand-big-title">BRANDS</div>
          <div className="small-title">DFYN ALPLA PROGRAM</div>
          <div className="content-wrapper">
            <div className="content">
              <p>
                Every brand partnered with us is known for its legacy, quality,
                design, authencity, commitment to the enviroment and they are
                selected to be able to showcase and launch their products on our
                mobile applications on android and iOS after a thorough
                evaluation process. DFYN is not just a collection of products
                for sales over any online marketplace platforms. DFYN is a
                platform where quality and design meets trust.
              </p>
              <p>
                We support brands who are online first, only offline or have
                OMNI channel sales currently, and have the desire to grow in
                their native country or in the world, with a seal of
                authenticity. With zero cost and hidden charges, we take the
                brands to new heights. For benefits and features of DFYN ALPHA
                program kindly mail to
              </p>
              <p className="p-30">
                To check your eligibility to be able to sell your products on
                our platform, kindly mail us your brand details at
              </p>
              <p className="p-18">technology@dfynliving.com</p>
            </div>
          </div>
          {/* <div className="network-image">
          <img src="images/network.svg" alt="Icon" draggable="false" />
        </div> */}
        </div>
      </div>

      <div
        className="network-image"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <img src="images/network.svg" alt="Icon" draggable="false" />
      </div>
    </>
  );
}
