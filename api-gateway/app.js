require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var memberRouter = require('./routes/member');
var mediaRouter = require('./routes/media');
var coursesRouter = require('./routes/courses');
var ordersRouter = require('./routes/orders');
var paymentRouter = require('./routes/payment');

var app = express();

app.use(logger('dev'));
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ extended: false,limit:"50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/media', mediaRouter);
app.use('/payment', paymentRouter);
app.use('/orders', ordersRouter);
app.use('/courses', coursesRouter);
app.use('/member', memberRouter);

module.exports = app;
