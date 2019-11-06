let fs = require('fs')
let express = require('express');
let app = express();
let expressWs = require('express-ws')(app);

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});

app.get('/', function (req, res, next) {
    console.log('get route', req.testing);
    res.end();
});

let rawData = fs.readFileSync('src/examples/websocket-example-data.json');
let exampleData = JSON.parse(rawData);

app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        ws.send(JSON.stringify(exampleData.firstData));
    });

    let updatedData = exampleData.others;

    let counter = 0;
    let intervalCounter = setInterval(function () {
        if (typeof (updatedData[counter]) === "undefined") {
            clearInterval(intervalCounter);
            return;
        }
        ws.send(JSON.stringify(updatedData[counter]));
        counter++;
    }, 1000);

    console.log('socket', req.testing);
});

app.listen(3001, () => console.log('Example webscoket app listening on port 3001!'));
