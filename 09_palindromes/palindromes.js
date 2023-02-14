const palindromes = function (string) {

    let stringRefined = string.toLowerCase().replace(/[^a-z]/g, "");
    return stringRefined == stringRefined.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
