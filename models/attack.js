module.exports = function(sequelize, DataTypes) {
    var Attack = sequelize.define("Attack", {

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
        CharacterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    //post route
        // attackType: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // }
    });
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password

Attack.associate = function(models) {
    Attack.belongsTo(models.Characters, {
        // onDelete: "cascade"
    });
    //may beed another belongs to here for computer -probably not
};
return Attack;
};

