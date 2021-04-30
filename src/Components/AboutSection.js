import React from 'react'
import home1 from "../img/home1.png"
import styled from 'styled-components';
import { About, Description, Hide, Image } from "../styles";
//Animation
import { motion } from 'framer-motion';
import { titleAnimate, fade, ImgAnim } from '../Animations';
import Wave from '../Wave';


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimate}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimate}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimate}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis, impedit quas quasi excepturi sequi eiusi pariatur </motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={ImgAnim} src={home1} alt="guy with the camera" />
            </Image>
            <Wave />
        </About>
    );
}



export default AboutSection;