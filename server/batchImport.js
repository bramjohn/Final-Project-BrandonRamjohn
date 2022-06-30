const { MongoClient } = require("mongodb");

const users = require("./data/users.json");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Project");
    await db.collection("data").insertMany(users);
    res.status(200).json({ status: 200, message: "successful" });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "error not working",
    });
  } finally {
    client.close();
  }
};

batchImport();

