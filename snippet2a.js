function is_palindrome(str) {
    const len = str.length;
    const mid = Math.floor(len / 2);
    let first = str[0];
    let last = str[len - 1];

    for (let i = 0; i < str.length; i++) {
        if(i === mid) return true;
        first = str[i];
        last = str[len - 1 - i];
        if(first !== last) return false;
    }
}

// same as above but with a different variable name
function is_palindrome_2(str) {
    const len = str.length;
    const mid = Math.floor(len / 2);

    for (let i = 0; i < str.length; i++) {
        if(i === mid) return true;
        if(str[i] !== str[len - 1 - i]) return false;
    }
}

const palindrome = "tattarrattat";

console.log(is_palindrome(palindrome)); 