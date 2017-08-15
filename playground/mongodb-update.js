// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('599220b8ab865cac22ef74e4')
  // }, {
  //   $set: { //update operator
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59920d61b5821e26fc644de0')
  }, {
    $set: {  //all update operators go in single object(object of objects)
      name: 'Lucy'
    },
      $inc: {
        age: 1
      }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.collection('Users').findOneAndUpdate({
  //    _id: new ObjectID('59920d61b5821e26fc644de0')
  // }, {
  //   $inc: {age: 1}
  // });



  // db.close();
});
