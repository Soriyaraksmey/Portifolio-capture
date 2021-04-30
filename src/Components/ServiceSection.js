import React from 'react';
import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"
import { About, Description, Hide, Image } from "../styles";
import styled from 'styled-components';
import ScrollAnimation from "./ScrollAnimation";
import { fade } from "../Animations";

const ServiceSection = () => {

    const [elements, controls] = ScrollAnimation();

    return (
        <Services variants={fade} animate={controls} initial="hidden" ref={elements}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="lol" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="lol" />
                            <h3>TeamWorks</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="lol" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="lol" />
                            <h3>Effordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2" />
            </Image>
        </Services>
    );
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    @media (max-width: 1024px) {
    display: block;
  }
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width: 1024px) {
    justify-content: center;
  }
`;
const Card = styled.div`
flex-basis: 15rem;
.icon{
    display: flex;
    align-items: center;
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
}
`;
export default ServiceSection;