require("dotenv").config({ debug: true });

const uri = `mongodb+srv://wendi:${process.env.PASSWORD}@cluster0.yzvla.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

//main middleware
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const pusher = require("pusher");
const app = express();
const router = require("./router");

//port
const port = process.env.PORT || 8000;

//initialization middleware
app.use(
  cors({
    origin: "*",
    method: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//pusher and mongodb connection

const Pusher = new pusher({
  appId: "1412183",
  key: "bb9d446545d1687ef1b8",
  secret: "c6f7d5066353bb8352e9",
  cluster: "ap1",
  useTLS: true,
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("db is connected now");

  const chatCollection = db.collection("chats");
  const changeStream = chatCollection.watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const fullDoc = change.fullDocument;
      Pusher.trigger("chat", "inserted", {
        name: fullDoc.name,
        message: fullDoc.message,

      });

    } else {
      console.log("error triggering pusher");
    }
  });
});

//route-setting
app.use(router);

app.listen(port, () => console.log(`run on port : ${port}`));
