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
        //DO WE NEED AN ID--PROBABLY NOT
        // id: {
        //     //make it auto??
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false,
        //     unique: true,
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: false,
            unique: true,
            // validate: {
            //     isEmail: true
            // }
        },
    
        attacks: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [8, 30]
            // }
        },
    
        hitpoints: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 10]
            }
        }
    });
  

// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password


Character.associate = function(models) {
    Character.hasMany(models.Games, {
        // onDelete: "cascade"
    });
    Character.hasMany(models.Attacks, {
        // onDelete: "cascade"
    });
};
return CharacterStatus;
};
