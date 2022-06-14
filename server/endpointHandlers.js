//MongoDB Setup

"use strict";

const { ObjectId } = require("mongodb");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//Endpoint handler that GETs all items from the MongoDB server

const getAllPosts = async (req, res) => {
  const filter = req.query.filter;

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Project");
    let array = await db.collection("data").find().toArray();
    let result;
    let filteredArray;
    if (filter === "reset") {
      result = await db.collection("data").find().toArray();
    } else {
      filteredArray = array.filter((item) => {
        return item.post.price > filter;
      });
    }

    result
      ? res.status(200).json({
          status: 200,
          data: result,
          message: "Successfully provided item data",
        })
      : res.status(200).json({
          status: 200,
          data: filteredArray,
          message: "Successfully provided item data",
        });

    client.close();
  } catch (err) {}
};

//Endpoint handler that GETs a specific item from the MongoDB server based on its _id

const getIndividualPost = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Project");

    const { id } = req.params;

    const requestedItem = await db
      .collection("data")
      .findOne({ _id: ObjectId(id) });

    requestedItem
      ? res.status(200).json({
          status: 200,
          data: requestedItem,
          message: "Successfully provided specific item data",
        })
      : res.status(400).json({
          status: 400,
          data: requestedItem,
          message: "Item data not found",
        });
    client.close();
  } catch (err) {}
};

const createPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Project");

  try {
    const result = await db.collection("data").insertOne(req.body);

    if (result.acknowledged) {
      res.status(201).json({ status: 201, data: result });
    } else {
      res.status(401).json({
        status: 401,
        message: "Unable to add reservation to database.",
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, message: "Server Error addReservation" });
  } finally {
    client.close();
  }
};

const deletePost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Project");

  const { id } = req.params;

  try {
    const result = await db.collection("data").deleteOne({ _id: ObjectId(id) });

    if (result.acknowledged) {
      res
        .status(200)
        .json({ status: 200, data: result, message: "Post Deleted" });
    } else {
      res.status(401).json({
        status: 401,
        message: "Unable To Delete",
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, message: "Server Error, Unable to Delete " });
  } finally {
    client.close();
  }
};

module.exports = {
  getAllPosts,
  getIndividualPost,
  createPost,
  deletePost,
};
