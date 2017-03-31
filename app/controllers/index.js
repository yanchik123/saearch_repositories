module.exports.main = function(req, res){
    var path = require('path');
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
};

module.exports.videos = require('./videos');