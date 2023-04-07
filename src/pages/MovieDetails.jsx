import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RoundButton } from "../buttons/RoundButton";
import useMoviesData from "../data/Api";

const StyledAll = styled.div`
    width: 60%;
    padding: auto;
    margin: auto;
    background-color
`
const StyledImg = styled.div`
    // display: flex;
`
const Img = styled.img`
    height: 60vh;
`
const StyledGreen = styled.span`
    color: green;
`
const StyledBorder = styled.span`
    border: 1px solid black;
    margin: 5px;
`
const StyledDescription = styled.div`
    display: flex;
    // padding: 100px;
`
const StyledAbout = styled.div`
    width: 50%;
`
const StyledCast = styled.div`
    width: 20%;
`
const StyledReleaseDate = styled.div`
    padding-right: 5px;
`
const StyledTechnicalInformation = styled.div`
    display: flex;
    align-items: center;
`

const MovieDetails = () => {

    const { id } = useParams();
    const [selectedMovie, setSelectedMovie] = useState();
    const [year, setYear] = useState();
    const [moviesLibrary] = useMoviesData();

    useEffect(() => {
        if(moviesLibrary && id) {
            setSelectedMovie(moviesLibrary.find(el => el.id.attributes["im:id"] === id))
        }
    }, [id, moviesLibrary])

    useEffect(() => {
        if(selectedMovie) {
            const date = new Date(selectedMovie["im:releaseDate"].label);
            setYear(date.getFullYear());    
        }
    }, [selectedMovie])

    console.log(selectedMovie)

    if(selectedMovie) {
        return (
            <StyledAll>
                <StyledImg>
                    <Img src={selectedMovie["im:image"][2].label} alt="Obraz filmu"/>
                    <div>
                        <h1>{selectedMovie["im:name"].label}</h1>
                        <div>
                            <button>Play</button>
                            <RoundButton img=""/>
                            <button>kciuk</button>
                            <button>głośność</button>
                        </div>
                    </div>
                </StyledImg>
                <StyledDescription>
                    <StyledAbout>
                        <StyledTechnicalInformation>
                            <StyledGreen>Trafność: 98%</StyledGreen>
                            <StyledBorder>13+</StyledBorder>
                            <StyledReleaseDate>{year}</StyledReleaseDate>
                            <span>HD</span>
                        </StyledTechnicalInformation>
                        <p>{selectedMovie.summary.label}</p>
                    </StyledAbout>
                    <StyledCast>
                        <p><span>Obsada: </span>Alexandra Breckenridge, Martin Henderson, Tim Matheson</p>
                        <p><span>Gatunki: </span>Medyczne, Romantyczne, Adaptacja ksiąek</p>
                        <p><span>Kategorie: </span>Słodko-gorzki, Osobisty, Uczuciowy</p>
                    </StyledCast>
                </StyledDescription>
            </StyledAll>
        )    
    }
}

export default MovieDetails