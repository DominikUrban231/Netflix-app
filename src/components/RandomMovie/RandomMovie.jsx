import React, { useContext, useEffect, useState } from "react";
import RandomMovieButton from "./RandomMovieButton/randomMovieButton";
import play from '../../assets/play.svg'
import { MovieContext } from "../../App";
import styled from "styled-components";
import Info from "../MovieList/Movie/InfoComponent/Info";
import avatar from "../../assets/moviesWallpaper/avatar.jpg";
import creed_3 from "../../assets/moviesWallpaper/creed_3.jpg"
import otto from '../../assets/moviesWallpaper/man_called_otto.jpg'
import plane from '../../assets/moviesWallpaper/plane.jpg'

const All = styled.div`
`
const RandomMovie = styled.div`
    position: relative;
`
const Background = styled.img`
    height: 100vh;
    width: 100%;
    background-image: url(${avatar})};
    background-size: cover;
    background-position: center;
`
const MovieInfo = styled.div`
    position: absolute; 
    top: 30%;
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
const Description = styled.div`
    width: 70%;
    h1 {
        margin-top: 0px;
    }
    // p {
    //     width: 50%;
    // }
`
const NFilm = styled.div`
    display: flex;
`
const Buttons = styled.div`
    display: flex;
`
const StyledLowerGradient = styled.div`
    position: absolute;
    bottom: 30px;
    width: 100%;
    height: 80px;
    // background: linear-gradient(rgba(20, 20, 20, 0), rgba(20, 20, 20, 1));
    background: color: Red:
`
const RandomMovieWrapper = (props) => {

    const [moviesLibrary] = useContext(MovieContext);
    const [randomMovie, setRandomMovie] = useState({moviesLibrary});
    const [moviesToDisplay, setMoviesToDisplay] = useState([]);
    const [i, setI] = useState(0);

    useEffect(() => {
        if (moviesToDisplay && moviesToDisplay.length > 0) {
            // const randomNumber = Math.floor(Math.random() * moviesToDisplay.length);
            const randomNumber = i
            setRandomMovie(moviesToDisplay[randomNumber]);
            i < 4 ? setI(i + 1) : setI(0);
        }
    }, [moviesToDisplay]);
    console.log(i)

    console.log(moviesLibrary)

    useEffect(() => {
        const wallpapersList = [avatar, creed_3, plane, otto];
        const chosenMovies = moviesLibrary.slice(0, 4);

        const moviesWithWallpapers = chosenMovies.map((movie, index) => {
            return {
                ...movie,
                wallpaper: wallpapersList[index]
            };
        });
        setMoviesToDisplay(moviesWithWallpapers);
    }, [moviesLibrary])
    // console.log(randomMovie)

    return (
        <All>
            {randomMovie && randomMovie["im:image"]
            &&
            <RandomMovie>
                {/* <Background src={randomMovie.wallpaper} alt={"zdjęcie filmu"}/> */}
                {/* <Background src={avatar} alt={"zdjęcie filmu"}/> */}
                <Background />
                <MovieInfo>
                    <NFilm>
                        <N>N</N>
                        <Film>FILM</Film>
                    </NFilm>
                    <Description>
                        <h1>{randomMovie["im:name"].label}</h1>
                        {/* <p>{randomMovie.summary.label}</p> */}
                    </Description>
                    <div>
                        <Buttons>
                            <RandomMovieButton icon={play} text={"Play"}/>
                            <Info 
                                movieId={randomMovie.id && randomMovie.id.attributes["im:id"]}
                                text={"More information"}
                            />
                        </Buttons>
                    </div>
                </MovieInfo>
                <StyledLowerGradient/>
            </RandomMovie>
            }           
        </All>
    )
}

export default RandomMovieWrapper

// dodaj pasek <div/> aby uzyskć zaciemnienie na dole losowego filmu