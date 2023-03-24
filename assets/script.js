// Assignment code here
function passwordLength() {
  var length = prompt("How many characters long should the password be?", "Length")
  length = parseFloat(length)
  // ensure that length is more than 8 and less than 128
  if (length >= 8 && length <= 128) {
    return length;
  }
  else {
    alert("Password must be between 8 and 128 charaters in length");
    // if an incorrect value is entered re-run the function
    return;
  }
}

// confirm() function that returns a boolean
function yesNoAlert(prompt) {
  if (confirm(prompt + "\nClick 'OK' for Yes or 'Cancel' for No")) {
    return true;
  } else {
    return false;
  }
}
// returns a random lowercase letter
function getRandomLower() {
  var char = "a"
  return char;
}
// returns a random uppercase letter

// returns a random number between one and nine

// returns a random special character

function generatePassword() {
  // alerts to ask for password criteria
  //length alert
  var length = passwordLength();
  // stops code execution if password length wasn't the correct size
  if (!length) {
    return;
  }

  // character type alerts
  // lowercase alert
  var lowercase = yesNoAlert("Include LOWERCASE characters?");
  // uppercase alert
  var uppercase = yesNoAlert("Include UPPERCASE characters?")
  // number alert
  var numbers = yesNoAlert("Include NUMERIC characters?")
  // special character alert
  var specialChar = yesNoAlert("Include SPECIAL CHARACTERS?")

  // creating password
  var password = []
  for (var i = 0; i < length; i++) {
    var char;
    // pick a random number between one and four to run the correct character function
    var randomFunction = Math.floor(Math.random() * 4)
    // if the number equals ... then check if the password should contain that character, if false then subtract one from i
    if (randomFunction === 0) {
      if (lowercase) {
        char = getRandomLower()
      } else {
        i--;
      }
    } else if (randomFunction === 1) {
      if (uppercase) {
        char = getRandomLower()
      } else {
        i--;
      }
    } else if (randomFunction === 2) {
      if (numbers) {
        char = getRandomLower()
      } else {
        i--;
      }
    } else if (randomFunction === 3) {
      if (specialChar) {
        char = getRandomLower()
      } else {
        i--;
      }
    }

    password.push(randomFunction);
  }
  password = password.join("");
  return password;
}

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
