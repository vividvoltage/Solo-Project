const axios = require('axios');

const soloController = {};

soloController.get = (req, res, next) => {
    console.log('fetching');
    axios.get('https://www.reddit.com/r/hardwareswap/new.json')
    // .then((data) => data.json())
    .then((result) => {
        res.locals.data = result.data.data.children;
        // res.json(data);
        next();
    })
    .catch((err) => next(err.response.status));
};



    module.exports = soloController;