const EXPHBS = require('express-handlebars');
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const APP = EXPRESS();
const methodOverride = require("method-override");
const PORT = process.env.PORT || 8080;

APP.use(BODYPARSER.urlencoded({ extended: false}));
APP.use(BODYPARSER.json());
APP.use(EXPRESS.static('public'));

// Use method override for forum PUT and DELETE queries
APP.use(methodOverride("_method"));
APP.engine('handlebars', EXPHBS({ defaultLayout: 'main' }));
APP.set('view engine', 'handlebars');

// Set body-parser
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.text());
APP.use(BODYPARSER.json({ type: "APPlication/vnd.api+json" }));

// Serve static content from the public directory
APP.use(EXPRESS.static(__dirname + "/public"));

// Require burgers-controller,js for the routes
const ROUTES = require("./controllers/burgers_controller.js");

APP.use("/", ROUTES);
APP.use("/:id", ROUTES);
 
// Initiate the listener
APP.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});