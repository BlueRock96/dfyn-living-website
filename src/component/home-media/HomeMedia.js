import React from 'react';
import './HomeMedia.scss'

export default function HomeMedia(){
    return(
        <div className="home-media-wrapper">
            <div className="container">
                <div className="header">
                MEDIA
                </div>
                <div className="small-text">Join our special list for offers and exclusive products</div>
                <div className="message-wrapper">
                    <input type="text" name="msg-input" id="msg-input" className="input-message" />
                    <span><button className="btn btn-submit">Submit</button></span>
                </div>
            </div>
        </div>
    )
}