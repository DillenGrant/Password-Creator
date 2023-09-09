// Assignment Code
var generateBtn = document.querySelector("#generate");

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function getPassword(){
  var length = parseInt(prompt("Enter the length of the password (8-128 characters):"));
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length.");
      return getPassword();
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return getPassword();
    }
    
    return {
      length,
      includeLowercase,
      includeUppercase,
      includeNumeric,
      includeSpecial
    };
  }
    function getRandomChar(charSet) {
      var randomIndex = Math.floor(Math.random() * charSet.length);
      return charSet[randomIndex];
    }

    function generatePassword(criteria) {
      var password = "";
      var charSet = "";

      if (criteria.includeLowercase) {
          charSet += lowercaseChars;
      }
      if (criteria.includeUppercase) {
          charSet += uppercaseChars;
      }
      if (criteria.includeNumeric) {
          charSet += numericChars;
      }
      if (criteria.includeSpecial) {
          charSet += specialChars;
      }

      for (var i = 0; i < criteria.length; i++) {
          var randomChar = getRandomChar(charSet);
          password += randomChar;
      }

      return password;
    }

function writePassword() {
  var password = getPassword();
  var generatedPassword= generatePassword(password);
  var passwordText = document.querySelector("#password");
 
  passwordText.value = generatedPassword;
};
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

