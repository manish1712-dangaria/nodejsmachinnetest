var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();


var productRouter = require('./routes/product');
var CategoryRouter = require('./routes/category');

var app = express();
const port = 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/product', productRouter);
app.use('/category', CategoryRouter);



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

// Database Connection
var models= require('./models');

models.sequelize.sync().then(()=>{
  console.log("Database looks great!");
}).catch((err)=>{
  console.log(err);
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}/`) 
  });

module.exports = app;

