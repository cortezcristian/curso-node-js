
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , sio = require('socket.io');

var app = express();

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
app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

var server = http.createServer(app).listen(app.get('port'), '0.0.0.0', function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = sio.listen(server);

var userList = [];

io.sockets.on("connection", function(socket){
    //Toda la logica
    console.log("se conecto un socket");

    socket.on("join", function(name){
        console.log("se deconecto un socket")
        socket.nick = name;
        userList.push(socket.nick);
    })

    socket.on("chatsend", function(msg){
        console.log(msg);
        io.sockets.emit("chat", socket.nick+": "+msg);
    })
    
    socket.on("getUserList", function(){
        socket.emit("reciveUserList", userList);
    })
    socket.on("disconnect", function(){
        console.log("se deconecto un socket")
    })
});














