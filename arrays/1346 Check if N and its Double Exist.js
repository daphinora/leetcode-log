// Problem:
// Given an array arr of integers, check if there exists two
// integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Solution:
var checkIfExist = function (arr) {
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            // using a hash to remember what nums we've looked at - but we don't need
            // to keep a log of our current number, just the double and half of that num.
            hash[(arr[i] * 2)] = i;
            hash[(arr[i] / 2)] = i;
        } else { return true }
    }
    return false
    // this will only return false if the for loop never returns true!
};

var checkIfExistRobertStyle = function (arr) {
    const hash = {};
    for(let i = 0; i < arr.length; i++) {
        if(hash[arr[i]*2]) {
            return true
        } else {hash[arr[i]] = true}
    }
    return false
}

const arr = [10, 2, 5, 3]
// Look at our array! We see 10 first, which is the double of 5! If we only recorded in our hash
// that 10 has a double of 20, then we wouldn't know that we've seen 5's double when we look at 5 later! 
// That's why we saved both the half and the double in our hash! :)
console.log(checkIfExistRobertStyle(arr))



// Old Answer:
var checkIfExistOldAnswer = function (arr) {
    let i = 0;
    let result = false;

    while (i < arr.length) {
        if ((arr.filter(n => n === (arr[i] * 2) && n !== 0).length > 0) === true) {
            // Filter through the arr in each iteration of this loop to check for a double, I guess.
            // What a time sucker!
            // This was one of the first leetcode problems I did!!!! So crazy how much I've changed!
            result = true
            i = arr.length + 1
            // Why didn't I just use a for loop? Or just return true instead of manually breaking the loop?
            // ?????????????????????????????? LOL silly goose!
        } else { (++i) }
    };

    if (arr.filter(n => n === 0).length > 1) { result = true };

    return result
};

// checkIfExistOldAnswer(arr)