import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const NavLink = ({ open }) => {

    const { pathname } = useLocation();

    return (
        <Ulstyled open={open}>
            <li>
                <Link to="/">1. About us</Link>
                <Line transition={{ duration: 1, ease: "easeOut" }} initial={{ width: "0%" }} animate={{ width: pathname === "/" ? "35%" : "0%" }} />
            </li>
            <li>
                <Link to="/work">2. Our Works</Link>
                <Line transition={{ duration: 1, ease: "easeOut" }} initial={{ width: "0%" }} animate={{ width: pathname === "/work" || pathname === "work/the-athlete" || pathname === "/work/the-racer" || pathname === "/work/good-times" ? "35%" : "0%" }} />
            </li>
            <li>
                <Link to="/Contactus">3. Contact Us</Link>
                <Line transition={{ duration: 1, ease: "easeOut" }} initial={{ width: "0%" }} animate={{ width: pathname === "/Contactus" ? "35%" : "0%" }} />
            </li>
        </Ulstyled>);
}

const Ulstyled = styled.ul` 
display: flex;
list-style: none;
li{
    padding-left:10rem;
    position: relative;
    font-family: 'Bebas Neue', cursive;
}
@media (max-width: 1024px){
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background:#000;
    position: fixed;
    top:0%;
    right: 0%;
    transform:${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
    transition: ${({ open }) => open ? 'all 0.75s ease' : ''}; 
}
    

`;
const Line = styled(motion.div)`
height: 0.3rem;
background: #23d997;
width:35%;
position: absolute;
bottom: -50%;
left: 70%;
@media (max-width: 1024px){
display: none;
}
`

export default NavLink;