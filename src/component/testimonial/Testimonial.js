import React from 'react';
import './Testimonial.scss';
import backgroundImage from "../../background/testimonial-bg.svg";

export default function Testimonial(){
    return(
        <div className="testimonial-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="heading">
                TESTIMONIALS
                </div>
                <div className="small-black-text">
                One of the best apps till date. They bring class, user-friendliness, and importantly, they have created a category in real where brand value is mantained and kept upheld
                </div>
                <div className="text-white">
                FOUNDER / SARITA HANDA / INDIA
                </div>
                <div className="black-bold">
                Just one word - fantastic platform
                </div>
                <div className="text-white-below">
                FOUNDER / PURAB PASCHIM / INDIA
                </div>
            </div>
        </div>
    )
}