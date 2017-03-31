module.exports = function(req, res) {
    var http    = require('http');
    var cheerio = require("cheerio");

    var page = req.params.page;

    var options = {
        host: 'www.youporn.com',
        path: '/?page=' + page
    };

    var request = http.get(options, function(response) {
        var bodyPart = [];

        response.on('data', function(part) {

            bodyPart.push(part);

        }).on('end', function() {
            var body = String(Buffer.concat(bodyPart)).replace(/\n/g, '').replace(/<!.*?>/g, ''),
                $ = cheerio.load(body),
                data = [],
                selector = '.video-box';

            if (page == 1) selector = '*[data-section_name="day_by_day_section"] .video-box';

            $(selector).each(function(i, elem) {
                data.push({
                    id:         $('a.video-box-image', this).attr('href').split('/')[2],
                    title:      $('.video-box-title a', this).attr('title'),
                    duration:   $('.video-box-duration', this).text().slice(0, -1),
                    img:        $('.js_mg_flipbook', this).attr('src'),
                    url_name:   $('a.video-box-image', this).attr('href').split('/')[3]
                });
            });

            res.send(JSON.stringify(data));
        })
    });

    request.on('error', function(e) {
        res.send('Ошибка подключения');
    });
};