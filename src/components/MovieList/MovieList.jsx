import React, { useContext, useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../../utilities/helpers";
import { MovieContext } from "../../App";
import Movie from '../MovieList/Movie/Movie';
import './MovieList.css';


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

    // useEffect(() => {    
    //     handleAddFavoriteMovie();
    // }, [updatedFavoriteMovies])
    

    useEffect(() => {
        if(props.type === "Favorite") {
            setCategoryMovies(favoriteLibrary)
        } else {
            setCategoryMovies(moviesLibrary.filter(movie => movie.category.attributes.term == props.type));

        }
        // console.log(categoryMovies.length)
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
    }, [categoryMovies.length, lastMovie])

    // console.log(categoryMovies.length)
    // console.log("ulubione filmy", categoryMovies)
    // console.log("kategoria filmów", categoryMovies)


    // console.log(props.movie)



    if(categoryMovies) {
        // console.log(categoryMovies)
        return (
            <>
                <h3>{props.type}</h3>
                <div className="categoryWrapper">
                    <button disabled={leftDisabled} onClick={previousMovie}>left</button>
                    {
                        categoryMovies.slice(firstMovie, lastMovie).map((movie, index) => (
                            <Movie
                                key={index}
                                movie={movie}
                                // onLiked={handleAddFavoriteMovie(movie)}
                                // movieId={movie.id.attributes["im:id"]}
                            />
                        ))
                    }
                    <button disabled={rightDisabled} onClick={nextMovie}>right</button>
                </div>
            </>
        )
    }
}

export default MovieList