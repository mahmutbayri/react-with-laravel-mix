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
            items: []
        };

        this.handleSortBy = this.handleSortBy.bind(this);
    }

    componentDidMount() {
        fetch("/sample-article-data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
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

    handleSortBy(field) {

        let currentOrderDirection = 'desc';

        if (this.state.currentOrderField === field) {
            currentOrderDirection = this.state.currentOrderDirection === 'desc' ? 'asc' : 'desc';
        }

        this.setState(function (state, props) {
            return {
                currentOrderField: field,
                currentOrderDirection: currentOrderDirection,
                items: _.orderBy(state.items, field, currentOrderDirection)
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
