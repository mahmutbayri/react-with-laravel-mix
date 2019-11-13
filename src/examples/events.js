import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Toggle extends Component {
    //Component(props, context, updater)
    constructor(props) {
        super(props);
        this.state = {
            isToggled: false
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        //(partialState, callback)
        this.setState(function (prevState) {
            return {
                isToggled: !prevState.isToggled,
            };
        });
    }

    render() {
        return <button onClick={this.clickHandler}>{this.state.isToggled ? 'ON' : 'OFF'}</button>
    }

    /**
     * Life cycle methods
     */
    componentWillMount() {
        console.log('componentWillMount', arguments);
    }

    componentDidMount() {
        console.log('componentDidMount', arguments);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps', arguments);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', arguments);
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate', arguments);
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        console.log('componentDidUpdate', arguments);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', arguments);
    }
}

global.ReactDOM = ReactDOM;
global.React = React;

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);
