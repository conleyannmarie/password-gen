// Assignment code here
const 
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

var result = document.getElementById('password-holder');

//generator functions
function getRandomLower() {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode((Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols [Math.floor(Math.random() * symbols.length)]
}


startpassNum = 0;

var generate = document.getElementById("generate");

var passGen = function() {
if (generate.clicked === true) {
  passNum = window.prompt("How many characters do you want in your password? (Between 8-128");
  console.log ( startpassNum + passNum 

  );
promptLet = window.prompt("Do you want to include uppercase letters? Enter 'yes' or 'no'")
  if (promptFight === "yes" || promptFight === "YES" || promptFight === "Yes")
}

passGen();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
