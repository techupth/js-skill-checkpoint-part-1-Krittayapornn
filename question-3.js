// Question #3
let userPassword = "";
function checkPasswordStrength (userPassword){
    if (userPassword.length < 6){
        return "Weak"
    }else if (userPassword.length >= 6 && userPassword.length <=10){
        return "medium"
    }else if (userPassword.length > 10){
        return "Strong"
    }
    }



console.log(checkPasswordStrength("swnalWadqQQ")); // "Strong"
console.log(checkPasswordStrength("TechUp")); // "Medium"
console.log(checkPasswordStrength("abcde")); // "Weak"

