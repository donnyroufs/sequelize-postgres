"use strict";
module.exports = (sequelize, DataTypes) => {
  const Guild = sequelize.define(
    "Guild",
    {
      name: DataTypes.STRING,
      avatar: DataTypes.STRING
    },
    {}
  );
  Guild.associate = function(models) {
    models.Guild.hasMany(models.Post, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Guild;
};
