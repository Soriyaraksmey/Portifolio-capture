import React from 'react';
import AboutSection from "../Components/AboutSection";
import FaqSection from '../Components/FaqSections';
import ServiceSection from '../Components/ServiceSection';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animations';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServiceSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUs;