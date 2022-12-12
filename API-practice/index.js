// Import dependancies
const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

// Set up server configuration
const app = express();
// app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes in another file
// const riskRouter = require("./routes/routes");

app.get("/", (req, res) => {
  res.send("This is working");
});

// app.get("/outfit", (req, res) => {
//   const tops = ["Black", "White", "Orange", "Red", "Green", "Yellow"];
//   const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
//   const shoes = ["Black", "White", "grey"];

//   res.json({
//     top: _.sample(tops),
//     jeans: _.sample(jeans),
//     shoes: _.sample(shoes),
//   });
// });

// app.post("/comments", async (req, res) => {
//   const id = uuid();
//   const content = req.body.content;
//   console.log(id, content);

//   if (!content) {
//     return res.statusCode(400);
//   }

//   await fs.mkdir("data/comments", { recursive: true });
//   await fs.writeFile(`data/comments/${id}.txt`, content);

//   res.status(201).json({
//     id: id,
//   });
// });

// app.get("/comments/:id", async (req, res) => {
//   const id = req.params.id;

//   let content;
//   try {
//     content = await fs.readFile(`data/comments/${id}.txt`, "utf-8");
//   } catch (err) {
//     return res.status(404).json({
//       error: "Not found",
//     });
//   }
//   res.json({
//     content: content,
//   });
// });
// Test end point for mission 3

// API Functions include
// 1) Change the input string to all commons letters
// 2) Split the input string in a array of each words
// 3) Search the array to see if it contains keywords
// 4) For every keywords add one to the Risk rating variable
// 5) If risk rating variable has more are more that 5 we will only out put 5 and return a message saying you cant have insurane
// 5) If it is 0 we will return an error message
// 6) If it is between 0-5 we will calculate the risk rating
// 7) If it is only a number then we will return an error message
// 8) If it is black then we will return an error message

// THis first one uses array mehods to calculate the risk rating but there are lots of errors for example it can't handle duplicate values

// const keywords = [
//   "collide",
//   "crash",
//   "scratch",
//   "bump",
//   "smash",
//   "collides",
//   "collided",
//   "colliding",
//   "crashes",
//   "crashed",
//   "crashing",
//   "scratches",
//   "scratched",
//   "scratching",
//   "bumps",
//   "bumped",
//   "bumping",
//   "smashes",
//   "smashed",
//   "smashing",
// ];

// let risk = "My only claim was a crash ";
// let count = [];
// function Main(Arg1, Arg2) {
//   // Test Arg1 to make sure its a string, throw an error if it not

//   const testfunction2 = (riskformfrontend, keywordsArr) => {
//     for (let index = 0; index < keywordsArr.length; index++) {
//       testFunction(riskformfrontend, keywordsArr[index]);
//     }
//     // console.log(riskscore.length, count);
//   };
//   const testFunction = (string, singleKeyword) => {
//     riskscore = [];
//     const riskText = string.toLowerCase().split(" "); //Change the inputed string to an array
//     // console.log(riskText) //Ensure the array is correct

//     let riskAssess = riskText.indexOf(singleKeyword);
//     if (riskAssess > 0) {
//       count.push(singleKeyword);
//     }
//     while (riskAssess !== -1) {
//       riskscore.push(riskAssess);
//       riskAssess = riskText.indexOf(singleKeyword, riskAssess + 1);
//     }
//     console.log(riskscore, riskAssess);
//   };
//   testfunction2(Arg1, Arg2);

//   return count.length;
// }

// Main(risk, keywords);

// Refactored code
const keywords = [
  "collide",
  "crash",
  "scratch",
  "bump",
  "smash",
  "collides",
  "collided",
  "colliding",
  "crashes",
  "crashed",
  "crashing",
  "scratches",
  "scratched",
  "scratching",
  "bumps",
  "bumped",
  "bumping",
  "smashes",
  "smashed",
  "smashing",
];

let risk =
  "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes ";
let riskscore = [];

function Main(Arg1, Arg2) {
  if (Arg2 === "" || Arg2 === undefined || Arg2 === null) {
    return "You need to input something";
  } else if (typeof Arg2 === "number") {
    return "Numbers are not allowed";
  } else {
    const riskText = Arg2.toLowerCase().split(" "); // turn the input string to an array

    const riskAssess = riskText.filter((element) => Arg1.includes(element));

    if (riskAssess.length >= 5) {
      return 5;
    } else {
      return riskAssess.length;
    }
  }
}

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
app.listen(3000, () => console.log("API server is running..."));

module.exports = Main;
