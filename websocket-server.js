var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});

app.get('/', function (req, res, next) {
    console.log('get route', req.testing);
    res.end();
});

app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        ws.send(msg);
    });

    let counter = 0;
    let intervalCounter = setInterval(function () {
        if (counter >= 500) {
            clearInterval(intervalCounter);
            return;
        }
        ws.send(`counter: ${counter}`);
        counter++;
    }, 100);

    console.log('socket', req.testing);
});

app.listen(3001, () => console.log('Example webscoket app listening on port 3001!'));
