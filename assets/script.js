// Assignment code here
function passwordLength() {
  var length = prompt("How many characters long should the password be?", "Length")
  length = parseFloat(length)
  // ensure that length is more than 8 and less than 128
  if (length >= 8 && length <= 128) {
    return length;
  }
  else {
    alert("Password must be between 8 and 128 charaters in length")
  }
}

function yesNOAlert(prompt) {

}

function generatePassword() {
  // alerts to ask for password criteria
  //length alert
  var length = passwordLength();

  // character type alerts
  // lowercase alert
  var yesNOAlert("include lowercase characters");

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
