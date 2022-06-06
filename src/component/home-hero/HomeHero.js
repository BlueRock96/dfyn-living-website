import React from "react";
import "./HomeHero.scss";

export default function HomeHero() {
  return (
    <div className="home-hero-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-7 hero-left">
            <div className="big-title">D F Y N</div>
            <div className="small-title">L I V I N G</div>
            <div className="tag">FASHION | DIAMONDS , GOLD , SILVER | HOME</div>
            <div className="tag-another">INDIA , WORLD</div>
            <div className="text-bigest">
              F I L T E R E D L U X U R Y E X P E R I E N C E
            </div>
            <div className="text-bigger">
              G L O B A L S H O P P I N G M O B I L E A P P
            </div>
            <div className="text-smaller">FOR ONLY TOP BRANDS</div>
            <div className="coming-soon-text">COMING SOON</div>
            <div className="app-image">
              <div className="each-app-image-1">
                <img
                  src="images/google-play.jpg"
                  alt="Icon"
                  draggable="false"
                />
              </div>
              <div className="each-app-image-2">
                <img src="images/app-store.jpg" alt="Icon" draggable="false" />
              </div>
            </div>
            <div className="download-content">
            DOWNLOAD APP TO SHOP & WATCH VIDEOS
            </div>
            <div className="btn-wrapper">
                <button className="btn click-here">Click Here</button>
            </div>
            <div className="text-content">
                <span className="white">WITH US .</span>
                <span className="color">CLASS APART</span>
            </div>
          </div>
          <div className="col-md-5 hero-right">
              <img src="images/girl-image.svg" alt="Img" draggable="false" className="girl-cap" />
              <img src="images/girl-ear-ring.svg" alt="Img" draggable="false" className="girl-ear-ring" />
          </div>
        </div>
      </div>
    </div>
  );
}
