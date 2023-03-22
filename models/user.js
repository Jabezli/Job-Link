const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}


User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true 
        },
        User_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        User_password:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
      
    },
    {
        sequelize,
        timestams: false,
        freezeTableName: true,
        underscored: true,
        modelName:'User'

    }
);

module.exports = User;

