import { createGlobalStyle } from 'styled-components';

export const Globlestyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    
}
body{
    background: #1b1b1b;
    font-family: 'Crimson Text', serif;
}
button{
    font-family: 'Crimson Text', serif;
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    border-radius: 25px;
    &:hover{
        background-color:  #23d997;
        color: black;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

span{
    font-weight: bold;
    color: #23d997;  
}
a{
    font-size: 1.1.rem;
}
html{
    @media (max-width: 1500px){
        font-size: 80%;
    }
    @media (max-width: 1300px){
        opacity: 0;
    }
}

`;