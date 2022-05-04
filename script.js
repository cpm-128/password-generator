// Assignment code here

// Define random generators using ASCII
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomNumber () {
  return (Math.floor(Math.random() * 10));
};

function getRandomSpecialCharacter () {
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // removed " and \ from specialCharacters for the sake of working.
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
};

console.log(">>>randUpper>>>" , getRandomUpper());
console.log(">>>randLower>>>" , getRandomLower());
console.log(">>>randNumber>>>" , getRandomNumber());
console.log(">>>randSpecialCharacter>>>" , getRandomSpecialCharacter());

// End random generators using ASCII

// Prompt user for password criteria

var passwordLength = function promptPasswordLength() {
  var passwordLengthInput = window.prompt("How many characters would you like your password to contain?");
    if (passwordLengthInput < 8 || passwordLengthInput > 128) {
      window.alert("Password must be atleast 8 characters and less than 128 characters.");
      promptPasswordLength();
    } else {
      passwordLength = passwordLengthInput;
    };
};

var wantsUpper = function promptWantsUpper() {
  var wantsUpperInput = window.confirm("Click OK to include uppercase letters.");
  wantsUpper = wantsUpperInput;
};

var wantsLower = function promptWantsLower() {
  var wantsLowerInput = window.confirm("Click OK to include lowercase letters.");
  wantsLower = wantsLowerInput;
};

var wantsNumber = function promptWantsNumber() {
  var wantsNumberInput = window.confirm("Click OK to include numbers.");
  wantsNumber = wantsNumberInput;
};

var wantsSpecialCharacter = function promptWantsSpecialCharacter() {
  var wantsSpecialCharacterInput = window.confirm("Click OK to include special characters.");
  wantsSpecialCharacter = wantsSpecialCharacterInput;
};

passwordLength();
  console.log(">>>passwordLength is>>>" , passwordLength);
wantsUpper();
  console.log(">>>Wants upper?>>>" , wantsUpper);
wantsLower();
  console.log(">>>Wants lower?>>>" , wantsLower);
wantsNumber();
  console.log(">>>Wants numbers?>>>" , wantsNumber);
wantsSpecialCharacter();
  console.log(">>>Wants special characters?>>>" , wantsSpecialCharacter);


// End prompt user for password criteria

// FROM CLASS BELOW:
// var possiblePassword = []; // you need an array based on what criteria the user selected

// var wantsUpper = prompt('Do you want lowercase?');
//   if(wantsLower) {
//     possiblePassword.push(upper) // PUSH IS EXTEMELY USEFUL. YOU ARE PUSHING EACH TYPE OF INPUT TO THE POSSIBLE PASSWORD POOL IF THEY SAID YES. DO THIS FOR EACH TYPE OF INPUT (PUSH OR DON'T PUSH)
//   }

// var generatedPassword = [];
//   for (var i; i < passwordLength; i++) {
//   var randomPassword = Math.floor(Math.random() * possiblePassword.length);
//   var etc
//   generatedPassword.push(randomLetter);
// }













// Assignment code ends here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // you need to write this function, generatePassword, that will generate and return the password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);