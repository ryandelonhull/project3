var db = require("../models");

// Routes For Character saving/viewing
module.exports = function(app) {
    //needs a route that deletes data

    // this route grabs the data for all characters
    app.get("/api/characters/", function(req, res) {
        db.Characters.findAll().then(function(characterData) {
            res.send(characterData);
        }).catch(err => {res.json(err)});
    });
    //I think this will work for getting a character for battle -unsure will need to be tested
    app.get("/api/user/characters/", function(req, res) {
        db.Characters.findOne().then(function(characterData) {
            res.json(characterData);
        }).catch(err => {res.json(err)});
    });

   // when user clicks the save button, saves the  data into the database
   // I am unsure if this will work - maybe needs to be tested first
   app.post("/api/user/:id/", function(req, res) {
    db.Char.create({
        // id:req.name.id,
        name: req.body.name,
        attacks: req.body.attacks,
        hitpoints: req.body.hitpoints,
        image: req.body.image
    }).then(function(dbChar) {
        res.json(dbChar);
    });
});

   
    //END OF MODULES, DELETE AND SOMEONE MIGHT CRY!!!
}