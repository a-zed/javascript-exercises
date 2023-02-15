const caesar = function(stringToBeEncoded, shiftFactor) {

    // reduce shiftFactor to -25 - +25
    shiftFactor = shiftFactor % 26;

    // convert to array
    const arrayOfChars = stringToBeEncoded.split("");

    // loop through each char
    for (let i = 0; i < arrayOfChars.length; i++){

            // pass into encodeChar function and store new value
            arrayOfChars[i] = encodeChar(arrayOfChars[i], shiftFactor)
        }

    // return the modified array as a string
    return arrayOfChars.join("");

};


function encodeChar(char, shiftFactor){

    // store char ascii code in variable and create variable to store new ascii value
    let asciiValue = char.charCodeAt(0);
    let newAsciiValue = asciiValue + shiftFactor;

    // if char is uppercase
    if (asciiValue >= 65 && asciiValue <= 90){

        // if new value needs to be wrapped
        if (newAsciiValue < 65){
            newAsciiValue = 91 - (65 - newAsciiValue);
        }
        else if (newAsciiValue > 90){
            newAsciiValue = 64 + (newAsciiValue - 90);
        }
    }

    // else if it's lowercase
    else if (asciiValue >= 97 && asciiValue <= 122) {

        // if new value needs to be wrapped
        if (newAsciiValue < 97){
            newAsciiValue = 123 - (97 - newAsciiValue);
        }
        else if (newAsciiValue > 122){
            newAsciiValue = 96 + (newAsciiValue - 122);
        }
    }

    // else it's not a letter, so return unmodified char
    else {
        return char;
    }

    // if modified, return char represented by new ascii value
    return String.fromCharCode(newAsciiValue);
}

// Do not edit below this line
module.exports = caesar;
