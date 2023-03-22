import React, { useContext, useEffect, useState } from "react";
import RandomMovieButton from "./RandomMovieButton/randomMovieButton";
import info from '../../assets/info.svg'
import play from '../../assets/play.svg'
import { MovieContext } from "../../App";
import volumeOff from '../../assets/volume_off.svg'
import styled from "styled-components";
import Info from "../MovieList/Movie/InfoComponent/Info";

const All = styled.div`
    background-color: rgb(20, 20, 20);
`
const RandomMovie = styled.div`
    position: relative;
`
const Background = styled.img`
    height: 100vh;
    width: 100vw;
    box-shadow: 30px 30px  black inset;
`
const MovieInfo = styled.div`
    position: absolute; 
    top: 35%;
    left: 50px;
    color: White;
`
const N = styled.span`
    color: Red;
    font-size: 1.8em;
    font-weight: 800;
`
const Film = styled.p`
    font-size: 0.7em;
`
const NFilm = styled.div`
    display: flex;
`
const Buttons = styled.div`
    display: flex;
`

const RandomMovieWrapper = () => {

    const [moviesLibrary] = useContext(MovieContext)
    const [randomMovie, setRandomMovie] = useState({moviesLibrary});

    useEffect(() => {
        if (moviesLibrary && moviesLibrary.length > 0) {
            const randomNumber = Math.floor(Math.random() * moviesLibrary.length);
            setRandomMovie(moviesLibrary[randomNumber])
        }
    }, [moviesLibrary]);

    return (
        <All>
            {randomMovie && randomMovie["im:image"]
            &&
            <RandomMovie>
                <Background src={randomMovie["im:image"][2].label} alt={"zdjęcie filmu"}/>
                <MovieInfo>
                    <NFilm>
                        <N>N</N>
                        <Film>FILM</Film>
                    </NFilm>
                    <h1>{randomMovie["im:name"].label}</h1>
                    <p>{randomMovie.summary.label}</p>
                    <Buttons>
                        <div>
                        <RandomMovieButton icon={play} text={"Play"}/>
                        <RandomMovieButton icon={info} text={"More information"}/>
                        <Info 
                            movieId={randomMovie.id && randomMovie.id.attributes["im:id"]}
                            text={"More information"}
                        />
                        </div>
                        <button><img src={volumeOff} alt="volumeOff" /></button>
                      <div>16+</div>
                    </Buttons>
                </MovieInfo>
            </RandomMovie>
            }           
        </All>
    )
}

export default RandomMovieWrapper

// dodaj pasek <div/> aby uzyskć zaciemnienie na dole losowego filmu