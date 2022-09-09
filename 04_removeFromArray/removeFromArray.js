const removeFromArray = function() {
    const args = Array.from(arguments)
    let original_array = args[0];
    console.log(original_array);
    // TODO: list of arguments that are present in the original array
    for (let i=1; i < arguments.length; i++) {
        console.log(args[i])
        if (original_array.includes(args[i])) {
            const j = original_array.indexOf(args[i]);
            original_array.splice(j, 1);
        } else {
            continue;
        }
    }
    return original_array;
};

// Do not edit below this line
module.exports = removeFromArray;
