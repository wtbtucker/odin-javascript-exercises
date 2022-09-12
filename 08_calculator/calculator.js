const add = function(a,b) {
	let c = Number(a) + Number(b);
  return c;
};

const subtract = function(a,b) {
	return Number(a) - Number(b);
};

const sum = function() {
  let sum = 0;
  let number_array = arguments[0];
	for (let i = 0; i < number_array.length; i++) {
    sum += Number(number_array[i]);
  }
  return sum;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
