const ROUTES = require('./controllers/burgers_controller.js');
const EXPHBS = require('express-handlebars');
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const APP = EXPRESS();
const PORT = process.env.PORT || 8080;

APP.use(BODYPARSER.urlencoded({ extended: false}));
APP.use(BODYPARSER.json());
APP.use(EXPRESS.static('public'));

// APP.use("/", routes);

APP.engine('handlebars', EXPHBS({ defaultLayout: 'main' }));
APP.set('view engine', 'handlebars');

//set body-parser
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.text());
APP.use(BODYPARSER.json({ type: "APPlication/vnd.api+json" }));

//serve static content from the public directory
APP.use(EXPRESS.static(__dirname + "/public"));

//require burgers-controller,js for the routes
const ROUTES = require("./controllers/burgers-controller.js");

APP.use("/", ROUTES);
APP.use("/:id", ROUTES);

//Initiate the listener
APP.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});