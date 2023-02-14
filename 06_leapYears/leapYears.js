const leapYears = function(year) {

    // if year is divisible by 4 and year is not divisible by 100 or divisible by 400 return true
    if (year % 4 === 0 &&
       (year % 100 !== 0 || year % 400 === 0)){

            return true;
    }

    return false;

};

// Do not edit below this line
module.exports = leapYears;
