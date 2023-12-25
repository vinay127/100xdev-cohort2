function sum(a, b) {
    return a+b;
}


function calculate(a,b,funcToCall) {
    return funcToCall(a,b);
}


const res = calculate(12,23,sum)
console.log("Sum is :::"+ res);