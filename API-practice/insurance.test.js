// const { expect } = require("chai");
// const request = require("supertest")("https://localhost:3000/");
const Main = require("./index");
const recInput = [
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
const randomInt = (num) => Math.floor(Math.random() * num);
const randomItem = (arr) => arr[randomInt(arr.length)];

const multiItemOneToFive = (length) => {
  let item = [];
  for (let i = 0; i < length; i++) {
    item.push(randomItem(recInput));
  }
  return item;
};
const multiItem = (length) => {
  let item2 = [];
  for (let i = 0; i < randomInt(length); i++) {
    item2.push(randomItem(recInput));
  }
  return item2;
};

const testCases = [
  {
    scenario: "Not a string, only number",
    input1: randomInt(100), // random number generator function here
    input2: recInput,
    expected: "Numbers are not allowed",
  },
  {
    scenario: "Is a string but no specific words",
    input1: " There are no other",
    input2: recInput,
    expected: 0, // this should be an error message or a console log
  },
  {
    scenario: "No input given",
    input1: "",
    input2: recInput,
    expected: "You need to input something", // this should be an error message or a console log
  },
  {
    scenario: "Has one keyword",
    input1: `I have only had one ${randomItem(recInput)}`,
    input2: recInput,
    expected: 1,
  },
  {
    scenario: "Has more than five keywords ",
    input1: "crash crashes crashed", //`${multiItem(6).toString()}`,
    input2: recInput,
    expected: 3, //multiItem(6).length,
  },
  // {
  //   scenario: "Has between one to five keywords",
  //   input1: `${multiItemOneToFive(5).toString()}`,
  //   input2: recInput,
  //   expected: 5,
  // },

  {
    scenario: "Exact keyword repeated 2 times",
    input1: "crash crash", //random keyword repeated 2 times
    input2: recInput,
    expected: 2,
  },
];
describe("Unit Test", () => {
  testCases.map((ts) => {
    it(ts.scenario, () => {
      // Act
      const actual = Main(ts.input2, ts.input1);
      // Assert
      expect(actual).toBe(ts.expected);
    });
  });
});

// describe("API tests", () => {
//   it("GET http//:localhost:3000/", () => {
//     return request.get("/").expect(500);
//   });
// });
