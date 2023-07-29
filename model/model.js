const mongoose = require("mongoose");

const villagerSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  gender: {
    required: true,
    type: String,
  },
  species: {
    required: true,
    type: String,
  },
  favoritesaying: {
    required: true,
    type: String,
  },
  personality: {
    required: true,
    type: String,
  },
  birthday: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Villagers", villagerSchema);
