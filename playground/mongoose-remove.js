const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: "59989a4f5f9e522110b6f5a5"}).then((todo) => {
  console.log(todo);
});



// Todo.findByIdAndRemove()

// Todo.findByIdAndRemove('59989a4f5f9e522110b6f5a4').then((todo) => {
//   console.log(todo);
// });
