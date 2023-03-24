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

function getRandomChar() {
  var char = "a"
  return char;
}

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
    var char = getRandomChar();
    password.push(char);
  }
  password.join("");
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
