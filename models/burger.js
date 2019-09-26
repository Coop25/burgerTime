module.exports = function (sequelize, DataTypes) {
    const Burgers = sequelize.define("burgers", {
        //could not remember if the id was automatic so i just did it manually LOL
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return Burgers;
};