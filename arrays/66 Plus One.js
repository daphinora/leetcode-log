// Problem:
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Solution:

const digits = [1,2,3]

var plusOne = function (digits) {
    let index = digits.length - 1
    digits[index]++
    for (let i = index; i >= 0; i--) {
        if (digits[i].toString().length > 1) {
            digits[i] = 0;
            if (i < 1) {
                digits.unshift(1)
            } else { digits[i - 1]++ }
        }
    }
    return digits
};

console.log(plusOne(digits))