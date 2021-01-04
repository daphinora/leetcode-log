// Problem:
// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand 
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

// Solution:
var search = function (nums, target) {
    let leftNum = nums[0];
    let x = 1
    let rightNum = nums[nums.length - x];

    for (let i = 0; i < nums.length; i++) {
        // console.log(leftNum, rightNum)
        if (leftNum == target) {
            // console.log("found left")
            return nums.indexOf(leftNum)
        } else if (rightNum == target) {
            // console.log("found right")
            return nums.indexOf(rightNum)
        } else if ((leftNum > target && rightNum < target) || (nums.indexOf(leftNum) === nums.indexOf(rightNum))) {
            // console.log("dead; target not found :(", leftNum, i, target)
            return "-1"
        } else if (leftNum < target) {
            // console.log("left moves right")
            leftNum = nums[i + 1]
        } else if (rightNum > target) {
            // console.log("right moves left")
            rightNum = nums[nums.length - (x += 1)]
        }
    }
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(search(nums, target))

// Honestly, it's hideous, but it's pretty similar to 81. 
// I decided to forgo the ".filter" higher level method this time by
// manually searching through the array instead! it's a bit of a mess

// I might redo this one at a later time. :(

