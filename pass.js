const passElement = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_!~?";

const allChars = uppercase + lowercase + numbers + symbols;

function createPassword() {
    let password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passElement.value = password;
}

function copypassword(){
    passElement.select();
    document.execCommand("copy");

}

// Optional: call createPassword on page load
// createPassword();
