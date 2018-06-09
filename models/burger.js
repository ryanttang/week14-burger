const ORM = require("../config/orm.js");

    // An object that is exported to burgers-controller,js
    //calling the functions from the orm.js file
    let burgerORM = {
          selectAll: function(response){
              ORM.selectAll(function(data){
                  response(data);
              });
          },
        insertOne: function(burger_name, response){
          ORM.insertOne(burger_name, function(data){
            response(data);
          });
        },
        updateOne: function(id, response){
          ORM.updateOne(id, function(data){
            response(data);
          });
        },
        deleteOne: function(id, response){
          ORM.deleteOne(id, function(data){
            response(data);
          });
        }
    };
    
    module.exports = burgerORM;