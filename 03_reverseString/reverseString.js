const reverseString = function(stringToReverse) {

    let arrayOfChars = stringToReverse.split("");

    let reversedArray = arrayOfChars.reverse();

    return reversedArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
