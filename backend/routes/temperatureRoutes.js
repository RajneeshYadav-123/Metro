const express = require("express");

const router = express.Router();

const Temperature = require("../models/Temperature");


// POST Request
router.post("/", async (req, res) => {
  try {

    const { temperature, humidity } = req.body;

    const kelvin = temperature + 273.15;
    const reaumur = temperature * 0.8;

    const newData = new Temperature({
      temperature,
      humidity,
      kelvin,
      reaumur,
    });

    await newData.save();

    res.status(201).json({
      success: true,
      message: "Data Saved Successfully",
      data: newData,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


router.get("/", async (req, res) => {
  try {

    const data = await Temperature.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;