// Problem:
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

// Solution:
const numbers = [2,7,11,15];
const target = 9;

var twoSum = function(numbers, target) {
    let lowBase = 0;
    let highBase = numbers.length - 1

    while (lowBase < highBase) {
        let lowNum = numbers[lowBase]
        let highNum = numbers[highBase]
        let tempSum = lowNum + highNum;
        
        if (tempSum === target) {
            return [lowBase + 1, highBase + 1]
        } else if (tempSum > target) {
            highBase--
        } else if (tempSum < target) {
            lowBase++
        }
    }
};

console.log(twoSum(numbers, target))