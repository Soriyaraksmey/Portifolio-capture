import React from 'react';
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimate } from '../Animations';

const ContactUs = () => {
    return (<ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: "#fff" }}>

        <Title>
            <Hide>
                <motion.h2 variants={titleAnimate}>Get in Touch</motion.h2>
            </Hide>
        </Title>
        <div>
            <Hide>
                <Social variants={titleAnimate}>
                    <Cicle />
                    <h3>Send Us Message.</h3>
                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnimate}>
                    <Cicle />
                    <h3>Send an Email.</h3>
                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnimate}>
                    <Cicle />
                    <h3>Call me Directly.</h3>
                </Social>
            </Hide>
        </div>
    </ContactStyle>);
}

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
@media (max-width: 450px){
    padding: 5rem 1rem;
    h2{
        font-size: 3.5rem;
    }
 
}
`
const Hide = styled.div` 
overflow: hidden;
`
const Title = styled.div`
margin-bottom: 4rem;
color: black;
 `;
const Cicle = styled.div`
border-radius:50%;
width: 2rem;
height: 2rem;
background: #353535;
 `;


const Social = styled(motion.div)`
display: flex;
align-items:center;
h3{
    font-size: 2rem;
    margin: 2rem;
    color: black;
}
`;


export default ContactUs;