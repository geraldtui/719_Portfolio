// Allow us to use the Express framework
var express = require("express");

// Allow us to read files from the file system
var fs = require("fs");

// Setup a new Express app
var app = express();

// The app should listen on port 3000, unless a different
// port is specified in the environment.
app.set("port", process.env.PORT || 3001);

// Specify that the app should use handlebars, and set handlebars as the app's view engine.
var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main-layout" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  // res.render("week6/js4/ex05/animatedbook.html");

  res.render("home");
});

app.get("/week6-js4", (req, res) => {
  var data = {
    section: "Animated Book"
  };

  res.render("week6/js4/ex05/animatedbook", {
    layout: "animatedbook-layout"
  });
});

var html1_url = [];
var html1_files = [];

fs.readdirSync(__dirname + "/views/week1/html1/").forEach(file => {
  // We don't want dot files
  if (file.charAt(0) != ".") {
    html1_url.push(file);
    var j = {
      title: file
    };

    html1_files.push(j);
  }
});

console.log(html1_url[0]);

for (let i = 0; i < html1_url.length; i++) {
  app.get("/html1-" + html1_url[i], (req, res) => {
    var data = {
      files: html1_files, // File names to use for the navbar

      section: "HTML1: " + html1_url[i]
    };

    res.render("week1/html1/" + html1_url[i] + "/" + html1_url[i], data);
  });
}

// Allow the server to serve up files from the "public" folder.
app.use(express.static(__dirname + "/public"));

app.use(express.static(__dirname + "/views"));

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
