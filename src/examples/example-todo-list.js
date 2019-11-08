import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const defaultItems = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
];

function ListItem(props) {
    return <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <span className="badge badge-danger badge-pill" style={{cursor: 'pointer', 'paddingLeft': '10px'}} onClick={props.onClickHandler}>X</span>
    </li>;
}

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    handlerOnChange(event) {
        this.setState({
            inputValue: event.target.value,
        })
    }

    handleKeyPress(event) {
        if (this.state.inputValue === '') {
            return;
        }

        if (event.key === 'Enter') {
            this.props.handlerNewItem(this.state.inputValue);
            this.setState((state, props) => {
                return {
                    inputValue: '',
                }
            })
        }
    }

    render() {
        return (
            <div>
                <input
                    className={'form-control'}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onChange={this.handlerOnChange.bind(this)} value={this.state.inputValue}
                />
            </div>
        );
    }
}

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: defaultItems
        };
    }

    removeItem(removedItem) {
        let filteredItems = this.state.items.filter(function (item) {
            return item !== removedItem;
        });

        this.setState({
            items: filteredItems
        });
    }

    insertNewItem(item) {

        if (this.state.items.indexOf(item) !== -1) {
            console.log('zaten var');
            return;
        }

        this.setState((state, props) => {
            return {
                items: [...state.items, item]
            }
        });
    }

    render() {
        return (
            <div>
                <TodoInput handlerNewItem={this.insertNewItem.bind(this)}/>
                <ul className="list-group" style={{'marginTop': '10px'}}>
                    {
                        this.state.items.map(function (item, i) {
                            return <ListItem key={item} onClickHandler={this.removeItem.bind(this, item)} name={item}/>
                        }.bind(this))
                    }
                </ul>
            </div>
        );

    }
}

ReactDOM.render(
    <ListContainer/>,
    document.getElementById('root')
);
