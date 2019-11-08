import React, {Component} from 'react';
import movieRepository from '../repositories/MovieRepository'
import NowPlaying from './NowPlaying';

class Home extends Component {
    state = {
        movies: [],
    };
    componentDidMount() {
        movieRepository.getNowPlaying()
            .then(response => {
                this.setState({
                    movies: response.results,
                });
            });
    }

    render() {
        return (
            <div>
                <NowPlaying movies={this.state.movies}/>
            </div>
        );
    }
}

export default Home;
