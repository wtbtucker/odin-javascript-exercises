const reverseString = function(string) {
    let string_array = string.split("");
    let array_reversed = string_array.reverse();
    let string_reversed = array_reversed.join("");
    return string_reversed;
};

// Do not edit below this line
module.exports = reverseString;
