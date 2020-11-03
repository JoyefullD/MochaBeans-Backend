var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://joyed:Tu6QgG7SPJZy8F4m@cluster0.dbmnz.mongodb.net/MochaBeans?retryWrites=true&w=majority', {useNewUrlParser: true});
//Tu6QgG7SPJZy8F4m
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are in!");
});

module.exports = app;
