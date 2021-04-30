import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import ScrollAnimation from "./ScrollAnimation";
import { fade } from "../Animations";

const FaqSection = () => {

    const [elements, controls] = ScrollAnimation();

    return (
        <Faq variants={fade} animate={controls} initial="hidden" ref={elements}>
            <h2>Any questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title={"How Do I start?"}>

                    <div className="answer">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus et, </p>
                    </div>
                </Toggle>
                <Toggle title={"Daily Sachdual"}>

                    <div className="answer">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus et, </p>
                    </div>
                </Toggle>
                <Toggle title={"Payments Method"}>
                    <div className="answer">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus et, </p>
                    </div>
                </Toggle>
                <Toggle title={"How can I contact you?"}>
                    <div className="answer">
                        <p>Lorem ipsum dolor, sit amet</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus et, </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: white;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
}
p{
    padding: 1rem 0rem;
}
@media (max-width: 1024px) {
h4{
    font-size: 1.5rem;
}

}


`;

export default FaqSection;