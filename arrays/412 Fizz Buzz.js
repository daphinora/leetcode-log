// Problem:
// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Solution:
var fizzBuzz = function(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz")
            // if the number we're looking at can be
            // divided evenly by both 3 and 5
            // add FizzBuzz to our array
        } else if (i % 3 === 0) {
            arr.push("Fizz")
            // if our number can only be divided
            // evenly by 3 but not 5 then
            // add Fizz to our array
        } else if (i % 5 === 0) {
            arr.push("Buzz")
            // if our number can only be divided
            // evenly by 5 but not 3 then
            // add Buzz to our array
        } else {arr.push(`${i}`)}
            // if our number cannot be divided
            // cleanly by 3 or 5 then just
            // add the number itself to our array
    }
    return arr
};

const n = 15;
// fizzBuzz will create an array full of numbers from 1 to n and
// replace every multiple of 3, 5, or 3 and 5 with different strings
fizzBuzz(n)