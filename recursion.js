// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax() {
    // This function returns the largest number in a given array.
}

function factorial() {
    // This function returns the factorial of a given number.
}

function fibonacci() {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips() {
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
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