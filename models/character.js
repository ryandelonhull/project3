// Id (1)
// Name (Mario)
// Img (www...
// Attacks:  
// Hit Points

// Character has many games

// Character has many attacks

// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
    
        // name cannot be null and should be unique
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validate: {
            //     isEmail: true
            // }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 30]
            }
        }
    });

