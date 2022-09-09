const sumAll = function(a,b) {
    let start;
    let end;
    let sum = 0;
    if (!(a>=0 && b>=0) || typeof a !== "number" || typeof b !== "number"){
        return 'ERROR';
    }
    if (b > a){
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
