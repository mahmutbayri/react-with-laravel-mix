import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function Mailbox(props) {
    const messages = props.messages;
    if(messages.length > 0) {
        return <div>mesaj var</div>
    }
    return <div>Mesaj var</div>
}

class Mailbox2 extends React.Component {

    render() {
        return (
            <div>{this.props.messages.length > 0 ? 'there are ' + this.props.length + ' messages' : 'there is not any message. '}</div>
        )
    }
}

const messages = ["a", "b", "c",];

ReactDOM.render(
    <div>
        <Mailbox messages={messages} />
        <Mailbox2 messages={messages} />
    </div>,
    document.getElementById('root')
);