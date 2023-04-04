import React, { useEffect, useState, useContext } from "react";
import Heart from "./HeartPlusComponent/Heart";
import { FavoriteMoviesKey, getFromLocalStorage, setToLocalStorage } from "../../../utilities/helpers";
import Info from "./InfoComponent/Info"
import styled from "styled-components";

const StyledMovie = styled.div`
    margin: 5px;
    transition: transform 0.3s ease;
    width: 14vw;
    position: relative;
    z-index: 1;
    &:hover {
        transform: scale(1.2);
        z-index: 5;
        box-shadow: 0px 0px 20px black;
    }
    img {
        width: 100%;
    }
    div {
        position: absolute;
        bottom: 8%;
        left: 10%;
        display: none;    
    }
    &:hover div {
        display: flex;
    }
`
// const StyledButtons = styled.div`
//     position: absolute;
//     bottom: 8%;
//     left: 10%;
//     display: flex;
// `

const Movie = (props) => {

    const [updatedFavoriteMovies, setUpdatedFavoriteMovies] = useState(getFromLocalStorage())
    const [isFavorite, setIsFavorite] = useState(false) 

    // const handleAddFavoriteMovie = () => {
        
    //     if(getFromLocalStorage() || !getFromLocalStorage().find(movie => movie == props.movie)) {
    //         if(getFromLocalStorage()) {
    //             // console.log(getFromLocalStorage());
    //             // props.movie.isLiked = true;
    //             setToLocalStorage(FavoriteMoviesKey, [...getFromLocalStorage(), props.movie])
    //             // console.log(getFromLocalStorage())    
    //         } else {
    //             setToLocalStorage(FavoriteMoviesKey, [props.movie])
    //         }    
    //     } else {
    //         const favorites = getFromLocalStorage().filter(movie => movie !== props.movie);
    //         setToLocalStorage(FavoriteMoviesKey, favorites)
    //     }
    // }

    const handleAddFavoriteMovie = () => {
        console.log(isFavorite)
        isFavorite === false ? setIsFavorite(true) : setIsFavorite(false);
        console.log(isFavorite)
        if(getFromLocalStorage() && isFavorite === true) {
            setToLocalStorage(FavoriteMoviesKey, [...getFromLocalStorage(), props.movie]);
        } else if(isFavorite === true) {
            setToLocalStorage(FavoriteMoviesKey, [props.movie]);
        } else if(isFavorite === false && getFromLocalStorage()) {
            const favorites = getFromLocalStorage().filter(movie => movie.id !== props.movie.id);
            setToLocalStorage(FavoriteMoviesKey, favorites)
        }
    }

    // const handleAddFavoriteMovie = () => {
    //     if (getFromLocalStorage()) {
    //         setToLocalStorage('favoriteMovies', [...updatedFavoriteMovies, movie])
    //     } else {
    //         setToLocalStorage('favoriteMovies', [movie])
    //     }
    //     // setUpdatedFavoriteMovies(getFromLocalStorage())
    // }

    // useEffect(() => {
    //     handleAddFavoriteMovie();
    //     console.log(updatedFavoriteMovies);
    // }, [updatedFavoriteMovies])
    // console.log(props.movie.id.attributes["im:id"])

        return(
            <StyledMovie >
                <img src={props.movie && props.movie["im:image"][2].label} alt="img"/>
                <div>
                    <Heart 
                        // onClickHeart={props.onLiked}
                        onClickHeart={handleAddFavoriteMovie}
                    />
                    <Info 
                        movieId={props.movie && props.movie.id.attributes["im:id"]}
                    />
                </div>
            </StyledMovie>
        )    
    // }
};

export default Movie