'use strict';

const hostname = '127.0.0.1';
const port = 3333;
const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const app = express();
const server = createServer(app);

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');



server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});



app.use('/rangers', rangersController);