// Problem:
// You have a long flowerbed in which some of the plots are planted,
//  and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's,
//  where 0 means empty and 1 means not empty, and an integer n,
//  return if n new flowers can be planted in the flowerbed
//  without violating the no-adjacent-flowers rule.

// Solution:
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i <= flowerbed.length; i++) {
        if (n > 0) {
            // so if we still have flowers to add into our flowerbed, we check the following
            if (flowerbed[i] == 0 &&
                // if the current element equals 0
                (flowerbed[i + 1] == 0 || i == flowerbed.length - 1) &&
                // and the next element equals zero OR the current element is the last element in the array
                (flowerbed[i - 1] == 0 || i == 0)
                // and the previous element equals zero OR the current element is the first in the array
                ) {
                flowerbed.splice(i, 1, 1);
                // then replace the current 0 with a 1
                n -= 1;
                // and decrease the number of flowers we need to put into the flowerbed
            }
        } else {
            // if we planted all of our flowers into the flowerbed, return true! well done!
            return true 
        }
    }
    // this will only hit if we weren't able to put all of our flowers into the flowerbed
    return false
};

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));