var db = require("../models");

// Routes For Game/Battle/Character Status
module.exports = function(app) {
    //need a route that deletes data

    app.get("/api/attack/", function(req, res){
        db.Attack.findAll().then(function(attack){
            res.json(attack);
        }).catch(err => {res.json(err)});
    });

app.get("/api/attack/:id", function(req, res){
    db.Attack.findOne().then(function(attack){
        res.json(attack);
    }).catch(err => {res.json(err)});

})

    //starts the game --??
    app.post("/api/game/", function(req, res) {
        db.Game.create({
            // id:req.name.id,
            userId: req.body.userId,
            charId: req.body.charId,
            computerCharacterId: req.body.computerCharacterId,
            hitpoints: req.body.hitpoints
        }).then(function(dbChar) {
            res.json(dbChar);
        });
    });

//whenever we need the game data, we go here
    app.get("/api/game/", function(req, res) {
        db.Game.findAll().then(function(gameData) {
            res.json(gameData);
        }).catch(err => {res.json(err)});
    });

    // this route grabs the data for all the character status
    app.get("/api/characterStatus/:id", function(req, res) {
        db.CharacterStatus.findAll().then(function(characterData) {
            res.json(characterData);
        }).catch(err => {res.json(err)});
    });

    //update the character status during the game play
    app.post("/api/characterStatus/", function(req, res) {
        db.CharacterStatus.update({
            userId: req.body.userId,
            userScore: req.body.userScore,
            computerScore: req.body.computerScore
        }).catch(err => {res.json(err)});
    });

   // when user clicks the save button, saves the  data into the database
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
}