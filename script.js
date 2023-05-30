




function generatePassword() {

  var generatePassword = [];
  var validCharacters = [];
  //use .split method we learned in class !!!
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '1234567890';
  var specialCharacters = '!@#$%^&*';
  // need arrays for .push
  var uppercaseArray = uppercase.split('');
  var lowercaseArray = lowercase.split('');
  var numbersArray = numbers.split('');
  var specialCharactersArray = specialCharacters.split('');

  // FUNCTIONS
  // write password prompt
  //password can only be 8-128 characters
  //prompt: do you want uppercase letters?
  //prompt: do you want lowercase letters?
  //prompt: do you want numbers?
  //prompt: do you want special characters
  // generate random password
  //alert: here is your random password!
  var passwordLength = prompt("What is your desired password length? At least 8 characters but no longer than 128.");
  var includeUppercase = confirm("Would you like to include lowercase characters?");
  var includeLowercase = confirm("Would you like to include uppercase characters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includespecialCharacters = confirm("Would you like to include special characters?");

  // checking to make sure password length is correct
  console.log(passwordLength)


  //need if statement to keep password between 8-128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You have entered an invalid password length. Please choose a number between 8 and 128.");
  }

  //if statements for characters
  if (includeLowercase) [
    validCharacters.push(...lowercaseArray),
  ]

  if (includeUppercase) [
    validCharacters.push(...uppercaseArray),
  ]

  if (includeNumbers) [
    validCharacters.push(...numbersArray),
  ]

  if (includespecialCharacters) [
    validCharacters.push(...specialCharactersArray),
  ]

  //the dreaded for loop...
  for (var i = 0; i < passwordLength; i++) {
    generatePassword.push((validCharacters[Math.floor(Math.random() * validCharacters.length)]));
  }
  return (generatePassword.join(''));
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);