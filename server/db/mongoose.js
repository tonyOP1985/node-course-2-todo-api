var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect((process.env.MONGODB_URI, {useMongoClient: true}) || ('mongodb://localhost:27017/TodoApp', {useMongoClient: true}));
// mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});



module.exports = {mongoose};
