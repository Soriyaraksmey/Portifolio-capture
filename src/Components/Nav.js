import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Burger from './Burgur';
const Nav = () => {
    return (
        <StyledNav>
            <h1 id="logo"><Link to="/">Capture</Link></h1>
            <Burger />
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
#logo{
    font-size: 1.7rem;
    font-family: 'Bebas Neue', cursive;
    font-weight: lighter;
}

@media (max-width: 1024px) {

    padding: 1rem 2rem;
}
 `;


export default Nav;