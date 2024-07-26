const length=14;
const characters = "1234567890-=QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./qwertyuiopasdfghjklzxvbnnm{}|:><?+_)(*&^^%$#@!~";
function createPassword(){   
    let pass = ""
    for (let int = 0; int <length; int++) {
        pass+=characters[(Math.floor(Math.random()*characters.length))];
    }
    document.getElementById("password").value = pass;   
}
function copyPassword() {
    let passwordField = document.getElementById("password");
    passwordField.select(); 
    document.execCommand("copy"); 
}
