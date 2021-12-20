var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var password='';
  var selectedChar = [];
    passwordLength = checkIfNaN(passwordLength);
  
      //confirms
  lower = confirm("Click ok to confirm including upper case letters."); 
  caps = confirm("Click ok to confirm including lower case letters."); 
  numeric = confirm("Click ok to confirm including numeric values."); 
  special = confirm("Click ok to confirm including special characters."); 
  
  while (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) {
        alert("Password must be at least 8 characters long!");
        passwordLength = prompt("Enter a new password length:");
        passwordLength = checkIfNaN(passwordLength);}
        
    
    else if (passwordLength > 128) {
        alert("Password cannot be longer than 128 characters!");
        passwordLength = prompt("Enter a new password length:");
        passwordLength = checkIfNaN(passwordLength);}
    else {
        passwordLength = checkIfNaN(passwordLength);
    }


var UpperCase = confirm("Do you want to include uppercase letters?");
var LowerCase = confirm("Do you want to include lowercase letters?");
var Number = confirm("Do you want to include numbers?");
var SpecialChar = confirm("Do you want to include special symbols?");

if (UpperCase) {selectedChar.push("upperCase");}
if (LowerCase) {selectedChar.push("lowerCase");}
if (Number) {selectedChar.push("number");}
if (SpecialChar) {selectedChar.push("specialChar");}


for (var i = 0; i < passwordLength; i++){
    var randIndex = Math.floor(Math.random()*selectedChar.length);
    randCharType = selectedChar[randIndex];

    if (randCharType === "lowerCase") {
        // generates random lowercase letter as ASCII 
        var newChar = String.fromCharCode(Math.floor(Math.random()*26)+97);
        console.log(newChar);
    }
    else if (randCharType === "upperCase") {
        //generates random Uppercase letter as ASCII 
        var newChar = String.fromCharCode(Math.floor(Math.random()*26)+64);
        console.log(newChar);
    }
    else if (randCharType === "number") {
        // generates random number (0-9) as ASCII 
        var newChar = String.fromCharCode(Math.floor(Math.random()*10)+48);
   
    }
    else {
        var specialCharArr = ["\\","!","|","\"","@","·","#","$","~","%","&","¬","/","(",")","=","?","'","^","<",">",",",";",".",":","-","_","+","-","*","[","]","{","}"];
        var specialCharIndex = Math.floor(Math.random()*specialCharArr.length);
        var newChar = specialCharArr[specialCharIndex];
        console.log(newChar);
    }
    password = (password + newChar);
}

passwordDiv = document.getElementById("password");



// Creates a variable to target the button for triggering the copy function
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

// Copy the password to the clipboard
function copyPassword() {
    document.getElementById("password").setAttribute("style", "color: green;");
    document.getElementById("password").select();
    document.getElementById("password").focus();
    document.Command("Copy");
    alert("Your password has been copied to the clipboard");
}

console.log(copyPassword)