// Creating our Search model for grabbing information from our API which are name, text/body, url link and the rating
module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        attackOne: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        attackTwo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weaknesses: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        strongAgainst: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    Search.associate = function(models) {
        // We're saying that a Search should belong to a User
        // A search can't be created without a User due to the foreign key constraint
        Search.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Search;
};