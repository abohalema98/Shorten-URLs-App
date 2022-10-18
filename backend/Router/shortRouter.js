require("dotenv").config();
const express = require("express");
const shortRouter = express.Router();
const fetch = require("node-fetch");

const apiKey = process.env.Api_key;
const apiUrl = process.env.Api_Url;

shortRouter
  .route("/short")

  .post(async (req, res) => {
    let Url = await req.body.Url;

    let response = await fetch(apiUrl + apiKey + Url);
    const data = await response.json();

    res.send(data.url);
  });

module.exports = shortRouter;
