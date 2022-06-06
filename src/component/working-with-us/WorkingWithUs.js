import React from 'react';
import './WorkingWithUs.scss';

export default function WorkingWithUs(){
    return(
        <div className="working-with-us-wrapper">
            <div className="container">
                <div className="hero-image">
                    <img src="images/hero-img.svg" alt="Img" draggable="false" />
                </div>
                <div className="working-with-container">
                    <div className="content">
                        <div className="title">WORKING WITH US!</div>
                        <p>
                        At DFYN, we believe that ideally, your work should be your passion. We welcome aspirants from all walks of life and undergrad programs but attitude and skills are the most important factors we look for while we hire or select our partners. Passion to develop or innovate does not require the badge of hierarchy and big changes or ideas can come from the juniormost roles as well. At DFYN, we aim to take care of the freedom of expression of ideas and scope of implementation without any reservation.
                        </p>
                        <p>
                        DFYN Living is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, protected veteran status, or any other characteristic protected under federal/central, state or local law, where applicable.
                        </p>
                    </div>
                </div>
                <div className="tag-section">
                    <p>
                    DIVERSITY & INCLUSION | STUDENT PROGRAMS | CAMPUS RECRUITMENT | CONSULTANTS | EXPERIENCED HIRE
                    </p>
                </div>
            </div>
        </div>
    )
}