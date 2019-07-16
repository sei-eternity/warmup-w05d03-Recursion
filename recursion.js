// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion


function findMax(arr, index = 1, max) {
    if (!max & arr.length) {
        max = arr[0];
    }
    if (index == arr.length) {
        return max;
    } else {
        if (arr[index] > max) {
            max = arr[index]
        }
        return findMax(arr, index + 1, max);
    }
}

function factorial(num) {
    if (num == 1 || num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function fibonacci(num) {
    if (num == 1 || num == 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function coinFlips(num) {
    const results = [];

    function rCoinFlips(stem = "") {
        if (stem.length === num) {
            results.push(stem);
        } else {
            rCoinFlips(stem + "H");
            rCoinFlips(stem + "T");
        }
    }
    rCoinFlips();
    return results;
}

function letterCombinations(arr) {
    const results = [];

    function rLetterCombinations(stem, remainder) {
        if (stem.length === arr.length) {
            results.push(stem);
            return;
        }
        if (stem.length > 0) {
            results.push(stem);
        }
        for (let i = 0; i < remainder.length; i++) {
            const newRemainder = remainder.slice(0, i).concat(remainder.slice(i + 1));
            rLetterCombinations(stem + remainder[i], newRemainder)
        }
    };
    rLetterCombinations("", arr);
    return results;
}

/////////////////////////TESTING//////////////////////


// it should work for positive and negative numbers 
let testArray = [3, 4, 2, 1, 2];
console.log("MAX:", findMax(testArray)) // Output: 4
let testNegatives = [-1, -4, -2];
console.log("MAX:", findMax(testNegatives)) // Output: -1

console.log("Factorial:", factorial(3)) // Output: 6
console.log("Factorial:", factorial(5)) // Output: 120

console.log("Fibonacci:", fibonacci(3)) // Output: 2
console.log("Fibonacci:", fibonacci(5)) // Output: 5


// it should include all possibilities
console.log("Coin Flips:", coinFlips(2)) // Output: [ 'HH', 'HT', 'TH', 'TT' ]
console.log("Coin Flips:", coinFlips(4)) // Output: [ 'HHHH', 'HHHT', 'HHTH', 'HHTT', 'HTHH', 'HTHT', 'HTTH', 'HTTT', 'THHH', 'THHT', 'THTH', 'THTT', 'TTHH', 'TTHT', 'TTTH', 'TTTT' ]



// it should include combinations in different order
console.log("Letter Combinations:", letterCombinations(["a", "b", "c"])) // Output: [ 'a', 'ab','abc','ac','acb','b','ba','bac','bc','bca','c','ca','cab','cb','cba' ]
console.log("Letter Combinations:", letterCombinations(["h", "e"])) // Output: [ 'h', 'he', 'e', 'eh' ]