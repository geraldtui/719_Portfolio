// This is a completely minimal Express / Handlebars application which sets everything up, and allows for "public" files to be served.

// Allow the use of Express and FS libraries
var express = require('express');
var fs = require('fs');

// Setup Express
var app = express();
app.set('port', process.env.PORT || 3000);

// Setup the Handlebars layout engine
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' })); // Be sure to change the default layout if required
app.set('view engine', 'handlebars');

// Allow for access to files in the ./public directory
app.use(express.static(__dirname + "/public"));

// Start the server running
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port'));
});
