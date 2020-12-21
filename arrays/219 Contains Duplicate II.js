// Problem:
// Given an array of integers and an integer k, 
// find out whether there are two distinct indices 
// i and j in the array such that nums[i] = nums[j] 
// and the absolute difference between i and j is at most k.

// Solution:
var containsNearbyDuplicate = function(nums, k) {
    let result = false;
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] || hash[nums[i]] === 0) {
            if(k >= Math.abs(i - hash[nums[i]])) {
                result = true
            } else {hash[nums[i]] = i}
        } else {hash[nums[i]] = i}
    }
    return result
};

const nums = [1,2,3,1,2,3]
const k = 2

console.log(containsNearbyDuplicate(nums,k));