const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newFighter = new Schema({
  name: String,
  image: String,
  stats: {
    health: 100,
    attack: Number,
    defense: Number,
    evasion: Number,
    speed: Number
  },
  created: { type: Date, required: true, default: Date.now() }
});

module.exports = mongoose.model("createnew", newFighter);
