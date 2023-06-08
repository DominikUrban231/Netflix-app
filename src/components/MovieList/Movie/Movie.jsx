import React, { useEffect, useState, useContext } from "react";
import Heart from "./HeartPlusComponent/Heart";
import { FavoriteMoviesKey, getFromLocalStorage, setToLocalStorage } from "../../../utilities/helpers";
import Info from "./InfoComponent/Info"
import styled from "styled-components";

const StyledMovie = styled.div`
    margin: 5px;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
    &:hover {
        transform: scale(1.2);
        z-index: 5;
        box-shadow: 0px 0px 20px black;
    }
    div {
        position: absolute;
        bottom: 8%;
        left: 10%;
        display: none;    
    }
    // img {
    //     width: 13vw;
    // }
    &:hover div {
        display: flex;
    }
`
const StyledIMG = styled.img`
width: 13vw;
`
const Movie = (props) => {

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        getFromLocalStorage() &&
        setIsFavorite(getFromLocalStorage().includes(props.movie));
    }, [props.movie])

    const handleAddFavoriteMovie = () => {
        setIsFavorite(!isFavorite);
    }

    useEffect(() => {
        if(getFromLocalStorage() && isFavorite) {
            setToLocalStorage(FavoriteMoviesKey, [...getFromLocalStorage(), props.movie]);
        } else if(isFavorite) {
            setToLocalStorage(FavoriteMoviesKey, [props.movie]);
        } else if(!isFavorite && getFromLocalStorage()) {
            const favorites = getFromLocalStorage().filter(movie => movie.id.label !== props.movie.id.label);
            setToLocalStorage(FavoriteMoviesKey, favorites)
        }
        props.isFavorite;
    }, [isFavorite])

        return(
            <StyledMovie >
                <StyledIMG src={props.movie && props.movie["im:image"][2].label} alt="img"/>
                <div>
                    <Heart 
                        onClickHeart={handleAddFavoriteMovie}
                        isFavorite={isFavorite}
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