import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Nav = () => {
    return (
        <StyledNav>
            <h1 id="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Works</Link>
                </li>
                <li>
                    <Link to="/Contactus">3. Contact Us</Link>
                </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
        </StyledNav>
    );
}

const StyledNav = styled.div` 
min-height: 10vh;
display:flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
position: sticky;
top: 0%;
z-index:10;
a{
    color: white;
    text-decoration: none;
}
ul{
    display: flex;
    list-style: none;
}
#logo{
    font-size: 1.7rem;
    font-family: 'Bebas Neue', cursive;
    font-weight: lighter;
}
li{
    padding-left:10rem;
    position: relative;
    font-family: 'Bebas Neue', cursive;
}
 `;
const bugureStyled = styled(motion.svg)`

 `

export default Nav;