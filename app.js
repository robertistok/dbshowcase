const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if(process.NODE_ENV !== 'test') {
  mongoose
    .connect('mongodb://localhost/universocial')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err))
}

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

routes(app);

module.exports = app;
