import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import _ from 'lodash';

class NowPlaying extends Component {
    render() {
        return (
            <div>
                <h1>Now Playing</h1>
                {
                    _.chunk(this.props.movies, 4).map((group, index) => {
                        return this.renderGroup(group, index);
                    })
                }
            </div>
        );
    }

    /**
     * @param group
     * @param index
     * @returns
     */
    renderGroup(group, index) {
        return (
            <div className="card-deck" style={{marginBottom: 22}} key={`group-${index}`}>
                {
                    group.map(movie => {
                        return <MovieCard key={movie.id} movie={movie}/>
                    })
                }
            </div>
        )
    }
}


NowPlaying.propTypes = {
    movies: PropTypes.array.isRequired
};

NowPlaying.defaultProps = {
    movies: []
};

export default NowPlaying;
