const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class JobPosting extends Model {}

JobPosting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Companyname: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
  },

  {
    sequelize,
    timestams: false,
    freezeTableName: true,
    underscored: true,
    modelName: "JobPosting",
  }
);

module.exports = JobPosting;
