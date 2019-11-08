import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default App;
