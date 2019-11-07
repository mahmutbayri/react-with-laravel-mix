import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            currentOrderDirection: null,
            currentOrderField: null,
            items: [],
            allItems: []
        };

        this.handleSortBy = this.handleSortBy.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        fetch("/sample-article-data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        allItems: result.posts,
                        items: result.posts
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleFilter(field, value) {
        this.setState(function (state, props) {
            return {
                items: _.filter(state.allItems, function (item) {
                    return String(item[field]).toLowerCase().search(value) !== -1;
                })
            }
        });
    }

    handleSortBy(field) {
        let currentOrderDirection = 'desc';
        if (this.state.currentOrderField === field) {
            currentOrderDirection = this.state.currentOrderDirection === 'desc' ? 'asc' : 'desc';
        }
        this.setState(function (state, props) {
            return {
                currentOrderField: field,
                currentOrderDirection: currentOrderDirection,
                items: _.orderBy(state.allItems, field, currentOrderDirection)
            }
        });
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <table className="table table-striped">
                <thead className="thead-dark">
                <tr>
                    <th scope="col" onClick={() => this.handleSortBy('id')}>#</th>
                    <th scope="col" onClick={() => this.handleSortBy('title')}>title</th>
                    <th scope="col" onClick={() => this.handleSortBy('body')}>body</th>
                </tr>
                <tr>
                    <td style={{minWidth: 100}}><input className={'form-control'} onChange={(event) => this.handleFilter('id', event.target.value)}/></td>
                    <td><input className={'form-control'} onChange={(event) => this.handleFilter('title', event.target.value)}/></td>
                    <td><input className={'form-control'} onChange={(event) => this.handleFilter('body', event.target.value)}/></td>
                </tr>

                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(
    <PostList/>,
    document.getElementById('root')
);
