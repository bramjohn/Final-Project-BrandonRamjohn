"use strict";
const express = require("express");
const morgan = require("morgan");
// const app = express();

const {
  getAllAds,
  getIndividualAd,
  // getAllCompanies,
  // getIndividualCompany,
  createPost,
} = require("./endpointHandlers");

const PORT = 8000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // get all ads
  .get("/ads", getAllAds)
  // get a specific item
  .get("/ad/:id", getIndividualAd)

  .post("/create-post", createPost)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
