const Connection = require("./connection.js");

// Object of functions for db queries
let ORM = {

    // Select all records from burgers table
    selectAll: function(response) {
        let queryString = "SELECT * FROM burgers";
        Connection.query(queryString, function(err, data){
            if (err) throw err;
            response(data);
        });
    },
    
    // Insert into the burgers table with name and devoured status
    insertOne: function(burger, response) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        Connection.query(queryString, [burger, false], function(err, data) {
            if (err) throw err;
            response(data);
        });
    },
    
    // Update devoured as true
    updateOne: function(id, response) {
        let queryString = "UPDATE burgers SET ? WHERE ?";
        Connection.query(queryString, [{ devoured: true}, {id:id}], function(err, data) {
            if (err) throw err;
            response(data);
        });
    },

    // Delete record from burgers table 
    deleteOne: function(id, response) {
        let queryString = "DELETE FROM burgers WHERE ?";
        Connection.query(queryString, [{ id:id }], function(err, data) {
            if (err) throw err;
            response(data);
        });
    }

};

module.exports = ORM;