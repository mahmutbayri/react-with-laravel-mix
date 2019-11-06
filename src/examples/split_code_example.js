import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SomeComponent extends Component {
    render() {
        return (
            <h1>Some Component</h1>
        );
    }
}

ReactDOM.render(
    <SomeComponent/>,
    document.getElementById('root')
);

