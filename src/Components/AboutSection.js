import React from 'react'
import home1 from "../img/home1.png"
const AboutSection = () => {
    return (
        <div>

            <div className="descriptin">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis, impedit quas quasi excepturi sequi eiusi pariatur </p>
                <button>Contact us</button>
            </div>
            <div className="img">
                <img src={home1} alt="guy with the camera" />
            </div>
        </div>
    );
}

export default AboutSection;