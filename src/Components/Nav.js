import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
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

export default Nav;