"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Post.associate = function(models) {
    models.Post.belongsTo(models.Guild, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Post.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Post.hasMany(models.Comment, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
};
