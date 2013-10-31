
/**
 * Module dependencies.
 */

var express = require('express')
  , utils = require('./utils')
  , passport = require('passport')
  , http = require('http')
  , path = require('path');

/**
* Database Connection
*/
var dbConex = exports.dbConex = utils.dbConnection("localhost","demo-test","","");

/**
* Express App
*/
var app = exports.app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(passport.initialize());
  app.use(passport.session())
app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/**
* Passport Auth Strategy
*/
require('./authpassport');


/**
* Routes
*/
require('./routes/main');
// Passport Auth Routes
require('./routes/auth');


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
