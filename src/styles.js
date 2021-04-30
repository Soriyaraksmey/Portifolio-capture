import styled from 'styled-components';
import { motion } from 'framer-motion';
export const About = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
@media (max-width: 1024px) {
    display: block;
    padding: 2rem 2rem;
    text-align:center;
    h4{
      font-size: 1rem;
    }
  }


`;
export const Description = styled.div`
flex: 1;
z-index: 2;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
@media (max-width: 1024px) {
    padding-right: 0rem;
    h2{
        font-size: 3rem;
    }
    
  }

`;
export const Image = styled.div`
flex: 1;
z-index: 2;
overflow: hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
@media (max-width: 1024px) {
    padding: 2rem 0rem;
  }
`;

export const Hide = styled.div`
overflow: hidden;
`;