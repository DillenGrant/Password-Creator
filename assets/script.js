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
      return generatePassword();
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return generatePassword();
 }
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}
 
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


