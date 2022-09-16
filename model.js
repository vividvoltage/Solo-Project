const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://test1:test2@cluster0.kekcfej.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Solo'
})
    .then(() => console.log('Connected to Mongo'))
    .catch((err) => console.log(err));


module.exports = ('Listing', listingSchema)