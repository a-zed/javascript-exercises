const repeatString = function(phrase, timesRepeated) {

    if (timesRepeated < 0){
        return "ERROR";
    }

    let generatedString = "";

    for (let i = 1; i <= timesRepeated; i++){

        generatedString = phrase + generatedString
    }

    return generatedString;

};

// Do not edit below this line
module.exports = repeatString;
