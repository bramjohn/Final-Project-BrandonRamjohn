"use strict";
const express = require("express");
const morgan = require("morgan");
// const app = express();

const {
  getAllPosts,
  getIndividualPost,
  createPost,
  deletePost,
} = require("./endpointHandlers");

const { createUser } = require("./handlers/users/createUser");
const { getUser } = require("./handlers/users/getUser");
const { updateUser } = require("./handlers/users/updateUser");

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

  // ADS ENDPOINTS
  // get all ads
  .get("/posts", getAllPosts)
  // get a specific item
  .get("/api/post-details/:id", getIndividualPost)
  .post("/api/create-post", createPost)
  .delete("/api/delete-post/:id", deletePost)

  // USERS ENDPOINTS
  .post("/user", createUser)
  .get("/user/:sub", getUser)
  .patch("/user/:sub", updateUser)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
