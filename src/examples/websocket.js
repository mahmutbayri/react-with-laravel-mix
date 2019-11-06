import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'events';
import _ from 'lodash';

const myEmitter = new EventEmitter();
const webSocket = new WebSocket('ws://localhost:3001');

webSocket.onmessage = function (e) {
    myEmitter.emit('event', {
        type: 'data',
        message: JSON.parse(e.data),
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
            list: [],
            message: 'No error',
        };
    }

    componentDidMount() {
        myEmitter.on('event', (data) => {
            if (data.type === 'data') {
                if (!_.isArray(data.message)) {
                    data.message = [data.message];
                }
                this.setState({
                    list: _.sortBy(_.unionBy(data.message, this.state.list, 'id'), 'id'),
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
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Currency</th>
                            <th scope="col">Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map(function (item) {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);
