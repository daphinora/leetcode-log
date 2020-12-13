// Problem:
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Solution:
const nums = [1,2,3,4,5,6,7];
const k = 3;

var rotate = function(nums, k) { 
    nums.splice(nums.length - k).reverse().forEach(n => nums.unshift(n))
}; 

console.log(rotate(nums, k))