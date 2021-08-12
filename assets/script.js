// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// character arrays
var number = "0123456789";
var specialChar = "!%&,*+-./<>?,~";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


var writePassword = function() {
  
  var lengthPass = parseInt(prompt("How long will your password be? (between 8 and 128)"));
  
  while (lengthPass < 7 || lengthPass > 129) {
    alert("you messed up! do it again (between 8 and 128)");
    lengthPass = parseInt(prompt("How long should your password be? (between 8 and 128)"));
  } 
  
  // Variables 
  var confirmSpecialCharacter = confirm("Include special characters?");
  var confirmNumber= confirm("Include numbers?");
  var confirmUpperCase= confirm("Include uppercase?");
  var confirmLowerCase= confirm("Include lowercase?");

  var possibilities = "";

  if (confirmSpecialCharacter) {
    possibilities += specialChar;
  }
  if (confirmNumber) {
    possibilities += number;
  }
  if (confirmUpperCase) {
    possibilities += alphaUpper;
  }
  if (confirmLowerCase) {
    possibilities += alphaLower;
  }

  var password = "";

  for (var i = 0; i < lengthPass; i++) {
    var randomIndex = Math.floor(Math.random() * possibilities.length);
    var character = possibilities[randomIndex];
    password += character;
  }

  document.querySelector("#password").value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// //confirm length prompt
// function generatePassword() {
//  var confirmLength = window.prompt("How many characters would you like your password to be? (must be between 8-128)");
// };

// if (confirmLength < 7 || confirmLength > 129) {
//   window.alert("Password length must be between 8-128 characters, please try again");
//   confirmLength = window.prompt("How many characters would you like your password to be? (must be between 8-128)");

// // password parameters
// } else { confirmLowerCase = window.confirm ("Click OK to confirm if you would like to include lowercase letters");
//     confirmUpperCase = window.confirm ("Click OK to confirm if you would like to include uppercase letters");
//     confirmNumber = window.confirm ("Click OK to confirm if you would like to include numbers");
//     confirmSpecialCharacter = window.confirm ("Click OK to confirm if you would like to include special characters");
//   if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumber === false); {
//       alert("You must choose at least one parameter");
//     confirmLowerCase = window.confirm ("Click OK to confirm if you would like to include lowercase letters");
//     confirmUpperCase = window.confirm ("Click OK to confirm if you would like to include uppercase letters");
//     confirmNumber = window.confirm ("Click OK to confirm if you would like to include numbers");
//     confirmSpecialCharacter = window.confirm ("Click OK to confirm if you would like to include special characters");

// }
// }

// // else if for 4 option
// if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

//   choices = character.concat(number, alphaLower, alphaUpper);
// }
// // Else if for 3 options
// else if (confirmCharacter && confirmNumber && confirmUppercase) {
//   choices = character.concat(number, alphaUpper);
// }
// else if (confirmCharacter && confirmNumber && confirmLowercase) {
//   choices = character.concat(number, alphaLower);
// }
// else if (confirmCharacter && confirmLowercase && confirmUppercase) {
//   choices = character.concat(alphaLower, alphaUpper);
// }
// else if (confirmNumber && confirmLowercase && confirmUppercase) {
//   choices = number.concat(alphaLower, alphaUpper);
// }
// // Else if for 2 options 
// else if (confirmCharacter && confirmNumber) {
//   choices = character.concat(number);

// } else if (confirmCharacter && confirmLowercase) {
//   choices = character.concat(alphaLower);

// } else if (confirmCharacter && confirmUppercase) {
//   choices = character.concat(alphaLower);
// }
// else if (confirmLowercase && confirmNumber) {
//   choices = alphaLower.concat(number);

// } else if (confirmLowercase && confirmUppercase) {
//   choices = alphaLower.concat(alphaUpper);

// } else if (confirmNumber && confirmUppercase) {
//   choices = number.concat(alphaUpper);
// }
// // Else if for 1 option
// else if (confirmCharacter) {
//   choices = character;
// }
// else if (confirmNumber) {
//   choices = number;
// }
// else if (confirmLowercase) {
//   choices = alphaLower;
// }
// // Created space variable to fill uppercase conversion
// else if (confirmUppercase) {
//   choices = space.concat(alphaUpper);
// };

// // password variable is an array placeholder for user generated amount of length
// var password = [];

// // Start random selection variables:
// // Random selection for all variables: 
// for (var i = 0; i < enter; i++) {
//   var pickChoices = choices[Math.floor(Math.random() * choices.length)];
//   password.push(pickChoices);
// }

// // This copies the password value

// function copyPassword() {
// document.getElementById("password").select();
// document.execCommand("Copy");
// alert("Password copied to clipboard!");
// }



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// var passwordCharacters = []
      
// if (confirmSpecialCharacter) {
//   passwordCharacters = passwordCharacters.concat(specialChar)
// }

// if (confirmNumber) {
//   passwordCharacters = passwordCharacters.concat(number)
// }
  
// if (confirmLowerCase) {
//   passwordCharacters = passwordCharacters.concat(alphaLower)
// }

// if (confirmUpperCase) {
//   passwordCharacters = passwordCharacters.concat(alphaUpper)
// }

//   console.log(passwordCharacters)

//   var randomPassword = ""
  
//   for (var i = 0; i < confirmLength; i++) {
//     randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
//     console.log(randomPassword)
//   }
//   return randomPassword;
// }


