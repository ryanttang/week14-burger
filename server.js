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

APP.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });