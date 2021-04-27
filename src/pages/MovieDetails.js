import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { MovieState } from '../movieState';
import Arward from './arward';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animations';

const MovieDetails = () => {

    const history = useHistory();
    const url = history.location.pathname;
    console.log(url);
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);
    console.log(movie);
    return (
        <>{
            movie && (
                <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </HeadLine>
                    <Awards>
                        {
                            movie.awards.map((award) => (<Arward key={award.title} title={award.title} description={award.description} />))
                        }
                    </Awards>
                    <ImgDisplay>
                        <img src={movie.secondaryImg} alt="secondaryImg" />
                    </ImgDisplay>
                </Details>)
        }
        </>
    );
}

const Details = styled(motion.div)`
color: white;
`;
const HeadLine = styled.div`
min-height: 90vh;
padding-top:20vh;
position: relative;
h2{
    position: absolute;
    top:10%;
    left: 50%;
    transform: translate(-50%,-10%);
}
img{
    width:100%;
    height: 70vh;
    object-fit: cover;
}
`;
const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;
`;

const ImgDisplay = styled.div`
min-height: 80vh;
img{
    width: 100%;
    min-height: 100vh;
    object-fit:cover;
}
`;


export default MovieDetails;