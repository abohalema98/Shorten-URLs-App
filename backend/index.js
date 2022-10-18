const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const app = express();
const shortRouter = require("./Router/shortRouter");
require("dotenv").config();

// CORS-enabled
app.use(cors());

//Body Parser middleware
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/cut", (req, res) => {
  res.send("Api Is Runinig");
});

app.use("/api", shortRouter);

app.use((error, req, res) => {
  res.send(error.message + "");
});

const PORT = process.env.PORT || 8085;

app.listen(PORT, (req, res) => {
  console.log(`app is run on port ${PORT}`);
});
