const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var newSchema = new Schema({
  name: String,
  image: String,
  stats:{
    health: Number,
    attack: Number,
    defense: Number,
    evasion: Number,
    speed: Number,

    }
});

var newChar = mongoose.model("newChar", newSchema);

module.exports = newChar;