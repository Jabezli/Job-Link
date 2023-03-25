const { User } = require("../models");

const userData = [
  {
    firstName: "jun",
    lastName: "park",
    username: "hello_world",
    password: "password123",
    phone_number: "123456789",
    email: "email@email.com",
  },
  {
    firstName: "wenbing",
    lastName: "li",
    username: "hello_world2",
    password: "password1234",
    phone_number: "123456789",
    email: "email@email.com",
  },
  {
    firstName: "junnnnn",
    lastName: "parkkkk",
    username: "hello_world333",
    password: "password12345",
    phone_number: "123456789",
    email: "email@email.com",
  },
];

const seedUserData = () => {
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

seedUserData();

console.log(userData);
module.exports = seedUserData;
