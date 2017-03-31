var express     = require('express');
var bodyParser  = require('body-parser');
var routes      = require('./app/routes');
var controllers = require('./app/controllers');

var app = express();

routes.setup(app, controllers);

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/build' ) );

app.listen(8080, function(){
    console.log('Сервер запущен по адресу 127.0.0.1:8080');
});