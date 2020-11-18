// Id
// gameId
// userId
// UserScore
// ComputerScore

// Game will have one CharacterStatus

// CharacterStatus
// Will belong to a game


module.exports = function(sequelize, DataTypes) {
    var CharacterStatus = sequelize.define("CharacterStatus", {
    
        // name cannot be null and should be unique
        //DO WE NEED AN ID--PROBABLY NOT
        // id: {
        //     //make it auto??
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true, 
        //     allowNull: false,
        //     unique: true,
        // },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            // validate: {
            //     isEmail: true
            // }
        },
    
        userScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // validate: {
            //     len: [8, 30]
            // }
        },
    
        computerScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [0, 10]
            }
        }
    });
  

// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password


CharacterStatus.associate = function(models) {
    CharacterStatus.belongsTo(models.Games, {
        // onDelete: "cascade"
    });
    Character.hasMany(models.Attacks, {
        // onDelete: "cascade"
    });
};
return Character;
};
