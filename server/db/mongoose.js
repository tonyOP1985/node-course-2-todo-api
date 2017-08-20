var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});
// mongoose.connect('mongodb://admin:admin@ds151163.mlab.com:51163/node-api-db', {useMongoClient: true});


module.exports = {mongoose};
