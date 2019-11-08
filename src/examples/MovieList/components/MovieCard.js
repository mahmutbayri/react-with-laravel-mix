import React from 'react';

export default (props) => {
    const {movie} = props;
    const limit = 75;
    const overview = movie.overview.slice(0, limit) + (movie.overview.length > limit ? "..." : "")
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{overview}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
