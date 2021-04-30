import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
//import component 
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animation
import ScrollAnimation from "../Components/ScrollAnimation";
import { motion } from 'framer-motion';
import { pageAnimation, Slider, fade, ImgAnim, LineAnim, sliderContainer, swipe, swipe2 } from '../Animations';
import { Hide } from '../styles';
import ScrollTop from '../Components/ScrollTop';


const OurWork = () => {

    const [elements, controls] = ScrollAnimation();
    const [elements2, controls2] = ScrollAnimation();

    return (<Work variants={pageAnimation} layout="position" initial="hidden" animate="show" style={{ background: "#fff" }} exit="exit">
        <motion.div variants={sliderContainer}>
            <Frame1 variants={Slider}></Frame1>
            <Frame2 variants={Slider}></Frame2>
            <Frame3 variants={Slider}></Frame3>
            <Frame4 variants={Slider}></Frame4>
        </motion.div>
        <Movie >
            <motion.h2 variants={fade}>The Athlete</motion.h2>
            <motion.div variants={LineAnim} className="line"></motion.div>
            <Link to="/work/the-athlete">
                <ImgDiv>
                    <motion.img variants={ImgAnim} src={athlete} alt="athlete" />
                </ImgDiv>
            </Link>
        </Movie>
        <Hidden>
            <Movie variants={swipe} animate={controls} initial="hidden" ref={elements}>
                <h2>The Racer</h2>
                <motion.div variants={LineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="theracer" />
                </Link>
            </Movie>
        </Hidden>
        <Movie variants={fade} animate={controls2} initial="hidden" ref={elements2}>
            <h2>Good Times</h2>
            <div className="line"></div>
            <Link to="/work/good-times">
                <img src={goodtimes} alt="goodtimes" />
            </Link>
        </Movie>
        <ScrollTop />
    </Work>);
}

const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
    padding: 1rem 0rem;
}
@media (max-width: 1024px){
    padding: 5rem 1rem;
    h2{
        font-size: 2.5rem;
    }
}
`;
const Movie = styled(motion.div)`
padding-bottom: 10rem;
.line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
@media (max-width: 1024px){
    padding-bottom: 5rem;
}
`;
const Hidden = styled.div` 
overflow: hidden;
`;

const ImgDiv = styled.div`
overflow: hidden;
 `;
//Fram ANimation
const Frame1 = styled(motion.div)`
position: fixed;
left:0%;
top:0%;
width:100%;
height:100%;
background: #fffebf;
z-index: 2;
`;
const Frame2 = styled(Frame1)`
background: #ff83fb;
`;
const Frame3 = styled(Frame1)`
background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
background: #8effa0;
`;
export default OurWork;