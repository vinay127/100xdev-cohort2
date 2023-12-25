function sum(num1, num2, funcToCall) {
    let result = num1 + num2;
    funcToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const ans = sum(12,234,displayResult);


// The third argument here is the call back function that gets called when we call funcToCall on line 3.


