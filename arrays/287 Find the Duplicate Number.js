// Problem: 
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one duplicate number in nums, return this duplicate number.

// Solution:
var findDuplicate = function(nums) {
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] > 0) {
            return nums[i]
            // if the element we're looking at
            // has already been added as a key 
            // in our hash then return it
        } else {
            hash[nums[i]] = 1
            // if the element we're looking at
            // has not been added to our hash as
            // a key, then add it to our hash :)
        }
    }
};

const nums = [1,3,4,2,2]
console.log(findDuplicate(nums))