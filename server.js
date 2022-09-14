const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const PORT = 3000;

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);


app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.use('/', (req, res, next) =>{
    console.log(req.method);
})




app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})

module.exports = app;
