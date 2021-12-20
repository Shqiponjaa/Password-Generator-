var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// var for upper and lowercase letters, numbers, and characters)
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var optionsVariable = "";

    // confirm
    var lowercaseL = confirm("Do you want your password to contain lowercase letters?");
    var uppercasel = confirm("Do you want your password to contain uppercase letters?");
    var numbers = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
   

    // Write a function that generates a random password in the "text area" box
function writePassword() {
    // chechking if the password it's between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    //password choice
    else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
        alert("You must chose at least one password criteria.");
        var lowercaseL = confirm("Do you want your password to contain lowercase letters?");
        var uppercaseL = confirm("Do you want your password to contain uppercase letters?");
        var numbers= confirm("Do you want your password to contain numbers?");
        var specialChar = confirm("Do you want your password to contain special characters?");
    }

    // Use the criteria that are selected to generate the password
    if (lowercaseL) {
        optionsVariable += lowercaseAlphabet;
    }

    if (uppercaseL) {
        optionsVariable += uppercaseAlphabet;
    }

    if (numbers) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    // This  function generates a random password based on the choice that have been selected
    password.value = randomString;
    for (var i = 0; i < passwordLength; i++) {
       
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    // Prevent the screen from refreshing when whe button is clicked
    event.preventDefault();
}
