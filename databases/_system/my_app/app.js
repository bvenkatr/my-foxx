(function() {
    "use strict";

    var Foxx = require("org/arangodb/foxx"),
        controller = new Foxx.Controller(applicationContext)

    controller.get("/computations", function(req, res) {
	var db = require("org/arangodb").db;
	var c = db.Friends.toArray(); 
	res.json(c); 
    }); 

}());
