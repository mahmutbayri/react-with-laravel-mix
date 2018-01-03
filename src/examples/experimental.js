import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'fdsfdsf',
];


function ListItem(props) {
    return <li onClick={props.onClickHandler}>{props.name}</li>;
}

function TodoInput() {

    function handleKeyPress(event) {
        console.log(event.key);
    }

    return (
    <div>
        <input onKeyPress={handleKeyPress} />
    </div>
    );
}

class ListContainer extends Component{

    constructor()
    {
        super();
        this.state = {
            items: items
        };
    }

    removeItem(removedItem)
    {
        let filteredItems = this.state.items.filter(function (item) {
            return item !== removedItem;
        });

        this.setState({
            items: filteredItems
        });
    }

    render()
    {
        // let itemList = [];
        // this.state.items.forEach(function (item, i) {
        //     itemList.push(<ListItem key={item} onClickHandler={this.removeItem.bind(this, item)} name={item}/>);
        // }.bind(this));
        //
        // return itemList;

        return this.state.items.map(function (item, i) {
            return <ListItem key={item} onClickHandler={this.removeItem.bind(this, item)} name={item}/>;
        }.bind(this));
    }
}

function handleKeyPress() {
    console.log("dfsdfsfs");
}

ReactDOM.render(
    <div>
        <TodoInput />
        <ListContainer/>
    </div>,
    document.getElementById('root')
);