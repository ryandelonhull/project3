var db = require("../models");

// Routes For Game/Battle/Character Status
module.exports = function(app) {
    //need a route that deletes data

    app.get("/api/attacks/", function(req, res){
        console.log("chirp chrip chirp");
        db.Attack.findAll({}).then(function(attack){
            console.log(attack);
            res.json(attack);
        }).catch(err => {res.json(err)});
    });
//find the attacks during the battle
// app.get("/api/attack/:id", function(req, res){
//     db.Attack.findOne().then(function(attack){
//         res.json(attack);
//     }).catch(err => {res.json(err)});

// })

//     //starts the game --??
    app.post("/api/game/", function(req, res) {
        db.Game.create({
            // id:req.name.id,
            UserId: req.body.userId,
            username: req.body.username,
            computerCharacterId: req.body.computerCharacterId,
            email: req.body.email
        }).then(function(dbChar) {
            res.json(dbChar);
        });
    });
//update game status
    app.put("/api/game", function(req, res) {
        db.Game.update(req.body,
          {
            where: {
              id: req.body.id
            }
          })
          .then(function(dbGame) {
            res.json(dbGame);
          });
      });
// //whenever we need the game data, we go here
    app.get("/api/games/", function(req, res) {
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

//     //update the character status during the game play
//     app.put("/api/characterStatus/", function(req, res) {
//         db.CharacterStatus.update({
//             where: {
//                 userId: req.body.id
//               }
//             })
//             .then(function(dbGame) {
//               res.json(dbGame);
           

//             // userId: req.body.userId,
//             // userScore: req.body.userScore,
//             // computerScore: req.body.computerScore
//         }).catch(err => {res.json(err)});
//     })

// //for delete routes -if needed
//     // app.delete("/api/posts/:id", function(req, res) {
//     //     db.Post.destroy({
//     //       where: {
//     //         id: req.params.id
//     //       }
//     //     })
//     //       .then(function(dbPost) {
//     //         res.json(dbPost);
//     //       });
//     //   });

// //    // when user clicks the save button, saves the  data into the database
// //    app.post("/api/user/:id/", function(req, res) {
// //     db.Char.create({
// //         // id:req.name.id,
// //         name: req.body.name,
// //         attacks: req.body.attacks,
// //         hitpoints: req.body.hitpoints,
// //         image: req.body.image
// //     }).then(function(dbChar) {
// //         res.json(dbChar);
// //     });
// // });
}