var express     = require('express');

var app = express();

app.use( express.static( __dirname + '/build' ) );

app.listen(8080, function(){
    console.log('Сервер запущен по адресу 127.0.0.1:8080');
});