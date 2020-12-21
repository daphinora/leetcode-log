// Problem:
// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the 
// index where it would be if it were inserted in order.

// Solution:
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i
        } else if(nums[i] > target && i === 0) {
            return 0
        } else if(nums[i] > target) {
            return i
        } else if(nums[nums.length -1] < target) {
            return nums.length
        }
    }
};

const nums = [1,3,5,6]
const target = 5

console.log(searchInsert(nums, target))