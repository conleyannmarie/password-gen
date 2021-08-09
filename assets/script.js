// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// character arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables 

var confirmSpecialCharacter;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;


//confirm length prompt
function generatePassword() {
 var confirmLength = window.prompt("How many characters would you like your password to be? (must be between 8-128)");
};

if (confirmLength < 7 || confirmLength > 129) {
  window.alert("Password length must be between 8-128 characters, please try again");
  confirmLength = window.prompt("How many characters would you like your password to be? (must be between 8-128)");

// password parameters
} else { confirmLowerCase = window.confirm ("Click OK to confirm if you would like to include lowercase letters");
    confirmUpperCase = window.confirm ("Click OK to confirm if you would like to include uppercase letters");
    confirmNumber = window.confirm ("Click OK to confirm if you would like to include numbers");
    confirmSpecialCharacter = window.confirm ("Click OK to confirm if you would like to include special characters");
  if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumber === false); {
      alert("You must choose at least one parameter");
    confirmLowerCase = window.confirm ("Click OK to confirm if you would like to include lowercase letters");
    confirmUpperCase = window.confirm ("Click OK to confirm if you would like to include uppercase letters");
    confirmNumber = window.confirm ("Click OK to confirm if you would like to include numbers");
    confirmSpecialCharacter = window.confirm ("Click OK to confirm if you would like to include special characters");

}

// else if for 4 option
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

  choices = character.concat(number, alphaLower, alphaUpper);
}
// Else if for 3 options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alphaUpper);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alphaLower);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alphaLower, alphaUpper);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alphaLower, alphaUpper);
}
// Else if for 2 options 
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alphaLower);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alphaLower);
}
else if (confirmLowercase && confirmNumber) {
  choices = alphaLower.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = alphaLower.concat(alphaUpper);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alphaUpper);
}
// Else if for 1 option
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alphaLower;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
  choices = space.concat(alphaUpper);
};

// password variable is an array placeholder for user generated amount of length
var password = [];

// Start random selection variables:
// Random selection for all variables: 
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

// This copies the password value

function copyPassword() {
document.getElementById("password").select();
document.execCommand("Copy");
alert("Password copied to clipboard!");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordCharacters = []
      
if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}

if (confirmNumber) {
  passwordCharacters = passwordCharacters.concat(number)
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}

  console.log(passwordCharacters)

  var randomPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}


