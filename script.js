//Array of lower case letters
var lowerCaseLetters = [
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
  "z"
];

//Array of uppercase letters
var upperCaseLetters = [
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
  "W",
  "X",
  "Y",
  "Z"
];

//Array of numers
var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

//Array of special characters 
var specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
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
  "|",
  "}",
  "~"
];

var pwordOptions = function () {
  var passLength = (
    window.prompt("How many characters would your like your password to be? (Select a number between 8-128)")
  );
    // if invalid number is entered, go back to question
    if (passLength < 8 || passLength > 128) {
      window.alert("Select a number between 8 and 128!");
      // how to go back to question?
      return;
    }
    // if user enters something other than a number, go back to question
    if (isNaN(passLength) === true) {
      window.alert("Select a number between 8 and 128!");
      return;
    }
  
  var confirmLowerCase = confirm("Do you want your password to include lower case letters?");

  var confirmUpperCase = confirm("Do you want your password to include upper case letters?");

  var confirmNumbers = confirm("Do you want your password to include numbers?");

  var confirmSpecChar = confirm("Do you want your password to include special characters?");

  // object to hold options
  var userChoices = {
    lowerCaseChoice: confirmLowerCase,
    upperCaseChoice: confirmUpperCase,
    numbersChoice: confirmNumbers,
    specialCharactersChoice: confirmSpecChar,
    passwordLength: passLength
  }
  console.log(userChoices);
  return(userChoices);
}

function randomNumber(characterArray) {
  var randomIndex = Math.floor(Math.random() * characterArray.length)
  var indexValue = characterArray[randomIndex];
  return(indexValue);
};

function generatePassword() {
  
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = pwordOptions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
