// Import dependancies
const express = require("express");
const cors = require("cors");
// Keywords import
const keywords = "./keywords.js";
// Set up server configuration
const app = express();
// app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// Main function
const Main = require("./index");
//environment variable
require("dotenv").config();

// Iniatial Endpoint
app.get("/", (req, res) => {
  res.send("This is working");
});

// risk rating end point
app.post("/riskratings", (req, res) => {
  try {
    // await Main(keywords, req.body.risk);
    res.status(200).json({ riskrating: Main(keywords, req.body.risk) });
    // riskscore = 0; //reset to 0 on every call
  } catch (err) {
    res.status(400);
  }
});

// Port liistening
app.listen(process.env.PORT ? process.env.PORT : 3002, () =>
  console.log("API server is running...")
);
