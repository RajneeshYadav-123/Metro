const mongoose = require("mongoose");

const temperatureSchema = new mongoose.Schema(
  {
    temperature: {
      type: Number,
      required: true,
    },

    humidity: {
      type: Number,
      required: true,
    },

    kelvin: {
      type: Number,
    },

    reaumur: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Temperature", temperatureSchema);