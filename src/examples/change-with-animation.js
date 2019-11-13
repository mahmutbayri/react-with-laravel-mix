import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import Table from './ChangedWithAnimation/Table';

class ChangeWithAnimation extends Component {
    constructor(props) {
        super(props);
        let tableData = this.generateTableData();

        this.state = {
            tableData: tableData
        };
        this.intervalLimit = 300;
        this.previousGeneratedData = null;
        this.previousGeneratedDataChangeRate = 50; // between 100-100
        this.totalRow = 100;
    }

    componentDidMount() {
        let interVal = setInterval(function () {

            if (this.intervalLimit === 0) {
                clearInterval(interVal);
            }

            let tableData = this.generateTableData();
            this.setState((state, props) => {
                return {
                    tableData
                }
            });
            this.intervalLimit--;
        }.bind(this), 1000)
    }

    generateTableData(max = 4) {
        let tableData = [];
        for (let index = 0; index < this.totalRow; index++) {
            let newObj = {
                key: 'ticker: ' + index,
                a: this.previousGeneratedData ? (this.getRandomInt(1, 100) < this.previousGeneratedDataChangeRate ? this.previousGeneratedData[index].a :  this.getRandomInt(1, max)) : this.getRandomInt(1, max),
                b: this.previousGeneratedData ? (this.getRandomInt(1, 100) < this.previousGeneratedDataChangeRate ? this.previousGeneratedData[index].b :  this.getRandomInt(1, max)) : this.getRandomInt(1, max),
                c: this.previousGeneratedData ? (this.getRandomInt(1, 100) < this.previousGeneratedDataChangeRate ? this.previousGeneratedData[index].c :  this.getRandomInt(1, max)) : this.getRandomInt(1, max),
            };
            tableData.push(newObj);
        }

        this.previousGeneratedData = tableData;

        return tableData;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <Table tableData={this.state.tableData} changedClassName={'red'} />
        );
    }
}

ReactDOM.render(
    <ChangeWithAnimation/>,
    document.getElementById('root')
);

