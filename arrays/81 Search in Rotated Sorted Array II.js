// Problem:
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.

// Solution:

const nums = [2, 5, 6, 0, 0, 1, 2]
const target = 0

// First basic solution:
var searchFirst = function (nums, target) {
    if (nums.filter(n => n === target).length > 0) {
        return true
    } else { return false }
}
// The first way explicitly said to return true or false depending on certain criteria.
// This is fine - the function very clearly states what it's expected to do. If you were
// another developer looking at this code, you could look at it and see exactly what I'm
// trying to do: search for a specific number amongst an array of number.

// However, the next solution returns an implied boolean - I'm not telling it to
// return true or false, but if the length of the array nums has a length larger
// than zero (aka it exists at all) after filtering through it for the target number,
// then it automatically spits out a boolean response of true. If the length of the
// array is zero, then it's a sad empty arrray and doesn't actually exist anymore, 
// which returns a boolean response of false.

// Better solution:
var searchSecond = function (nums, target) {
    return nums.filter(n => n === target).length > 0
}

searchFirst(nums, target)
searchSecond(nums, target)

// Honestly, I might come back to this one and do it without higher order functions.
// I'm sure it's not that bad - look for the pivot point. Once at the pivot point,
// check the numbers to the left and right. If the number to the left is lower than
// the target, the target does not exist. Same for if the number to the left is too high.
// If the target number would exist between nums[0] and the left number or between 
// nums[nums.length - 1] and the right number, then check those sides. (Check the left
// side if between the left and first number, check the right side if between the right
//  and last number.) 

// This means you only have to deal with half of the array at once, which cuts down on 
// time and memory usage.

// Higher order functions exist to make our lives easier, but it's always best to know
// how to do something without them. It shows a deeper understanding of what you're doing.


// Update: 12 December 2020

var searchNew = function (nums, target) {
    let x = 0;
    let leftNum = nums[x];
    let y = nums.length - 1;
    let rightNum = nums[y];

    if (!Number.isInteger(leftNum)) return false;

    for (let i = 0; i < nums.length; i++) {
        if (leftNum == target | rightNum == target) {
            return true
        } else if (leftNum > target && rightNum < target || x === y) {
            return false
        } else if (leftNum < target) {
            leftNum = nums[x++]
        } else if (rightNum > target) {
            rightNum = nums[y--]
        }
    }
};

console.log(searchNew(nums, target))