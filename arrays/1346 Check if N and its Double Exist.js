// Problem:
// Given an array arr of integers, check if there exists two
// integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Solution:
var checkIfExist = function (arr) {
    const hash = {}
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

const arr = [10, 2, 5, 3]
// Look at our array! We see 10 first, which is the double of 5! If we only recorded in our hash
// that 10 has a double of 20, then we wouldn't know that we've seen 5's double when we look at 5 later! 
// That's why we saved both the half and the double in our hash! :)
checkIfExist(arr)
