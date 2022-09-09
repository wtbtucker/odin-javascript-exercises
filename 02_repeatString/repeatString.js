const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let output_string = "";
    for (let i = 0; i < num; i++) {
        output_string += string;
    }
    return output_string;
};

// Do not edit below this line
module.exports = repeatString;
