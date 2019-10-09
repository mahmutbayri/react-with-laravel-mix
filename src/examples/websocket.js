import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'events';

const myEmitter = new EventEmitter();
const webSocket = new WebSocket('ws://localhost:3001');

webSocket.onmessage = function (e) {
    myEmitter.emit('event', {
        type: 'data',
        message: e.data
    });
};

webSocket.onopen = function (e) {
    webSocket.send('Hello Mews!');
    console.log('connection opened');
};

webSocket.onclose = function (e) {
    myEmitter.emit('event', {
        type: 'message',
        message: e.type,
    });
};

webSocket.onerror = function (e) {
    myEmitter.emit('event', {
        type: 'message',
        message: e.type,
    });
};

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['default'],
            message: 'No error',
        };
    }

    componentDidMount() {
        myEmitter.on('event', (data) => {
            if (data.type === 'data') {
                this.setState({
                    list: [...this.state.list, data.message],
                });
            }

            if (data.type === 'message') {
                this.setState({
                    message: data.message,
                });
            }
        });
    }

    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Numbers</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        <div className="alert alert-primary" role="alert">
                            {this.state.message}
                        </div>
                    </h6>
                    <ul className="list-group">
                        {
                            this.state.list.map(function (item, index) {
                                return (
                                    <li className="list-group-item" key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);
