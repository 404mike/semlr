function is_palindrome(str) {
    let reverseStr = str.split("").reverse().join("");
    let strLength = str.length;
    let middle = Math.round(str.length / 2);

    for(let i = 0; i < strLength; i++) {
        if(middle == i) return true;
        if(str[i] != reverseStr[i]) return false;
    }

    return true;
}

const palindrome = "tattarrattat";

console.log(is_palindrome(palindrome)); 