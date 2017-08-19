var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds149433.mlab.com:49433/todo-app-node-api', {useMongoClient: true});


module.exports = {
  mongoose
};
