var generateBtn = document.querySelector("#generate");	
function generatePassword() {}
    

function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;}
  
  var passLength = prompt("Please enter your password here?")

if (passlength < 8 || passlength > 128){
    alert("Length must be 8-128 characters")}
    if (passlength >= 8 && passlength <= 128){
        var uppercase = confirm("Would you like to use uppercase letters?")
        var lowercase = confirm("Would you like to use lowercase letters?")
        var numbers = confirm("would you like to use numbers?")
        var symbols = confirm("would you like to use special characters?")
        }    
         if (uppercase != true && lowercase != true && numbers != true && symbols != true){
            alert("You must select at least one character type!");       
}
var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}
    function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];}
   
   document.getElementById('clipboard').addEventListener('click',() => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}