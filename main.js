// Refactored code
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

module.exports = Main;
