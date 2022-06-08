//MongoDB Setup

"use strict";

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

const getAllAds = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Project");
    const items = await db.collection("data").find().toArray();
    console.log(items, "This is backend items");
    items.length !== 0
      ? res.status(200).json({
          status: 200,
          data: items,
          message: "Successfully provided item data",
        })
      : res.status(400).json({
          status: 400,
          data: {},
          message: "No item data available",
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};

//Endpoint handler that GETs a specific item from the MongoDB server based on its _id

const getIndividualAd = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Project");
    const { id } = parseInt(req.params);
    // const itemId = Number(req.params.id);
    console.log(typeof id, "This is itemId");

    const data = await db
      .collection("data")
      .findOne({ _id: ObjectId(`${id}`) });

    console.log(data, "this is req item");
    data
      ? res.status(200).json({
          status: 200,
          data: data,
          message: "Successfully provided specific item data",
        })
      : res.status(400).json({
          status: 400,
          data: data,
          message: "Item data not found",
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};

//Endpoint handler that GETs all companies from the MongoDB server

// const getAllCompanies = async (req, res) => {};

//Endpoint handler that GETs a specific company from the MongoDB server based on its _id

// const getIndividualCompany = async (req, res) => {};

//Endpoint handler used in POST requests to purchase items.  The stock/cart quantites are validated on both the front and back end.  If the validation fails on the back end, a 400 response will be sent.  If the purchase is successful, the requested quantity of each item will be decremented from the respective item in MongoDB.

const createPost = async (req, res) => {};

module.exports = {
  getAllAds,
  getIndividualAd,
  // getAllCompanies,
  // getIndividualCompany,
  createPost,
};
