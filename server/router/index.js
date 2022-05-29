const express = require("express");
const router = express.Router();

const chatModel = require("../db/models/chatSchema");

router
  .route("/")
  .get(async function (req, res) {
    try {
      const chatFind = await chatModel.find();
      res.status(200).json({ message: chatFind });
    } catch (err) {
      console.log(err);
    }
  })
  .post(async function (req, res) {
    const initSave = new chatModel(req.body);
    console.log(initSave);
    try {
      initSave.save().then(async () => {
        const chatFind = await chatModel.find();
        res.status(200).json({ message: chatFind });
      });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  });

module.exports = router;
