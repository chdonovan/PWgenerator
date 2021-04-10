// Assignment code here



// variables for password
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowerCase;
// Password variable values

character =  ["&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1,2,3,4,5,6,7,8,9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;

//uppercase conversion
var toUpper = function (x){
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function(){
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//begining of password generate function
function generatePassword(){
  //character choice prompt
  enter = parseInt(prompt("How many Characters would you like? pick a number between 8 and 128"));
  if (!enter){
    alert("no value selected. please enter a value");
  }else if (enter < 8 || enter > 128){
    //input validation
    enter = parseInt(prompt("choose a value between 8 and 128"));

  } else {
    confirmNumber = confirm("do you want to use neumbers?");
    confirmCharacter = confirm(" Do you want to include special characters?");
    confirmUppercase = confirm(" do you want to use uppercase letters?");
    confirmLowerCase  = confirm("do you want to use uppercase letters?");
  };
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
