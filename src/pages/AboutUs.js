import React from 'react';
import AboutSection from "../Components/AboutSection";
import FaqSection from '../Components/FaqSections';
import ServiceSection from '../Components/ServiceSection';


const AboutUs = () => {
    return (
        <div>
            <AboutSection />
            <ServiceSection />
            <FaqSection />
        </div>
    );
}

export default AboutUs;