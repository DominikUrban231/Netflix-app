import React, { createContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import RandomMovie from './components/RandomMovie/RandomMovie'
import MovieList from './components/MovieList/MovieList'
import logo from './logo.svg'
import useMoviesData from './data/Api';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(20, 20, 20);
  }
`
const All = styled.div`
  position: relative; 
`
const AllMovieLists = styled.div`
  position: absolute;
  top: 75vh;
  // background-color: black;
`

export const MovieContext = createContext([]);

const App = () => {

  const [moviesLibrary, isLoaded, error, favoriteLibrary] = useMoviesData()

  if (error) {
    return (
      <div>Error: {error}</div>
    )
  }
  else if (!moviesLibrary) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Loading... Please Wait...
          </p>
        </header>
      </div>
    )
  }
  else if (moviesLibrary && isLoaded) {
    return (
      <>
        <MovieContext.Provider value={[moviesLibrary, favoriteLibrary]}>
          <All>
            <Navbar />
            <RandomMovie/>
            <AllMovieLists>
              <MovieList
                type={"Action & Adventure"}
              />
              <MovieList
                type={"Drama"}
              />
              <MovieList
                type={"Comedy"}
              />
              <MovieList
                type={"Favorite"}
              />
            </AllMovieLists>
            <GlobalStyle/>
          </All>
        </MovieContext.Provider>
      </> 
    )
  }
}
export default App

