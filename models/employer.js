const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employer extends Model {}


Employer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Companyname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Job_Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Salary_Range: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Office_Location: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Years_of_Experience: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        Description: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },

    {
        sequelize,
        timestams: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employer'

    }
);

module.exports = Employer;

