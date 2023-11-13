import React from "react";

const MovieCard = ({ movie, addMovie }) => {
    return(
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
                <button className="addWatchList" onClick={() => addMovie(movie)}>Add to list</button>
            </div>
        </div>
    )
}

export default MovieCard;