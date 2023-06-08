import React, { useContext, useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../../utilities/helpers";
import { MovieContext } from "../../App";
import Movie from '../MovieList/Movie/Movie';
import styled from "styled-components";
import arrowLeft from '../../assets/arrow_left.svg'
import arrowRight from '../../assets/arrow_right.svg'

const StyledTitle = styled.h2`
    color: #e5e5e5;
    padding-left: 5%;
    // font-size: 2em;
`
const StyledSectionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
        border: none;
        background-color: rgb(20, 20, 20);
        opacity: 50%;
        &:hover {
            cursor: pointer;
            background-color: grey;
            cursor: pointer;
        }
        &:active {
            background-color: darkgray;
        }
        &:disabled {
            cursor: default;
            visibility: hidden;
        }
    }
`
const StyledMovieList = styled.div`
    display: flex;
`
const StyledAll = styled.div`
    // width: 100vw;
    z-index: 2;
`
const MovieList = (props) => {
    const [moviesLibrary, favoriteLibrary] = useContext(MovieContext);
    const [categoryMovies, setCategoryMovies] = useState([]);
    const [firstMovie, setFirstMovie] = useState(0);
    const [lastMovie, setLastMovie] = useState(6);
    const [leftDisabled, setLeftDisabled] = useState(false);
    const [rightDisabled, setRightDisabled] = useState(false);

    const refreshFavorites = () => {
        console.log("odświerzono ulubione")
    };

    const previousMovie = () => {
        setFirstMovie(firstMovie - 1)
        setLastMovie(lastMovie - 1)
    };
    
    const nextMovie = () => {
        setFirstMovie(firstMovie + 1)
        setLastMovie(lastMovie + 1)
    };

    useEffect(() => {
        if(props.type === "Favorite") {
            setCategoryMovies(getFromLocalStorage())
        } else {
            setCategoryMovies(moviesLibrary.filter(movie => movie.category.attributes.term == props.type));
        }
    }, [moviesLibrary]);
    
    useEffect(() => {
        firstMovie === 0 ? setLeftDisabled(true) : setLeftDisabled(false);
    }, [firstMovie]);

    useEffect(() => {
        lastMovie === categoryMovies.length ? setRightDisabled(true) : setRightDisabled(false);
    }, [lastMovie]);

    if(categoryMovies) {
        return (
            <StyledAll>
                <StyledTitle>{props.type}</StyledTitle>
                <StyledSectionWrapper className="categoryWrapper">
                    <button disabled={leftDisabled} onClick={previousMovie}><img src={arrowLeft} alt="left"/></button>
                    <StyledMovieList>
                        {
                            categoryMovies.slice(firstMovie, lastMovie).map((movie, index) => (
                                <Movie
                                    key={index + new Date()}
                                    movie={movie}
                                    refreshFavorites={refreshFavorites}
                                />
                            ))
                        }
                    </StyledMovieList>
                    <button disabled={rightDisabled} onClick={nextMovie}><img src={arrowRight} alt="right"/></button>
                </StyledSectionWrapper>
            </StyledAll>
        )
    };
};

export default MovieList