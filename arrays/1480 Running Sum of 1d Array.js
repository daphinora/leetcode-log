// Problem:
// Given an array nums. We define a running sum of an array 
// as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Solution:
var runningSum = function (nums) {
    total = 0;
    arr = [];

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        arr.push(total)
    }

    return arr
};

const nums = [1, 2, 3, 4]
console.log(runningSum(nums))
