const express = require("express");

const router = express.Router();

const Model = require("../model/model");

router.get("/villagers", async (req, res) => {
  try {
    const data = await Model.find().select("name image");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/villager/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
