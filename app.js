var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const rateLimit = require("express-rate-limit");

// const bodyParser = require('body-parser');
// comst cors = require('cors');

require('dotenv').config();

// hiding database information
const environment = process.env;
const MONGO_PASSWORD = environment.MONGO_PASSWORD;
const MONGO_USER = environment.MONGO_USER;

const MONGODB_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@vaccinedb.fplt4.mongodb.net/<dbname>?retryWrites=true&w=majority`; 

// connecting the database
mongoose.connect(MONGODB_URI || 'mongodb://localhost/Vaccine_Database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
})

// import routes 
var index = require('./routes/index');
var api = require('./routes/api');
var mongoRoute = require('./routes/mongo');

var app = express();

// limit to the number of api calls you can make
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Max number of requestions in windowMS
});;

app.use("/api/", apiLimiter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// create middlewares
app.use('/', index)
app.use('/api', api);
app.use('/mongo', mongoRoute);

// app.use(bodyParser.json());
// app.use(cors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;

