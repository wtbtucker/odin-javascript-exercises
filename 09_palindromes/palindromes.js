const palindromes = function (string) {
    string = string.replace(/[,.!@#$%^&*()]/g,"");
    string = string.replace(/\s+/g,"");
    string = string.toLowerCase();
    console.log(string);
    let half_string_length = Math.floor(string.length / 2);
    let first_half = string.slice(0, half_string_length);
    let second_half = string.slice(0.-half_string_length).split("");
    let reverse_second_half = second_half.reverse().join("");

    return (first_half === reverse_second_half) ? true : false;
// split the string into two halves
// reverse the second half
// compare to the first half
};

// Do not edit below this line
module.exports = palindromes;
