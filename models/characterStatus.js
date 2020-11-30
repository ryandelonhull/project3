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
    CharacterStatus.belongsTo(models.Game, {foreignKey: 'GameId' 
        // onDelete: "cascade"
    });
    // CharacterStatus.hasMany(models.Attack, {
    //     // onDelete: "cascade"
    // });
};
return CharacterStatus;
};
