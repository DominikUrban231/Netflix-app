import { useState, useEffect } from 'react';

const useMoviesData = () => {
  const [moviesLibrary, setMoviesLibrary] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteLibrary, setFavoriteLibrary] = useState([]);


  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
      .then(
        res => res.json()
      )
      .then(
        result => {
          setIsLoaded(true);
          setMoviesLibrary(result.feed.entry);
        },
        error => {
          setIsLoaded(true);
          setError(error.message);
        }
      )
  }, [])

  useEffect(() => {
    moviesLibrary.map(movie => {
      movie.isLiked = false
      return movie
    })
  }, [moviesLibrary])

  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("favoriteMovies"))
    if(localStorageData) {
      setFavoriteLibrary(localStorageData);
    }
  }, [moviesLibrary])

  return [moviesLibrary, isLoaded, error, favoriteLibrary]
}

export default useMoviesData