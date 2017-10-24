var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
var dotenv = require('dotenv').config();

// define express application and middleware
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Must access routes after they've been parsed
 * Order of middleware is important
 */
app.use('/api', api);

// Single Page Application
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

/*
 * mongoose
 * http://mongoosejs.com/index.html
 */
var uri = process.env.DB_HOST;
var options = {
  useMongoClient: true
}
mongoose.connect(uri, options, function (err) {
  if (err) {
    console.log("Not connected to the database: " + err);
  } else {
    console.log("Successfully connected to MongoDB");
  }
});


module.exports = app;
