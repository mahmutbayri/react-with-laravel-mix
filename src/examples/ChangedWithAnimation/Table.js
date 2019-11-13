import React, {Component} from 'react';
import Row from "./Row";
import PropTypes from "prop-types";

class Table extends Component {
    render() {
        let {changedClassName} = this.props;
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ticker</th>
                    <th scope="col">a</th>
                    <th scope="col">b</th>
                    <th scope="col">c</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.tableData.map(function (item, index) {
                        return (
                            <Row changedClassName={changedClassName} key={item.key} item={item}/>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        c: PropTypes.number.isRequired,
    })).isRequired,
    changedClassName: PropTypes.string.isRequired,
};

export default Table;
