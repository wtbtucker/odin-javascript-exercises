const fibonacci = function(member) {
    member = Number(member);
    let array = [1,1];
    for (let i = 1; i < (member-1); i++) {
        let sum = array[i] + array[i-1];
        array.push(sum);
    }
    return (member > 0) ? array.pop() : "OOPS";

};

// Do not edit below this line
module.exports = fibonacci;
