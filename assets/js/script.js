// Assignment code here
// object to hold password contents
var letNumSym = {
  // array for capital letters
  capital: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "Z",
  ],
  // array of numbers
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // array of lowercase letters
  lower: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  // array of special characters
  symbol: [
    " ",
    "!",
    "'",
    "#",
    '"',
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "}",
    "|",
    "~",
  ],
};

// prompt user for how long password has to be

// prompt user for password credentials, numbers, letters, special characters

// get random items from array
// function to get capital latters
var getCaps = function () {
  var caps = [];
  var pwUpper = parseInt(prompt("How many capital letters do you need?"));

  if (pwUpper > 0) {
    for (var i = 0; i < pwUpper; i++) {
      var random = Math.floor(Math.random() * letNumSym.capital.length);
      var letter = letNumSym.capital[random];
      caps.push(letter);
    }
    return caps;
  } else if (pwUpper <= 7 || pwUpper >= 129) {
    alert("This is not a valid number");
    getCaps();
  } else {
    alert("Please, choose a valid number.");
    getCaps();
  }
};

var getLows = function () {
  var lows = [];
  var pwLower = parseInt(prompt("How many lowercase letters do you need?"));
  if (pwLower > 0) {
    for (var i = 0; i < pwLower; i++) {
      var random = Math.floor(Math.random() * letNumSym.lower.length);
      var letter = letNumSym.lower[random];
      lows.push(letter);
    }
    return lows;
  } else if (pwLower <= 7 || pwLower >= 129) {
    alert("This is not a valid number");
    getLows();
  } else {
    alert("Please, choose a valid number.");
    getLows();
  }
};

var getNums = function () {
  var nums = [];
  var pwNums = parseInt(prompt("How many numbers do you need?"));
  if (pwNums > 0) {
    for (var i = 0; i < pwNums; i++) {
      var random = Math.floor(Math.random() * letNumSym.numbers.length);
      var letter = letNumSym.numbers[random];
      nums.push(letter);
    }
    return nums;
  } else if (pwNums <= 7 || pwNums >= 129) {
    alert("This is not a valid number");
    getNums();
  } else {
    alert("Please, choose a valid number.");
    getNums();
  }
};

var getSymbs = function () {
  var symbs = [];
  var pwSymbol = parseInt(prompt("How many special characters do you need?"));
  if (pwSymbol > 0) {
    for (var i = 0; i < pwSymbol; i++) {
      var random = Math.floor(Math.random() * letNumSym.symbol.length);
      var letter = letNumSym.symbol[random];
      symbs.push(letter);
    }
    return symbs;
  } else if (pwSymbol <= 7 || pwSymbol >= 129) {
    alert("This is not a valid number");
    getSymbs();
  } else {
    alert("Please, choose a valid number.");
    getSymbs();
  }
};

// put items in a new array
var generatePasswordArr = function () {
  var pwLength = parseInt(
    prompt(
      "How many characters would you like your password to be? Enter a number from 8 to 128 to represent the number of characters needed."
    )
  );
  var passwordArr = [];
  capital = getCaps();
  lowercase = getLows();
  number = getNums();
  symbol = getSymbs();
  passwordArr = passwordArr.concat(capital);
  passwordArr = passwordArr.concat(lowercase);
  passwordArr = passwordArr.concat(number);
  passwordArr = passwordArr.concat(symbol);
  passwordArr = passwordArr.join("");
  return passwordArr;
};
// present new array to user in form of password
var generatePassword = function (passwordArr) {
  for (let i = passwordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArr[i], passwordArr[j]] = [passwordArr[j], passwordArr[i]];
  }
  return passwordArr;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(generatePasswordArr());

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
