"use strict";

const { Review } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Review.bulkCreate(
      [
        {
          spotId: 1,
          userId: 3,
          review: "Great place! Close to Disneyland!",
          stars: 5,
        },
        {
          spotId: 2,
          userId: 3,
          review: "Wasn't clean. Too far from the city",
          stars: 2,
        },
        {
          spotId: 3,
          userId: 2,
          review:
            "This place was great. Much better than the house I have in Vegas",
          stars: 5,
        },
        {
          spotId: 4,
          userId: 4,
          review: "Not as close as advertised in the listing",
          stars: 3,
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        stars: {
          [Op.in]: [1, 2, 3, 4, 5],
        },
      },
      {}
    );
  },
};
