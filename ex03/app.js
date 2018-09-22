var express = require('express');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 3000);

var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + "/public"));

app.get('/about', function (req, res) {

    var hobbies = ["Sleeping", "Reading", "Procrastinating"] ; 
    var ranNum =  parseInt((Math.random() * hobbies.length)) ;

    var data = {
        hobby: hobbies[ranNum],
        hobbies: []
    };

    res.render('about', data);
});

app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port'));
});


