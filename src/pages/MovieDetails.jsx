import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RoundButton } from "../buttons/RoundButton";
import useMoviesData from "../data/Api";

const Img = styled.img`
    height: 60vh;
`
const Green = styled.span`
    color: green;
`
const Border = styled.span`
    border: 1px solid black;
`
const Description = styled.div`
    display: flex;
    padding: 100px;
`

const MovieDetails = () => {

    const { id } = useParams();
    const [selectedMovie, setSelectedMovie] = useState();
    const [moviesLibrary] = useMoviesData();

    useEffect(() => {
        if(moviesLibrary && id) {
            setSelectedMovie(moviesLibrary.find(el => el.id.attributes["im:id"] === id))
        }
    }, [id, moviesLibrary])

    console.log(selectedMovie)

    if(selectedMovie) {
        return (
            <>
                <div>
                    <Img src={selectedMovie["im:image"][2].label} alt="Obraz filmu"/>
                    <div>
                        <p>N film</p>
                        <h1>{selectedMovie["im:name"].label}</h1>
                        <div>
                            <button>Play</button>
                            <RoundButton img=""/>
                            <button>kciuk</button>
                            <button>głośność</button>
                        </div>
                    </div>
                </div>
                <Description>
                    <div>
                        <div>
                            <Green>Trafność: 98%</Green>
                            <Border>13+</Border>
                            <span>Długość filmu</span>
                            <span>HD</span>
                        </div>
                        <p>{selectedMovie.summary.label}</p>
                    </div>
                    <div>
                        <p><span>Obsada: </span>Alexandra Breckenridge, Martin Henderson, Tim Matheson</p>
                        <p><span>Gatunki: </span>Medyczne, Romantyczne, Adaptacja ksiąek</p>
                        <p><span>Kategorie: </span>Słodko-gorzki, Osobisty, Uczuciowy</p>
                    </div>
                </Description>
            </>
        )    
    }
}

export default MovieDetails