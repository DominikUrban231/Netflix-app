export const getFromLocalStorage = (key = FavoriteMoviesKey) => {
    return JSON.parse(localStorage.getItem(key))
};

export const setToLocalStorage = (key = FavoriteMoviesKey, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
};

export const FavoriteMoviesKey = "favoriteMovies";