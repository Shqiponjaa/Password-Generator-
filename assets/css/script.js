var generateBtn = document.querySelector("#generate");
function generatePassword(){
    
}
// Write password to the #password input
function writePasword[]{
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function getRandomChar() {
    return String.fromCharCode(Math.floor(Math.random()*26) +97);

  function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
    
    function getRandomSymbol(){
        const symbols= '!@#$%^&*(){}[]=-_+<>?,.';
        return symbols[Math.floor(Math.random() *26) +65);
)
   
}
}

function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
    return String.fromChar
  }
  return password;
}

passwordBtnEl.on('click', function () {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});