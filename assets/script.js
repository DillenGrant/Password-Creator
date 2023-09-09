// Assignment Code
var generateBtn = document.querySelector("#generate");

  var lowwercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword(){
  var length = parseInt(prompt("Enter the length of the password (8-128 characters):"));
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length.");
      return getPasswordCriteria();
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}
 
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


