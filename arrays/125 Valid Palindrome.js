// Problem:
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Solution:
const s = "A man, a plan, a canal: Panama"

var isPalindrome = function (s) {
    const string = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    return string === string.split('').reverse().join('')
}

isPalindrome(s)