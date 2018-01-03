import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function TableGeneratorWithString() {
    let generateTable = function (row = 4, col = 4) {
        let td = '',
            tr = '';
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (j === 0) {
                    td += '<th>Row: ' + i + '</th>';
                }
                td += '<td>Hücre ' + (new Date()).toISOString() + j + '</td>'
            }
            tr += '<tr>' + td + '</tr>';
            td = '';
        }
        return '<table border="1">' + tr + '</table>';
    };
    return <div dangerouslySetInnerHTML={{__html: generateTable(2, 2)}}></div>;
}

class TableGeneratorWithJsx extends Component {
    render() {
        let datem = (new Date()).toString();
        return <table>
            <caption>TableGeneratorWithJsx</caption>
            <tbody>
            <tr>
                <td>{datem}</td>
            </tr>
            </tbody>
        </table>;
    }
}

function tick() {
    ReactDOM.render(
        <div>
            <TableGeneratorWithJsx/>
            <hr/>
        </div>,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
