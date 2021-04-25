import React from 'react';
import styled from 'styled-components';
const Arward = ({ title, description }) => {
    return (
        <StyleAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyleAward>
    );
}
const StyleAward = styled.div`
padding: 5rem;
h3{
    font-size: 1.6rem;
};

.line{
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
}
p{
    padding: 2rem 0rem;
}
`;

export default Arward;