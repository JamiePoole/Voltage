const mongoose = require('mongoose');

// Todo: connect to the DB associated with the User account
let host = 'localhost';
let port = '27017';
let database = 'arAnalytics';
let options = {
    useNewUrlParser: true,
    useCreateIndex: true,
};

let connection = mongoose.connect(`mongodb://${host}:${port}/${database}`, options);

connection.then(function() {
    console.log(`Connected to MongoDB database '${database}' on ${host}:${port}.`);
})
.catch(function(error) {
    console.warn('Database connection error: ', error);
});

module.exports = connection;