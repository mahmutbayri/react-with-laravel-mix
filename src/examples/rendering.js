import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Functional(props) {
    const {messages} = props;
    return (
        <div>
            {
                messages.length > 0
                    ? `there are ${messages.length} messages`
                    : 'there is not any message.'
            }
        </div>
    )
}

class ComponentBase extends Component {
    render() {
        const {messages} = this.props;
        return (
            <div>
                {
                    messages.length > 0
                        ? `there are ${messages.length} messages`
                        : 'there is not any message.'
                }
            </div>
        )
    }
}

const messages = [
    "a",
    "b",
    "c",
];

ReactDOM.render(
    <div>
        <Functional messages={messages}/>
        <ComponentBase messages={messages}/>
    </div>,
    document.getElementById('root')
);
