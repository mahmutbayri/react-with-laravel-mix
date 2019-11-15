import React, {Component} from 'react';
import config from './config';
import Firebase from 'firebase';
import MovieCard from "./MovieCard";

class App extends Component {
    constructor(props) {
        super(props);
        Firebase.initializeApp(config);
        this.state = {
            movieList: []
        };
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData() {
        let ref = Firebase.database().ref("/");
        ref.on("value", (snapshot) => {
            const state = snapshot.val();
            this.setState({
                movieList: state.movieList.results
            });
        });
    }

    render() {
        const {movieList} = this.state;
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card-columns">
                        {
                            movieList.map(function (movie, index) {
                                return <MovieCard key={index} movie={movie}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
