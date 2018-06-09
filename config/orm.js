const CONNECTION = require("./connection.js");

// Object of functions for db queries
let orm = {

    // Select all records from burgers table
    selectAll: function(response) {
        let queryString = "SELECT * FROM burgers";
        CONNECTION.query(queryString, function(err, data){
            if (err) throw err;
            response(data);
        });
    },
    
    // Insert into the burgers table with name and devoured status
    insertOne: function(burger, response) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        CONNECTION.query(queryString, [burger, false], function(err, data) {
            if (err) throw err;
            response(data);
        });
    },
    
    // Update devoured as true
    updateOne: function(id, response) {
        let queryString = "UPDATE burgers SET ? WHERE ?";
        CONNECTION.query(queryString, [{ devoured: true}, {id:id}], function(err, data) {
            if (err) throw err;
            response(data);
        });
    },

    // Delete record from burgers table 
    deleteOne: function(id, response) {
        let queryString = "DELETE FROM burgers WHERE ?";
        CONNECTION.query(queryString, [{ id:id }], function(err, data) {
            if (err) throw err;
            response(data);
        });
    }

};

module.exports = orm;