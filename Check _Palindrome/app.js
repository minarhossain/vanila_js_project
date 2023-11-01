const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
    const word = document.querySelector(".input-text").value;
    const len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    let flip = [...end].reverse().join("");
    if (start == flip) {
        result.innerHTML = `${word} is a Palindrome`;
    }
    else {
        result.innerHTML = `${word} is not Palindrome`
    }
}


/* 

function isPalindrome(str) {
    // convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // reverse the string and compare it to the original
    return str === str.split('').reverse().join('');
}

// example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello world")); // false
 */