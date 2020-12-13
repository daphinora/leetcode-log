// Problem:
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 

// some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Solution:
var findDuplicates = function (nums) {
    let hash = {};
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            if (arr.filter(n => n === nums[i]) == 0) {
                arr.push(nums[i])
            }
        } else { hash[nums[i]] = 1 }
    }
    return arr
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDuplicates(nums))

// honestly.... I'm not proud of this one. It takes up too much time and memory.
// I might revisit this one in the future. At least it works for now. Still, though.