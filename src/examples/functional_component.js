import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function ChildComponent(props) {
    return <div>{props.name}, {props.count}</div>
}

// given default props
ChildComponent.defaultProps = {
    count: 1
};

function Mother(props) {
    return <div>
        <h1>Hello, {props.name}</h1>
        <ChildComponent name="Child 1"/>
        <ChildComponent name="Child 2" count="1500"/>
        <ChildComponent name="Child 3"/>
    </div>;
}

const element = <Mother name="Sara" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);