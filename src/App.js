import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=6287d1ce'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [movieList, setMovieList] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    const addMovie = (movie) => {
        setMovieList([...movieList, movie])
    }

    return(
        <div className='app'>
            <h1>MovieWorld</h1>

            <div className='container'>
                {movieList.map((movie) => (
                    <MovieCard movie = {movie} addMovie={()=>{}} />
                ))}
            </div>

            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='Search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie = {movie} addMovie={addMovie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;