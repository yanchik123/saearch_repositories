module.exports.setup = function(app, controllers) {
    var express = require('express');
    var path    = require('path');

    //Static paths
    app.use('/img',         express.static(path.join(__dirname, '../build/img')));
    app.use('/js',          express.static(path.join(__dirname, '../build/js')));
    app.use('/css',         express.static(path.join(__dirname, '../build/css')));
    app.use('/fonts',       express.static(path.join(__dirname, '../build/fonts')));
    app.use('/templates',   express.static(path.join(__dirname, '../build/templates')));

    //Api
    app.get('/api/videos/:page', controllers.videos);

    //MainPage redirect
    app.all('/*', controllers.main);
};