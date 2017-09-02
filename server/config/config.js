var env = process.env.NODE_ENV || 'development';

if (env == "development" || env == "test") {
  var config = require("./config.json");
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}





// MONGODB_URI: mongodb://heroku_6g8qdkh0:a82u63krd3im2srcsvu921dslc@ds123124.mlab.com:23124/heroku_6g8qdkh0
