import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TableGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: 4,
            col: 5
        };
    }

    updateTable(options) {
        console.log(options);
        this.setState((prevState, props) => {
            return options;
        })
    }

    render() {

        let datem = (new Date()).toString();

        return <div className="container">
            <div className="card mb-3">
                <div className="card-body">
                    {datem}
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <Form passedVal={this.state} onUpdate={this.updateTable.bind(this)}/>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <TableGeneratorWithJsx passedVal={this.state}/>
                </div>
            </div>
        </div>
    }
}

class TableGeneratorWithJsx extends Component {

    render() {
        // let rowCount = this.state.rowCount;
        // let colCount = this.state.colCount;

        let rowCount = this.props.passedVal.row;
        let colCount = this.props.passedVal.col;

        console.log(this.props, "TableGeneratorWithJsx");

        let headCols = [];

        let bodyRows = [];
        let bodyCols = [];

        for (let i = 1; i <= rowCount; i++) {
            for (let j = 1; j <= colCount; j++) {
                bodyCols.push(<td key={i + '-' + j}>Cell {i * j}</td>);
                if (i === 1) {
                    headCols.push(<th key={i + '-' + j}>Title {j}</th>)
                }
            }
            bodyRows.push(<tr key={i}>{bodyCols}</tr>);
            bodyCols = [];
        }
        return <table className="table table-striped">
            <thead>
            <tr>{headCols}</tr>
            </thead>
            <tbody>
            {bodyRows}
            </tbody>
        </table>
    }
}

class Form extends Component {
    handleSubmit(event) {
        event.preventDefault();

        this.props.onUpdate({
            col: this.colInput.value,
            row: this.rowInput.value
        })
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label>Columns</label>
                <input className="form-control" defaultValue={this.props.passedVal.col} ref={input => this.colInput = input}/>
            </div>
            <div className="form-group">
                <label>Rows</label>
                <input className="form-control" defaultValue={this.props.passedVal.row} ref={input => this.rowInput = input}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    }
}

ReactDOM.render(
    <TableGenerator/>,
    document.getElementById('root')
);

// setInterval(tick, 1000);
