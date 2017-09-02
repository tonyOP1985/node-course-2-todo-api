var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}
else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}


// MONGODB_URI: mongodb://heroku_6g8qdkh0:a82u63krd3im2srcsvu921dslc@ds123124.mlab.com:23124/heroku_6g8qdkh0
