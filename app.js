// Allow us to use the Express framework
var express = require("express");

// Allow us to read files from the file system
var fs = require("fs");

// Setup a new Express app
var app = express();

// The app should listen on port 3000, unless a different
// port is specified in the environment.
app.set("port", process.env.PORT || 3000);

// Specify that the app should use handlebars, and set handlebars as the app's view engine.
var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main-layout" }));
app.set("view engine", "handlebars");

// Specify that when we browse to "/about", render about.handlebars.
app.get("/html1", function(req, res) {
  var files = [];

  fs.readdirSync(__dirname + "/views/week1/html1/").forEach(file => {
    // We don't want dot files
    if (file.charAt(0) != ".") {
      var j = {
        title: file
      };

      files.push(j);
    }
  });

  console.log(files);

  var data = {
    files: files // File names to use for the navbar
  };

  res.render("week1/html1/ex1/exercise01", data);
});

// Specify that when we browse to "/contact", render contact.handlebars.
app.get("/contact", function(req, res) {
  // Data to send through to the "contact" page
  var data = {
    contact: true,
    name: "Thomas the T-Rex",
    phoneNumbers: ["+00 0 123 4567", "+64 21 000 0000", "+99 99 999 9999"],
    email: "thomasTheTRex@notexist.biz",
    website: "https://www.google.co.nz/"
  };

  // Pass the data as the second argument to send stuff through.
  res.render("contact", data);
});

// Specify that when we browse to "/", render home.handlebars
app.get("/", function(req, res) {
  fs.readFile(__dirname + "/articles.json", function(err, data) {
    // Parse the data in the file as JSON.
    var articles = JSON.parse(data);

    console.log(articles[0]);
    console.log(articles[1]);
    console.log(data);

    var data = {
      home: true,
      articles: articles
    };

    // Render home.handlebars, passing in the articles as so.
    res.render("home", data);
  });
});

// Allow the server to serve up files from the "public" folder.
app.use(express.static(__dirname + "/public"));

// If no other handlers worked, display a 404 page.
app.use(function(req, res) {
  res.type("text/html");
  res.status(404);
  res.sendFile(__dirname + "/public/error-page.html");
});

// Start the server running.
app.listen(app.get("port"), function() {
  console.log("Express started on http://localhost:" + app.get("port"));
});
