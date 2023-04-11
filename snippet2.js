function is_palindrome(str) {
    let reverseStr = str.split("").reverse().join("");
    let strLength = str.length;
  
    for(let i = 0; i < strLength; i++) {
        if(str[i] != reverseStr[i]) return false;
    }

    return true;
}

const palindrome = "tattarrattat";

console.log(is_palindrome(palindrome)); 
