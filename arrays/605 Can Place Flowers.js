// Problem:
// You have a long flowerbed in which some of the plots are planted,
//  and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's,
//  where 0 means empty and 1 means not empty, and an integer n,
//  return if n new flowers can be planted in the flowerbed
//  without violating the no-adjacent-flowers rule.

// Solution:
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i <= flowerbed.length; i++) {
        if(n > 0) {
            if(flowerbed[i] == 0 && (flowerbed[i+1] == 0 || i == flowerbed.length - 1) && (flowerbed[i-1] == 0 || i == 0)) {
                flowerbed.splice(i, 1, 1);
                n -= 1;
            }
        } else {return true}
    }
    return false
};

const flowerbed = [1,0,0,0,1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));