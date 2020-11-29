// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
const bodyParser = require("body-parser");
const cors = require("cors");

// Setting up port and requiring models for syncing

var PORT = process.env.PORT || 8080;
var db = require("./models"); 


// Creating express app and configuring middleware needed for authentication
var app = express();
var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes

require("./routes/battle-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/character-routes.js")(app);
require("./routes/profile-api-routes.js")(app);
require("./routes/character-routes.js")(app);



app.get("api/characters", (req,res) => res.send());
// Syncing our database and logging a message to the user upon success
// listens to the PORT
db.sequelize.sync({force:false}).then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});