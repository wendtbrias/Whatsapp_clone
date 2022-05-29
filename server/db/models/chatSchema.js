const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
  message: String,
  name: String,
  timestamp: {
    type: Date,
    default: new Date(),
  },
  recieved: Boolean,
});

const chatModel = mongoose.model("chat", chatSchema);

module.exports = chatModel;
