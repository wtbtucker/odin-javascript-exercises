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

// check solution on this one
const multiply = function() {
  let product = 1;
  let number_array = arguments[0];
  console.log(number_array);
  for (let i = 0; i < number_array.length; i++) {
    let item = Number(number_array[i]);
    product = product * item;
  }
  return product;
};

const power = function(a,b) {
	return Number(a)**Number(b);
};

const factorial = function(a) {
  let factorial_product = 1;
  for (let i = a; i > 0; i--) {
    factorial_product *= i;
  }

	return factorial_product;
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
