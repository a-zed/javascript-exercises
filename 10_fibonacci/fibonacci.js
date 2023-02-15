const fibonacci = function(num) {

    // if number is negative return oops
    if (num < 0){
        return "OOPS";
    }

    // Declare variables to store previous, current and next fibonacci numbers
    let previousFibonacci = 0;
    let currentFibonacci = 1;
    let nextFibonacci;

    // Loop through sequence until num reached
    for (let i = 1; i < num; i++){

        // Update fibonacci values as it moves through the sequence
        nextFibonacci = previousFibonacci + currentFibonacci;
        previousFibonacci = currentFibonacci;
        currentFibonacci = nextFibonacci;
    }

    return currentFibonacci;

};

// Do not edit below this line
module.exports = fibonacci;
