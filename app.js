var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');
mongoose.connect(connectionString);
// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
  console.log('MongoDB connected successfully');
});
var indexRouter = require('./routes/index');
var festivalsRouter = require('./routes/festivals');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var usersRouter = require('./routes/users');
var resourceRouter = require('./routes/resource');
var Festival = require('./models/festival');
async function recreateDB() {
  await Festival.deleteMany({});

  let festival1 = new Festival({
    name: "Timket",
    location: "Gondar",
    date: "January 19"
  });

  let festival2 = new Festival({
    name: "Meskel",
    location: "Addis Ababa",
    date: "September 27"
  });

  let festival3 = new Festival({
    name: "Irreecha",
    location: "Bishoftu",
    date: "October"
  });

  await festival1.save();
  await festival2.save();
  await festival3.save();

  console.log("Three festival records saved successfully");
}

let reseed = true;

db.once('open', function () {
  if (reseed) {
    recreateDB().catch(console.error);
  }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/festivals', festivalsRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);
app.use('/users', usersRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
