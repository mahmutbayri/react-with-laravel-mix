import React from 'react';
import PropTypes from 'prop-types';

function MovieList(props) {
    const {movie} = props;
    const limit = 75;
    const overview = movie.overview.slice(0, limit) + (movie.overview.length > limit ? "..." : "");
    return (
        <div className="card">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{overview}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

MovieList.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieList;
