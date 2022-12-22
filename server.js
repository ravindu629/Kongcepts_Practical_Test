const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
const uri =
  "mongodb+srv://admin-ravindu:IT19208022@cluster0.n8e35.mongodb.net/MOVIE_DB?retryWrites=true&w=majority";

mongoose.connect(uri);
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

//import routes
app.use("/api/events", require("./routes/Event.route"));

app.get("/", (req, res) => {
  res.send("Api running");
});

app.listen(port, () => {
  console.log("Server is starting on port " + port);
});
