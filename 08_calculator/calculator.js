const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbersToSum) {
  let sum = 0;
	for (let number of numbersToSum){
    sum = sum + parseInt(number);
  }
  return sum;
};

const multiply = function(numbersToMultiply) {
  let total = 1;
	for (let number of numbersToMultiply){
    total = total * parseInt(number);
  }
  return total;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let total = 1;
  for (let i = num; i > 0; i--){
    total = total * i;
  }
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
