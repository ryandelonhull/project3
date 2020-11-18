// var passport = require("../config/passport");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // when user clicks the save button, saves the search data into the database
    app.post("/api/user/:id/search", function(req, res) {
        db.Search.create({
            // id:req.name.id,
            name: req.body.name,
            attackOne: req.body.attackOne,
            attackTwo: req.body.attackTwo,
            strongAgainst: req.body.strongAgainst,
            weaknesses: req.body.weaknesses,
            image: req.body.image
        }).then(function(dbSearch) {
            res.json(dbSearch);
        });
    });
    //END OF MODULES, DELETE AND SOMEONE MIGHT CRY!!!
}