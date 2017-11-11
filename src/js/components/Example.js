import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />, document.getElementById('example'));
}
