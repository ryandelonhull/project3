// Id
// userId 1
// characterId 1
// ComputerCharacterId

// Game belongs to user

// Game has one character


module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
    
        // name cannot be null and should be unique
        //DO WE NEED AN ID--PROBABLY NOT
        // id: {
        //     //make it auto??
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false,
        //     unique: true,
        // },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
         
        },
        charId: {
            type: DataTypes.INTEGER,
            allowNull: false
           
            // validate: {
            //     isEmail: true
            // }
        },
    //post route
        computerCharacterId: {
            type: DataTypes.INTEGER,
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


Game.associate = function(models) {
    // Game.hasMany(models.CharacterStatus, {foreignKey: 'GameId'})

    Game.belongsTo(models.User, {
        // foreignKey: {
        //     allowNull: false
        // }
        // onDelete: "cascade"
    });

    Game.hasOne(models.CharacterStatus, {
        // onDelete: "cascade"
         foreignKey: 'GameId'
    });
};
return Game;
};
