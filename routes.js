const express = require("express");
const router = express.Router();
const db = require("./models");

router.post("/api/createNew", function(req, res) {
  console.log("Creating new character");

  db.FFighter.newFighter(
    new db.createnew({
      name: req.body.CharName,
      image: req.body.img,
      stats: {
        health: req.body.health,
        attack: req.body.attack,
        defence: req.body.defence,
        evasion: req.body.evasion,
        speed: req.body.speed
      }
    }),
    function(err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
    }
  );
});
