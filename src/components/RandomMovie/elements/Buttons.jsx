import React from "react";
import styled from "styled-components";
import Info from "../../MovieList/Movie/InfoComponent/Info";
import RandomMovieButton from "../RandomMovieButton/randomMovieButton";

const ButtonsWrapper = styled.div`
    display: flex;
`

const Buttons = () => {
    return (
        <ButtonsWrapper>
            <RandomMovieButton icon={play} text={"Play"}/>
            <RandomMovieButton icon={info} text={"More information"}/>
            <Info 
                movieId={randomMovie.id && randomMovie.id.attributes["im:id"]}
                text={"More information"}
            />
        </ButtonsWrapper>

    )
}

export default Buttons