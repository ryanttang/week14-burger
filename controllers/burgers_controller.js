const EXPRESS = require("express");
const burgerORM = require("../models/burger.js");

// Create Routers and Export Them
const ROUTER = EXPRESS.Router();

// Select All Burgers from db and render
ROUTER.get("/", function(req, res) {
    burgerORM.selectAll(function(data) {
        res.render("index", {burger:data});
    });
});

// Post a New Burger to the DB
ROUTER.post("/", function(req, res) {
    burgerORM.insertOne(req.body.burger, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

// Update a burger's devoured status
ROUTER.put("/:id", function(req, res) {
    burgerORM.updateOne(req.params.id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

// Delete a burger from the database
ROUTER.delete("/:id", function(req, res) {
    burgerORM.deleteOne(req.params.id, function(result) {
        res.redirect("/");
    });
});

module.exports = ROUTER;