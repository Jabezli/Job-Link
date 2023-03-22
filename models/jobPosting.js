const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobPosting extends Model{}


JobPosting.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true 
        },
        salary:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role_title:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        employer_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'Employer',
                key: 'id',
                unique: false
            }

        }
        
    },
    {
        sequelize,
        timestams: false,
        freezeTableName: true,
        underscored: true,
        modelName:'JobPosting'

    }
);

module.exports = JobPosting;

