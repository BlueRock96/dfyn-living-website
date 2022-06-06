import React from 'react';
import './HomeBrand.scss';
export default function HomeBrand(){
    return(
        <div className="home-brand-wrapper">
            <div className="container">
                <div className="row first-row">
                    <div className="col-md-8">
                        <div className="shop-title">SHOP <span className="white">. JEWELS</span></div>
                    </div>
                    <div className="col-md-4">
                        <div className="shop-image">
                            <img src="images/shop-image.svg" alt="Img" draggable="false" />
                        </div>
                        <div className="text">
                        SHOP <span>. HOME & lIVING</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="header">
                        <img src="images/half-circle.svg" alt="Img" draggable="false" />
                        <div className="brand-text">BRANDS</div>
                    </div>
                </div> 
                <div className="row second-row">
                    <div className="col-md-6">
                        <div className="youtube-thumbnail">
                            <img src="images/youtube-thumbnail.svg" alt="Img" draggable="false" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="client-image-wrapper">
                            <img src="images/client-name.jpg" alt="Img" draggable="false" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}