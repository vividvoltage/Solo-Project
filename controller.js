const axios = require('axios');

const soloController = {};

soloController.get = (req, res, next) => {
    console.log(req.query);
    // https://www.reddit.com/r/hardwareswap/search/?q=ipad&restrict_sr=1&sr_nsfw=&sort=new
    axios.get(`https://www.reddit.com/r/hardwareswap/search.json?q=${req.query.value}&restrict_sr=on&sort=relevance&t=all&limit=100`)
    // axios.get(`'https://www.reddit.com/r/hardwareswap/new.json'`)
    // .then((data) => data.json())
    .then((result) => {
        res.locals.data = result.data.data.children;
        // res.json(data);
        next();
    })
    .catch((err) => next(err.response.status));
};



    module.exports = soloController;