const sumAll = function(num1, num2) {

    // if numbers entered are not positive integers or are strings return error
    if (!(num1 >= 0 && num2 >= 0) ||
       (typeof num1 == "string" || typeof num2 == "string")){

        return "ERROR";
    }

    // declare variable to store sum
    let sum = 0;

    // if first number is bigger than second
    if (num1 > num2){

        // swap variables
        temp = num2;
        num2 = num1;
        num1 = temp;
    }

    // loop incrementally from first number to second, adding each number to sum each time
    for (let i = num1; i <= num2; i++){
        sum = sum + i;
    }

    return sum;

};


// Do not edit below this line
module.exports = sumAll;
