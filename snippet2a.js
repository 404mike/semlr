function is_palindrome(str) {
    const len = str.length;
    let first = str[0];
    let last = str[len - 1];

    for (let i = 0; i < str.length; i++) {
        first = str[i];
        last = str[len - 1 - i];
        if(first !== last) return false;
    }

    return true;
}

// same as above but with a different variable name
function is_palindrome_2(str) {
    const len = str.length;

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[len - 1 - i]) return false;
    }

    return true;
}

const palindrome = "tattarrattat";

console.log(is_palindrome(palindrome)); 
