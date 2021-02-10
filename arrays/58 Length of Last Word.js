// Problem: Given a string s consists of some words separated by spaces, 
// return the length of the last word in the string. 
// If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

// Solution:

var lengthOfLastWord = function (s) {
    const arr = s.split(" ").filter(i => i !== '')
    let arrLast = 'sjoflskjf'
    if (arr.length > 0) {
        if ((arr[arr.length - 1] === "") && (arr.length > 1)) {
            arrLast = arr[arr.length - 2]
        } else { arrLast = arr[arr.length - 1] }
    } else if (arr.length === 0) {
        return 0
    } else { arrLast = arr[0] }
    return arrLast.length
};

const s = "Hello World"
console.log(lengthOfLastWord(s));
// #=> 5