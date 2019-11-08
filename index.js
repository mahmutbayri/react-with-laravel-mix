const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('public'));


app.listen(3000, () => console.log('Example app listening on port 3000!'));
