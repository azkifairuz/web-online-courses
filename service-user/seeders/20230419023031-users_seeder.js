"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          profession: "Mobile Developer",
          role: "admin",
          email: "john@gmail.com",
          password: await bcrypt.hash("123",10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Azkia Ajmal Fairuz",
          profession: "Front End Developer",
          role: "student",
          email: "azkiajmal@gmail.com",
          password: await bcrypt.hash("321",10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
