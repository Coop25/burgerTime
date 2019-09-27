module.exports = function (sequelize, DataTypes) {
    let Burgers = sequelize.define("Burgers", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return Burgers;
};