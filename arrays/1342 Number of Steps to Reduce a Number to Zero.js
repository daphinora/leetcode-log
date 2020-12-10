// Problem:
// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Solution:
var numberOfSteps  = function(num) {
    let steps = 0
    while (num > 0) {
        // use a ternary to check if the current num is even
        num % 2 == 0 
        // if the num is even, increase our steps counter and divide num by two
        ? (++steps) && (num /= 2) 
        // if the num is odd, increase our steps counter and subtract one from num
        : (++steps) && (num -= 1)
    } return steps
}; 
 
const num = 14;
numberOfSteps(num)