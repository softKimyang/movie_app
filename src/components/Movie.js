import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css';

function Movie({  title, year, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={ poster } alt={ title } title={ title }/>
            <h3 className="movie_title">{ title }</h3>
            <h5 className="movie_year"> { year }</h5>
            <p className="movie_summary">{ summary.slice(0, 180)}....</p>
            <ul className="movie_genres">
                {genres.map((genre, index) =>{
                    return <li key={index} className='movie_genre'>{genre}</li>
                })}
            </ul>
        </div>
    )
}

Movie.prototype = { 
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    ganres: Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Movie;