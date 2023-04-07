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
    width: 100vw;
    z-index: 2;
`

const MovieList = (props) => {
    const [moviesLibrary, favoriteLibrary] = useContext(MovieContext)
    const [categoryMovies, setCategoryMovies] = useState([])
    const [firstMovie, setFirstMovie] = useState(0)
    const [lastMovie, setLastMovie] = useState(6)
    const [leftDisabled, setLeftDisabled] = useState(false)
    const [rightDisabled, setRightDisabled] = useState(false)
    const [updatedFavoriteMovies, setUpdatedFavoriteMovies] = useState(getFromLocalStorage())

    // const [favoriteMovies, setFavoriteMovies] = useState([])
    // const [likedMovie, setLikedMovie] = useState()

    // jeśli props.type == favorite, to generuj filmy z całej biblioteki filmów i dodawaj tylko takie, kiedy ID zgadza się z propsem przekazanym z pojedyńczego filmu

    // const handleAddFavoriteMovie = (movie) => {
    //     console.log("kliknięto w polubienie")
    //     if (getFromLocalStorage()) {
    //         setToLocalStorage('favoriteMovies', [...updatedFavoriteMovies, movie])
    //     } 
    //     //     setToLocalStorage('favoriteMovies', [movie])
    //     // }
    //     // setUpdatedFavoriteMovies(getFromLocalStorage())
    // }

    const previousMovie = () => {
        setFirstMovie(firstMovie - 1)
        setLastMovie(lastMovie - 1)
    }
    
    const nextMovie = () => {
        setFirstMovie(firstMovie + 1)
        setLastMovie(lastMovie + 1)
    }    

    useEffect(() => {
        if(props.type === "Favorite") {
            setCategoryMovies(getFromLocalStorage("favoriteMovies"))
        } else {
            setCategoryMovies(moviesLibrary.filter(movie => movie.category.attributes.term == props.type));

        }
    }, [moviesLibrary])

    // useEffect(() => {
    //     if(lastMovie > favoriteLibrary.length) {
    //         setLastMovie(1)
    //     } else {
    //         console.log("favoriteMovies jest puste")
    //     }
    // }, [])

    // useEffect(() => {
    //     setCategoryMovies(categoryMovies.slice(firstMovie, lastMovie))
    // }, [])
    
    useEffect(() => {
        if(firstMovie === 0) {
            setLeftDisabled(true)
        } else {
            setLeftDisabled(false)
        }
    }, [firstMovie])


    useEffect(() => {
        if(lastMovie === categoryMovies.length) {
            setRightDisabled(true)
        } else {
            setRightDisabled(false)
        }
    }, [lastMovie])

    // console.log(categoryMovies.length)
    // console.log("ulubione filmy", categoryMovies)
    // console.log("kategoria filmów", categoryMovies)


    // console.log(props.movie)



    if(categoryMovies) {
        // console.log(categoryMovies)
        return (
            <StyledAll>
                <StyledTitle>{props.type}</StyledTitle>
                <StyledSectionWrapper className="categoryWrapper">
                    <button disabled={leftDisabled} onClick={previousMovie}><img src={arrowLeft} alt="left"/></button>
                    <StyledMovieList>
                        {
                            categoryMovies.slice(firstMovie, lastMovie).map((movie) => (
                                <Movie
                                    key={new Date()}
                                    movie={movie}
                                    // onLiked={handleAddFavoriteMovie(movie)}
                                    // movieId={movie.id.attributes["im:id"]}
                                />
                            ))
                        }
                    </StyledMovieList>
                    <button disabled={rightDisabled} onClick={nextMovie}><img src={arrowRight} alt="right"/></button>
                </StyledSectionWrapper>
            </StyledAll>
        )
    }
}

export default MovieList