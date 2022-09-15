const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const PORT = 3000;

//dependencies above

//at the moment debating if I need a controller or if I can do everything from a single server page
const soloController = require('./controller')

//dependency for webpack to compile backend
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

//body parser boilerplate
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', (req, res, next) => {
    console.log(req.method);
    next();
})

//attempt first http request to reddit here
app.get('/get?', soloController.get, (req, res, next) => {
    console.log('made it back to server');
res.status(200).json(res.locals.data);
})


//404 handler
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
})


// generic global error handler boilerplate
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


  //opens server on port listed
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})

module.exports = app;
